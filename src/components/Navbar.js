import React, { useState } from 'react'
import { BrowserRouter,Router,Route,Routes,Link } from 'react-router-dom'
// import '../assets/navbar.css'
import '../assets/Navbar1.css'
import Logo from '../logo192.png'
import Home from '../Home'


// export default function Navbar() {
//   return (
//     <div>
//        <nav className="navbar">
//             <p className='logo'>Hello</p>
//             <ul className="navbar-links">
//                 <li><Link exact to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/services">Services</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
                
//             </ul>
//             <Link to="/login" className='login-button'><button>Login</button></Link>
//         </nav>
        
//     </div>
//   )
// }

function Navbar() {
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
        alert('Form submitted:'+ searchData.search);
      };
  return (
    <div>
      <nav className="navbar">
          <div className="logo">
              <img src={Logo} alt="Logo" /> {/* Replace with your logo path */}
          </div>
          <ul className="navbar-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>
          <form onSubmit={handleSubmit}>
          <div className='search-div'>
            {/* <label htmlFor='search' className='search-icon'>⌕</label> */}
            <input type='search' id='search' className='search-bar' placeholder='⌕' name='search'onChange={handleChange}/>
          </div>
          </form>
          <div className='navbar-buttons'>
              <Link to="/login"><button className="buttons">Login</button></Link>
              {/* <Link to="/signup"><button className="buttons">Signup</button></Link> */}

          </div>
      </nav>
      
      </div>
  );
}

export default Navbar;