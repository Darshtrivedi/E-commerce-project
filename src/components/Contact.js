import React from 'react'
import Navbar from './Navbar'
import '../assets/contact-us.css'
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Contact() {
  return (
    <div>
      <Navbar/>
      <div className='contact-us-body-left'>
        
        <p className='header'>
          Contact us
        </p>
        <hr className='horizontal-line' />
        <p className='paragraph'>
          <FontAwesomeIcon icon={faEnvelope} className='icon'/>  itsupportebuy@gmail.com 
          <br/><br/>
          <FontAwesomeIcon icon={faSquarePhone} className='icon' />
        </p>
      </div>
      <div className='contact-us-body-right'>
        <p>You can sen your queries using this form</p>
        <form>

        </form>
      </div>
    </div>
  )
}
