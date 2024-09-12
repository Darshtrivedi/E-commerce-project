import React,{useState} from 'react';
import { Link , useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

export default function SignupPage() {

    const navigate = useNavigate();
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
          setSignupData({
            username: '',
            email: '',
            password1: '',
            password2: '',
          })
          navigate("/login")
          // Optionally, redirect to login page or reset form
        } catch (error) {
          console.error('Registration error:', error);
          setErrorMessage('Error registering user. Please try again.');
        }

        
        
      };

  return (
    <div>
        <Navbar/>
    <section className="vh-100 bg-light">
      <div className="container-fluid h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          
          {/* Left Section - Product Ad */}
          <div className="col-lg-6 d-none d-lg-flex h-100">
            <img 
              src="https://cdn.pixabay.com/photo/2017/07/31/18/29/laptop-2559792_640.jpg" 
              alt="signup Ad" 
              className="img-fluid h-100 w-100" 
              style={{  objectFit: 'cover' }} 
            />
          </div>

          {/* Right Section - Signup Form */}
          <div className="col-lg-6 d-flex align-items-center">
            <div className="card-body p-5 text-black">
              <h3 className="mb-5 text-uppercase text-center">Sign Up</h3>
              <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="form-outline mb-4">
                  
                  <input type="text" id="username" name="username" value={signupData.username} className="form-control form-control-lg" onChange={handleChange} placeholder="Create Username" required />
                </div>

                {/* Email Input */}
                <div className="form-outline mb-4">
                 
                  <input type="email" id="email" name="email" value={signupData.email} className="form-control form-control-lg" onChange={handleChange} placeholder="Email Address" required />
                </div>

                {/* Password Input */}
                <div className="form-outline mb-4">
                  
                  <input type="password" id="password1" name="password1" value={signupData.password1} className="form-control form-control-lg" onChange={handleChange} placeholder="Password" required />
                </div>

                {/* Confirm Password Input */}
                <div className="form-outline mb-4">
                  
                  <input type="password" id="password2" name="password2" value={signupData.password2} className="form-control form-control-lg" onChange={handleChange} placeholder="Confirm Password" required />
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                </div>
              </form>

              <hr className="my-4" />

              <div className="text-center">
                <Link to='/login'  className="text-decoration-none">Already have an account? </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};
