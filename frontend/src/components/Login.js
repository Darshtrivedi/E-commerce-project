import {React,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import { Link , useNavigate } from 'react-router-dom';
import '../assets/login.css'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';



export default function Login(props) {
  const navigate = useNavigate()
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
            const response = await axios.post('http://127.0.0.1:8000/login/', {
              username: loginData.username, 
              password: loginData.password
            });
            
            const token = response.data.access;
            localStorage.setItem('token', token);

            // Decode token
            const decodedToken = jwtDecode(token);
            const username = decodedToken.username;
            const email = decodedToken.email;

            // Store user details in localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);

            // Update user state in parent component
            props.setUser({ username:username,email:email });
            navigate('/profile')
        } catch (error) {
            console.error('Login failed', error);
        }
    };
  return (
    <div  >
 
    <section className="h-100" style={{overflow:'hidden'}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }}></i>
              <span className="h1 fw-bold mb-0">Logo</span>
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: '23rem' }} onSubmit={handleSubmit}>
                <h3 className="fw-normal text-center mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                  Log in
                </h3>

                {/* <label htmlFor='username' className='input-label  '><FontAwesomeIcon icon={faUser} /></label> */}

                {/* <div className=" form-outline mb-4"> */}
                  <input
                    type="text"
                    id="username"
                    name='username'
                    className=" form-control form-control-lg mb-4"
                    placeholder='Username'
                    value={loginData.username}
                    onChange={handleChange}
                  />
                {/* </div> */}

                
                  <input
                    type="password"
                    id='password'
                    name='password'
                    className="form-control form-control-lg mb-4"
                    placeholder='Password'
                    onChange={handleChange}
                    value={loginData.password}
                  />
                
                <div className="pt-1 mb-4">
                  <button className="btn btn-info w-100 btn-lg btn-block" type="submit"> 
                    Login
                  </button>
                </div>

                <p className="small mb-5 pb-lg-2">
                  <Link to='/forgotpass' style={{textDecoration:"none"}}>Forgot password?</Link>
                  <Link to='/signup' className='float-end' style={{textDecoration:"none"}}>New user?</Link>  
                </p>



              </form>
            </div>
          </div>
          
          <div className="col-sm-6 px-0 d-none d-sm-block login-image ">
            <img
              src="https://img.freepik.com/free-photo/top-view-set-gadgets-purple-neon-light-blue_155003-19114.jpg"
              alt="Login"
              className="w-100 vh-100"
              style={{ objectFit: 'cover', objectPosition: 'left' }}
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};
