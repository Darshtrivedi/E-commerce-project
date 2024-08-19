import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
import '../assets/login-signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons';



export default function Signup() {
    const [signupData, setSignupData] = useState({
        username:'',
        email:'',
        password1:'',
        password2:'',
      });
    
      const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setSignupData({
          ...signupData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if(signupData.password1 === signupData.password2){
            alert("Thank you for signing up "+signupData.username)
        }
        else{
            alert("Passwords didn't matched")
            
        }
      };
  return (
    <div>
    <Navbar/>
    <center>
      <br/>
    <div className='page-body'>
      <br/>
      <p className='body-header'>Signup</p>
      <br/>
      <hr className='horizontal-line'/>
      <br/>
      <form onSubmit={handleSubmit}>
          <label htmlFor='username' className='input-label'>
          <FontAwesomeIcon icon={faUser} />
          </label>
          <input type='text' name='username' id='username' placeholder='Create your username' className='input' pattern='[A-Za-z].*'
          minLength={5} maxLength={15} onChange={handleChange} required/>
          <br/> <br/>
          <label htmlFor='email' className='input-label'><FontAwesomeIcon icon={faEnvelope} /></label>
          <input type='email' name='email' id='email' placeholder='enter your email-address' className='input' onChange={handleChange} required/>
          <br/> <br/> 
          <label htmlFor='password1' className='input-label'><FontAwesomeIcon icon={faLock} /></label>
          <input type='password'  name='password1' id='password1' placeholder='Create password' className='input' maxLength={12}
          pattern='^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,12}$'
          onChange={handleChange} required />
          <br/><br/>
          <label htmlFor='password2' className='input-label'><FontAwesomeIcon icon={faLock} /></label>
          <input type='password' name='password2' id='password2' placeholder='confirm password' className='input' maxLength={12}
          pattern='^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,12}$'
          onChange={handleChange} required />
          <br/>
          <p className='password-note'>(Note :  password must contain a capital letter ,symbol, number, and length must be between 6 to 12 characters)</p>
          <br/>
          <input type='submit' className='submit'/>
          <div className='signup-footer'>
            <Link to='/login' className='need-help'>Already have an account?</Link>
          </div>
      </form>

    </div>
    </center>
  </div>
  )
}
