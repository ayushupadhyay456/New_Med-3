// let Web3= require("web3");
// let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
// console.log("Hey Avi");
// web3.eth.getBalance("0xb97e991Ab3615027B6A6eB8Ea3411f83F924FDE4").then(console.log);
// let contract = new web3.eth.Contract([
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "address",
// 				"name": "_doctor",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "message",
// 				"type": "string"
// 			}
// 		],
// 		"name": "doctorRegister",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "address",
// 				"name": "patient_address",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "message",
// 				"type": "string"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "_doctor",
// 				"type": "string"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "address",
// 				"name": "doctor_address",
// 				"type": "address"
// 			}
// 		],
// 		"name": "grantDoctorAccess",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "address",
// 				"name": "_patient",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "message",
// 				"type": "string"
// 			}
// 		],
// 		"name": "patientRegister",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "address",
// 				"name": "patient_address",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "message",
// 				"type": "string"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "string",
// 				"name": "_doctor",
// 				"type": "string"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "address",
// 				"name": "doctor_address",
// 				"type": "address"
// 			}
// 		],
// 		"name": "revokeDoctorAccess",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_id",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_contact",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_specialization",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint64",
// 				"name": "_adhaar_number",
// 				"type": "uint64"
// 			}
// 		],
// 		"name": "addDoctor",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_DOB",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_contact",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_gen",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint64",
// 				"name": "_adhaar_number",
// 				"type": "uint64"
// 			}
// 		],
// 		"name": "addPatient",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getDoctorInfo",
// 		"outputs": [
// 			{
// 				"components": [
// 					{
// 						"internalType": "string",
// 						"name": "name",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "uint64",
// 						"name": "adhaar_number",
// 						"type": "uint64"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "contact",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "specialization",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "address",
// 						"name": "id",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "address[]",
// 						"name": "patient_list",
// 						"type": "address[]"
// 					}
// 				],
// 				"internalType": "struct Hospital.doctor",
// 				"name": "",
// 				"type": "tuple"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getOwnerInfo",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getPatientInfo",
// 		"outputs": [
// 			{
// 				"components": [
// 					{
// 						"internalType": "string",
// 						"name": "name",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "dob",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "uint64",
// 						"name": "adhaar_number",
// 						"type": "uint64"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "gender",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "contact",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "address",
// 						"name": "id",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "bytes32[]",
// 						"name": "files",
// 						"type": "bytes32[]"
// 					},
// 					{
// 						"internalType": "address[]",
// 						"name": "doctor_list",
// 						"type": "address[]"
// 					}
// 				],
// 				"internalType": "struct Hospital.patient",
// 				"name": "",
// 				"type": "tuple"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "doctor_id",
// 				"type": "address"
// 			}
// 		],
// 		"name": "grantAccessToDoctor",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "doctor_id",
// 				"type": "address"
// 			}
// 		],
// 		"name": "revokeAccessFromDoctor",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	}
// ],"0x20A57154a639461090148ef2e9E9FAc808145Bf8");
// contract.methods.addPatient("Avi","25112000","7054416929","Male","9966789012349988").call({from:"0x46db0e39DFD188057E4A865488c7A93E5AF28067"}).then();
// console.log("Registered successfully");
// contract.methods.getPatientInfo().call({from:"0x46db0e39DFD188057E4A865488c7A93E5AF28067"}).then(console.log);


let solc = require("solc");                //for compiling .sol file
let fs = require("fs");                    //for opening file
let Web3 = require("web3");                //for deployment
let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

let fileContent = fs.readFileSync("contracts/Token.sol").toString();
console.log(fileContent);

//giving input to solc compiler
var input = {
    language: "Solidity",
    sources: {
      "Token.sol": {
        content: fileContent,
      },
    },
  
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };

var output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(output);
let ABI = output.contracts["Token.sol"]["Token"].abi;
let bytecode = output.contracts["Token.sol"]["Token"].evm.bytecode.object;
console.log("ABI: ",ABI);
console.log("Bytecode: ",bytecode);

let contract = new web3.eth.Contract(ABI);
let defaultAccount;
web3.eth.getAccounts().then((accounts)=>{
    console.log("Accounts : ",accounts);
    defaultAccount = accounts[0];
    console.log("Default Account: ",defaultAccount);

    contract.deploy({data:bytecode}).send({from:defaultAccount,gas:5000000}).on("receipt",(receipt)=>{
        console.log("Contract Address:",receipt.contractAddress);
    }).then((demoContract)=>{
        demoContract.methods.getOwnerInfo().call((err,data)=>{
            console.log("Initial value:",data);
        });
    });
});