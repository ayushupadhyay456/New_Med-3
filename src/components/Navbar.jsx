import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
         <nav className="navbar fixed-top navbar-expand-lg  navbar-dark" style={{backgroundColor:'#1E1A1A'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><h2>MED 3</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        <li className="nav-item dropdown">
          <a className ="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Register
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/RegisPat">As Patient</a></li>
            <li><a className="dropdown-item" href="/RegisDoc">As Doctor</a></li>
          </ul>
        </li>
             
        <li className="nav-item"><Link className="nav-link" to="/upload">Upload</Link></li>
        

        
      </ul>
      <button className='btn btn-light'
      onClick={async ()=>
      {
        if (window.ethereum)
        {
           alert(await window.ethereum.enable());
            
        }
      }}
      
      
      
      type='Submit'>Connect Wallet</button>
    </div>
  </div>
  
</nav>
    </div>
  )
}