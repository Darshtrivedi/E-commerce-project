import React, { useState } from 'react'
import Navbar from './Navbar';
import '../assets/login-signup.css'

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
        alert('You searched for :'+ loginData.email);
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
        <br/> <br/>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email' className='input-label'>📧</label>
            <input type='email' name='email' id='email' placeholder='enter your email-address' className='input' onChange={handleChange}/>
            <br/> <br/> <br/>
            <label htmlFor='password' className='input-label'>🛡️</label>
            <input type='password' name='password' id='password' placeholder='enter your password' className='input' onChange={handleChange}/>
            <br/> <br/>
            <input type='submit' />
        </form>

      </div>
      </center>
    </div>
  )
}
