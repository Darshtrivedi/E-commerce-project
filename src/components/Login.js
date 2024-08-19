import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
import '../assets/login-signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
    const [loginData, setLoginData] = useState({
        email:'',
        password:'',
      });
    
      const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setLoginData({
          ...loginData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your email ID :'+ loginData.email);
      };
  return (
    <div>
      <Navbar/>
      <center>
        <br/>
      <div className='page-body'>
        <br/>
        <p className='body-header'>Login</p>
        <br/>
        <hr className='horizontal-line'/>
        <br/> <br/><br/>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email' className='input-label'><FontAwesomeIcon icon={faEnvelope} /></label>
            <input type='email' name='email' id='email' placeholder='enter your email-address' className='input' onChange={handleChange} required/>
            <br/> <br/> <br/>
            <label htmlFor='password' className='input-label'><FontAwesomeIcon icon={faLock} /></label>
            <input type='password' name='password' id='password' placeholder='enter your password' className='input' maxLength={12}
            pattern='^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,12}$'
            onChange={handleChange} required />
            <br/>
            <p className='password-note'>(Note :  password must contain a capital letter ,symbol, number, and length must be between 6 to 12 characters)</p>
            <br/> <br/>
            <input type='submit' className='submit'/>
            <div className='login-footer'>
              <Link to='/forgot-pass' className='forgot-pass'>forgot password?</Link>
              <Link to='/signup' className='need-help'>New user?</Link>
            </div>
        </form>

      </div>
      </center>
    </div>
  )
}
