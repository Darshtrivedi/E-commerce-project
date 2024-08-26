
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../assets/login-signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function Signup() {
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signupData.password1 !== signupData.password2) {
      setErrorMessage("Passwords didn't match");
      return;
    }

    // Prepare the data to be sent to the backend
    const userData = {
      username: signupData.username,
      email: signupData.email,
      password: signupData.password1,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/register/', userData);
      console.log('User registered:', response.data);
      alert('Registration successful!');
      // Optionally, redirect to login page or reset form
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage('Error registering user. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <center>
        <br />
        <div className='page-body'>
          <br />
          <p className='body-header'>Signup</p>
          <br />
          <hr className='horizontal-line' />
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor='username' className='input-label'>
              <FontAwesomeIcon icon={faUser} />
            </label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Create your username'
              className='input'
              pattern='[A-Za-z].*'
              minLength={5}
              maxLength={15}
              onChange={handleChange}
              required
            />
            <br /> <br />
            <label htmlFor='email' className='input-label'>
              <FontAwesomeIcon icon={faEnvelope} />
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email-address'
              className='input'
              onChange={handleChange}
              required
            />
            <br /> <br />
            <label htmlFor='password1' className='input-label'>
              <FontAwesomeIcon icon={faLock} />
            </label>
            <input
              type='password'
              name='password1'
              id='password1'
              placeholder='Create password'
              className='input'
              maxLength={12}
              pattern='^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,12}$'
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <label htmlFor='password2' className='input-label'>
              <FontAwesomeIcon icon={faLock} />
            </label>
            <input
              type='password'
              name='password2'
              id='password2'
              placeholder='Confirm password'
              className='input'
              maxLength={12}
              pattern='^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,12}$'
              onChange={handleChange}
              required
            />
            <br />
            <p className='password-note'>
              (Note : password must contain a capital letter, symbol, number, and length must be between 6 to 12 characters)
            </p>
            <br />
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
            <input type='submit' className='submit' />
            <div className='signup-footer'>
              <Link to='/login' className='need-help'>Already have an account?</Link>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
}