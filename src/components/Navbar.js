import React, { useState } from 'react'
import {Link } from 'react-router-dom'
// import { Link, Element, animateScroll as scroll } from 'react-scroll';
import '../assets/navbar.css'
import Logo from '../logo192.png'


export default function Navbar() {
 
    // const[search,setSearch] = useState("")
    const [searchData, setSearchData] = useState({
        search:'',
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
        alert('You searched for :'+ searchData.search);
      };
  return (
    <div>
      <nav className="navbar">
          <div className="logo">
              <img src={Logo} alt="Logo" /> {/* Replace with your logo path */}
          </div>
          
          <ul className="navbar-links" id='navbar-links'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li> <Link to="/contact">Contact us</Link></li>
          </ul>
          <form onSubmit={handleSubmit}>
          <div className='search-div'>
            {/* <label htmlFor='search' className='search-icon'>⌕</label> */}
            <input type='search' id='search' className='search-bar' placeholder='⌕' name='search'onChange={handleChange}/>
          </div>
          {/* <input type="checkbox" id="nav-toggle"/>
          <label for="nav-toggle" className='toggle-icon' target='navbar-links'>&#9776;</label> */}
          </form>
          <div className='navbar-buttons'>
              <Link to="/login"><button className="buttons">Login</button></Link>
             
              {/* <Link to="/signup"><button className="buttons">Signup</button></Link> */}
          </div>
      </nav>
      </div>
  );
}

// export default Navbar;