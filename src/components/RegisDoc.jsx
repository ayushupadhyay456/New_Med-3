import React from 'react'
import './RegisDoc.css'
import {useState} from 'react'


const RegisDoc = () => {
  const [firstName, setFirstName] = useState('');
  const [phone, setphone] = useState('');
  const [Email, setEmail] = useState('');
  const [Special, setSpecial] = useState('');
  const [Wallet, setWallet] = useState('');
  const [Aadhar,setAadhar] = useState('');
  const handleSubmit = event => {
    // console.log('handleSubmit ran');
    event.preventDefault(); 
    console.log('firstName:', firstName);
   
    console.log('phone:',phone);
    console.log('Email:',Email);
    console.log('Specialization:',Special);
    console.log('Wallet:',Wallet);
    console.log("Aadhar Number: ",Aadhar);
    

    setFirstName('');
    setphone('');
    setEmail('');
    setSpecial('');
    setWallet('');
    setAadhar('');

  }

 return (


  





  
    <div className='container'>
    <form className='form-det' onSubmit={handleSubmit}>
      <h1 align="center">Hello Doctor</h1>
  <div className="form-group">
    <label >Enter Name</label>
    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" onChange={event => setFirstName(event.target.value)} value={firstName} placeholder="Name"/>
    {/* <small className="form-text text-muted">We'll never share your details with anyone.</small> */}
  </div>
  <div className="form-group">
    <label >Enter Phone Number</label>
    <input type="text" className="form-control" id="exampleage" aria-describedby="emailHelp" onChange={event => setphone(event.target.value)} value={phone} placeholder="Phone Number"/>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your Phone Number with anyone else.</small> */}
  </div>
  <div className="form-group">
    <label >Enter Email</label>
    <input type="text" className="form-control" id="exampleage" aria-describedby="emailHelp" onChange={event => setEmail(event.target.value)} value={Email} placeholder="Email"/>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group">
    <label >Enter Specialization</label>
    <input type="text" className="form-control" id="exampleage" aria-describedby="emailHelp" onChange={event => setSpecial(event.target.value)} value={Special} placeholder="Specialization"/>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group">
    <label >Enter Wallet Address</label>
    <input type="text" className="form-control" id="exampleInputPassword1" onChange={event => setWallet(event.target.value)} value={Wallet} placeholder="Wallet Address"/>
  </div>
  <div className="form-group">
    <label >Enter Aadhar Number</label>
    <input type="text" className="form-control" id="exampleInputPassword1" onChange={event => setAadhar(event.target.value)} value={Aadhar} placeholder="Aadhar Number"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <p align="center">By signing to this webiste,you consent us to process and store this information in our datatbase.</p>
</form>
    </div>
  )
}

export default RegisDoc