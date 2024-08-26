import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/navbar-responsive.css';
import Logo from '../logo192.png';

function Navbar() {
  const [searchData, setSearchData] = useState({ search: '' });
  const [isNavOpen, setIsNavOpen] = useState(false); // State for toggling the navbar

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

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="toggle-icon" onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`} id='navbar-links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact-us</Link></li>
        </ul>
        <form onSubmit={handleSubmit}>
          <div className='search-div'>
            <input type='search' id='search' className='search-bar' placeholder='Search...' name='search' onChange={handleChange} />
          </div>
        </form>
        <div className='navbar-buttons'>
          <Link to="/login"><button className="buttons">Login</button></Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
