// SPDX-License-Identifier:MIT
pragma solidity >=0.8.0;

contract Token{

    address private owner;                           //Admin address

    mapping (address => doctor) private Doctors;     //mapping doctors to their addresses
    mapping (address => patient) private Patients;   //Mapping patients to their addresses
    mapping (address => mapping(address => uint16)) private patientToDoctor;      //patients and list of doctors who are allowed access to.
    mapping (address => mapping(bytes32 => uint16)) private patientToFile;        //files mapped to patients
    mapping (address => files[]) private patientFiles;
  
    // structure of adhaar
    struct adhaar{
        address id;
        uint64 adhaar_number;
        string name;
        string DOB;
        uint64 pincode;
    }

    // structure of files
    struct files{
        string file_Name;
        string file_type;
        string file_Hash;
    } 
    // structure of patient-info
    struct patient{
        string name;
        string dob;
        uint64 adhaar_number;
        string gender;
        string contact;
        address id;

        bytes32[] files;// hashes of file that belong to this user for display purpose
        address[] doctor_list;
    }

    // structure of doctor-info
    struct doctor{
        string name;
        uint64 adhaar_number;
        string contact;
        string specialization;
        address id;
        address[] patient_list;
    }

    constructor(){
        owner = msg.sender;
    }


    modifier checkDoctor(address id){
      doctor memory d = Doctors[id];
      require( d.id > address(0x0));
      _;
   }
    modifier checkPatient(address id){
      patient memory p = Patients[id];
      require( p.id > address(0x0));
      _;
    }
    modifier onlyOwner(){
      require(msg.sender == owner);
      _;
    }


// ------------------------------------------Get and Set Patient,Doctor Info---------------------------------------------------------
    function getOwnerInfo() public view onlyOwner() returns(address){
      return (owner);
    }
    // get patient details   
    function getPatientInfo() public view checkPatient(msg.sender) returns(patient memory){
       patient memory p = Patients[msg.sender];
       return p;
  }

  //Event to emit when new patient registers
  event patientRegister( address _patient, string message);
  // add/Register patient
    function addPatient(string memory _name,string memory _DOB,string memory _contact,string memory _gen,uint64 _adhaar_number) public{
      patient storage p = Patients[msg.sender];

      //Check if the patient already exists by address
      require(!(p.id > address(0x0)));
      Patients[msg.sender] = patient({name:_name,dob:_DOB,id:msg.sender,adhaar_number:_adhaar_number,gender:_gen,contact:_contact,files:new bytes32[](0),doctor_list:new address[](0)});

      emit patientRegister( msg.sender, "Registered as Patient");
  }

  //get doctor details
    function getDoctorInfo() public view  checkDoctor(msg.sender) returns(doctor memory){
        doctor memory d = Doctors[msg.sender];
        return d;
    }

    //Event to emit when new doctor registers
    event doctorRegister(address _doctor, string message);
    // add/Register doctor
    function addDoctor(address _id,string memory _name, string memory _contact, string memory _specialization,uint64 _adhaar_number) public{
        doctor storage d = Doctors[msg.sender];
        require(!(d.id > address(0x0)));
        
        Doctors[msg.sender] = doctor({name:_name,id:msg.sender,adhaar_number:_adhaar_number,contact:_contact,specialization:_specialization,patient_list:new address[](0)});
        emit doctorRegister(_id, "Registered as Doctor");
    }



//  ------------------------------------------------------------------------------------------------------------------------------------
    //Event to emit when patient grants access to doctor
    event grantDoctorAccess( address patient_address, string message, string _doctor, address doctor_address);
    function grantAccessToDoctor(address doctor_id) public checkPatient(msg.sender) checkDoctor(doctor_id) {
      
      patient storage p = Patients[msg.sender];
      doctor storage d = Doctors[doctor_id];
      require(patientToDoctor[msg.sender][doctor_id] < 1);// this means doctor already been access
      
      p.doctor_list.push(doctor_id);// new length of array
      uint16 pos = uint16(p.doctor_list.length);
      patientToDoctor[msg.sender][doctor_id] = pos;
      d.patient_list.push(msg.sender);

   
      
      emit grantDoctorAccess( msg.sender , "Granted access to doctor", d.name , doctor_id);
  }

  //Event to emit when patient revokes a doctor's access
  event revokeDoctorAccess(address patient_address, string message, string _doctor, address doctor_address);

  function revokeAccessFromDoctor(address doctor_id) public checkPatient(msg.sender){
    require(patientToDoctor[msg.sender][doctor_id] > 0);
    patientToDoctor[msg.sender][doctor_id] = 0;

    patient storage p = Patients[msg.sender];
    doctor storage d = Doctors[doctor_id];

    uint16 pdlength= (uint16)(p.doctor_list.length);
    uint16 pos=0;

    for (uint16 i = 0; i < pdlength; i++) {
      if(p.doctor_list[i] == doctor_id)
      {
        pos=i;
        break;
      }
    }

    for(;pos<pdlength-1;pos++)
    {
      p.doctor_list[pos]= p.doctor_list[pos+1];
    }

    p.doctor_list.pop();

    pdlength= (uint16)(d.patient_list.length);
    pos=0;

    for (uint16 i = 0; i < pdlength; i++) {
      if(d.patient_list[i] == msg.sender)
      {
        pos=i;
        break;
      }
    }

    for(;pos<pdlength-1;pos++)
    {
      d.patient_list[pos]= d.patient_list[pos+1];
    }

    d.patient_list.pop();

    emit revokeDoctorAccess(msg.sender, "Revoked access of doctor", d.name, doctor_id);
  }
}

    



