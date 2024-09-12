import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo192.png';
import '../assets/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function Navbar() {
  const [searchData, setSearchData] = useState({
    search: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('You searched for: ' + searchData.search);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // Function to check if the user is logged in
  const checkLoginStatus = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/check-login-status/');
      setIsLoggedIn(response.data.isLoggedIn);
      setUsername(response.data.username);
      console.log(response.data.username)
    } catch (error) {
      console.error('Error fetching login status', error);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);


  return (
    <nav className="navbar navbar-expand-lg navbar-main-body">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" /> {/* Replace with your logo path */}
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{border:"1px solid white",backgroundColor:"white"}}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mx-5 me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link nv-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nv-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nv-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nv-link" to="/contact">Contact us</Link>
            </li>
          </ul>
          <form className="d-flex " onSubmit={handleSubmit} >
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
              onChange={handleChange}
            />
            <button className="btn btn-accent text-light search-button" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          {/* <div className="navbar-buttons">
            <Link to="/login">
              <button className="btn" id='button-login'>Login</button>
            </Link>
          </div> */}

          <ul className="navbar-nav ml-auto">
          {/* Conditionally render based on login status */}
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  <i className="fas fa-user-circle"></i> {username}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/logout">Logout</a>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <a className="nav-link text-light" href="/login">Login {username}</a>
            </li>
          )}
        </ul>

        </div>
      </div>
    </nav>
  );
}
