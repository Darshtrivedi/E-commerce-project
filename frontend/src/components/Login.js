
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import '../assets/login-signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock ,faUser} from '@fortawesome/free-solid-svg-icons';

export default function Login() {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
          ...loginData,
          [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                username: loginData.username, // Changed from 'email' to 'username'
                password: loginData.password
            });
            console.log('User logged in:', response.data);
            localStorage.setItem('token', response.data.access);  // Save JWT token
            alert('Login successful!');
        } catch (error) {
            console.error('Login error:', error);
            alert('Invalid credentials!');
        }
    };

    return (
        <div>
            <Navbar />
            <center>
                <br />
                <div className='page-body'>
                    <br />
                    <p className='body-header'>Login</p>
                    <br />
                    <hr className='horizontal-line' />
                    <br /> <br /> <br />
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='username' className='input-label'><FontAwesomeIcon icon={faUser} /></label>
                        <input type='text' name='username' id='username' placeholder='enter your username' className='input' onChange={handleChange} required />
                        <br /> <br /> <br />
                        <label htmlFor='password' className='input-label'><FontAwesomeIcon icon={faLock} /></label>
                        <input type='password' name='password' id='password' placeholder='enter your password' className='input' maxLength={12}
                        pattern='^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,12}$'
                        onChange={handleChange} required />
                        <br />
                        <p className='password-note'>(Note :  password must contain a capital letter, symbol, number, and length must be between 6 to 12 characters)</p>
                        <br /> <br />
                        <input type='submit' className='submit' />
                        <div className='login-footer'>
                            <Link to='/forgot-pass' className='forgot-pass'>forgot password?</Link>
                            <Link to='/signup' className='need-help'>New user?</Link>
                        </div>
                    </form>
                </div>
            </center>
        </div>
    );
}
