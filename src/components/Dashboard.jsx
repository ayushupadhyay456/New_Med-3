import React from 'react'
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tiny from '../photos/enc.svg'

import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import { faTruckMedical } from '@fortawesome/free-solid-svg-icons';

import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  
  return (
    <>

      <div className="d-content">

        <div className="d-left">
          <div className='d-left-head'>
            Decentralizing the Health Care.
          </div>
          <div className="d-left-head1">
            We help patients to own and secure their health records.Our team helps to take Doctor's appointment in an easy way.
          </div>
          <div className="btn btn-info">
            Get Started
          </div>
        </div>
        <div className="d-right">
          <img src = {tiny} alt="error"/>
        </div>
      </div>
      <div className="d-services">
        <div className='d-services-head'>Our Services</div>
        <div className="d-boxes">
          <div className="d-box">
            <div className="d-med-box">
              <FontAwesomeIcon className='d-med-box-img' icon={faSuitcaseMedical} />
              <div className="d-med-head">Remain Anonymous</div>
            </div>
            <p>Your Medical Data can't be tracked to your identity</p>

          </div>
          <div className="d-box">
            <div className="d-med-box">
              <FontAwesomeIcon className='d-med-box-img' icon={faTruckMedical} />
              <div className="d-med-head">Decentralized <br></br>Platform</div>
            </div>
            <p>To aid in managing patient reports and provide seamless Interface.</p>
          </div>
          <div className="d-box">
            <div className="d-med-box">
              <FontAwesomeIcon className='d-med-box-img' icon={faFileMedical} />
              <div className="d-med-head">Appointments</div>
            </div>
            <p>Can be taken from doctors in just a click.</p>
          </div>
        </div>


      </div>
      <div className="d-footer">
        <div className="d-footer-center">
          <h2>Subscribe to Our Newsletter</h2>
          <div className="d-footer-input">
            <input type="email" placeholder='Enter Your Email' />
            <div className="d-footer-btn btn btn-primary btn-lg">
              Submit
            </div>
          </div>

        </div>

      </div>
    <div className="d-footer-under">
      <ul className='d-footer-under-ul'>
        <li className='d-footer-under-li'>Contact us</li>
        <li className='d-footer-under-li'>About</li>
        <li className='d-footer-under-li'>Services</li>
        <li className='d-footer-under-li'>Terms of Use</li>
      </ul>
    </div>
    </>
  )
}

export default Dashboard