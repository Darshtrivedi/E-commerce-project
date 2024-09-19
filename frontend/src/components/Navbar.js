import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import Logo from '../logo192.png';
import '../assets/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


export default function Navbar(props) {
  const navigate = useNavigate()

  const [searchData, setSearchData] = useState({
    searchTerm: '',
  });
  
  const handleChange = (e) => {
    if (props.user) {
      const { name, value } = e.target;
  
      setSearchData({
        ...searchData,
        [name]: value,
      });
    } else {
      alert("Please login first!");
      setSearchData({
        searchTerm: ""
      });
      e.target.blur();
      navigate("/login");
    }
  };
  
  const searchProducts = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('http://127.0.0.1:8000/products/product-search/', {
        search_term: searchData.searchTerm
      }, {
        headers: { 'Content-Type': 'application/json' }
      });
  
      alert('You searched for: ' + searchData.searchTerm);
  
      localStorage.setItem('searchTerm', searchData.searchTerm);
      localStorage.setItem('products',JSON.stringify(response.data));
      
      setSearchData({
        searchTerm: ""
      });

      props.setProducts(response.data)
      console.log(response.data);
      if(response.data){
        
        navigate('/products/display_products')
      }
    } catch (error) {
      console.error('Error searching for products:', error.response ? error.response.data : error.message);
    }
  };
  

  return (
    <nav className="navbar navbar-expand-lg navbar-main-body fixed-top">
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
              <Link className="nav-link nv-link" to="/about#contact">Contact us</Link>
            </li>
          </ul>
          <form className="d-flex " onSubmit={searchProducts} >
            <input
              className="form-control me-2  search-bar "
              
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="searchTerm"
              value={searchData.searchTerm}
              onChange={handleChange}
            />
            <button className="btn btn-accent text-light search-button" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
         {props.user ?(
          <Link to="/profile" className="btn btn-light mx-3" style={{borderRadius:"50%"}}><FontAwesomeIcon icon={faUser}  /></Link>
         ):(
          <Link to="/login" className="btn btn-light mx-3">Login</Link>
         )}

          

        </div>
      </div>
    </nav>
  );
}
