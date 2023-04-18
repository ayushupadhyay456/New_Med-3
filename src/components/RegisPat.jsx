import React from 'react'
import './RegisPat.css'
const RegisPat = () => {
  return (
    <div className='container'>
    <form>
      <h1 align="center">Hello Patient</h1>
  <div className="form-group">
    <label >Enter Wallet address</label>
    <input type="text" className="form-control" id="patient_Wlt" aria-describedby="emailHelp" placeholder="Email"/>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group">
    <label >Enter Age</label>
    <input type="text" className="form-control" id="patientAge" aria-describedby="emailHelp" placeholder="Age"/>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group">
    <label >Enter Gender</label>
    <input type="text" className="form-control" id="patientGen" aria-describedby="emailHelp" placeholder="Gender"/>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group">
    <label >Enter Blood Type</label>
    <input type="text" className="form-control" id="patientBT" aria-describedby="emailHelp" placeholder="Blood Type"/>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" id="patientPass" placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <p align="center">By signing to this webiste,you consent us to process and store this information in our datatbase.</p>
</form>
    </div>
  )
}

export default RegisPat