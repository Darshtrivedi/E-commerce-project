import {React , useEffect , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/profile.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser } from '@fortawesome/free-solid-svg-icons';


export default function Profile () {
  const[userdata,setUserdata] = useState(
    {
      username:'',
       email:''
    }
  )
  useEffect(() => {
    setUserdata({
      username:localStorage.getItem('username'),
      email:localStorage.getItem('email')
    })
}, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="row no-gutters">
              <div className="col-md-4 gradient-bg text-white text-center d-flex flex-column align-items-center justify-content-center">
                
                <FontAwesomeIcon icon={faUser} className='text-center bg-light text-dark p-3 display-4 mb-4' style={{borderRadius:"50%"}} />
                <h4 className="mb-1">{userdata.username}</h4>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Information</h5>
                  <p className="mb-2">
                    <strong>Email: </strong>{userdata.email}
                  </p>
                 
                  <h5 className="mt-4">Projects</h5>
                  <p>
                    <strong>Recent : </strong>Sam Disuja
                  </p>
                  <p>
                    <strong>Most Viewed: </strong>Dinoter Husainm
                  </p>
                  <div className="mt-4">
                    <a href="#" className="text-primary me-3">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-info me-3">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-danger">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
