import {React , useState , useEffect} from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Login from './components/Login'
import Signup from './components/Signup'
import ProductDetail from './components/Product-page'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import DisplayProducts from './components/Display-Products'

import 'bootstrap/dist/js/bootstrap.bundle.min';





function App() {
    const [user, setUser] = useState(null);

    // Load user details from localStorage when the app is initialized
    useEffect(() => {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');

        if (token && username) {
            setUser({ username , email });
        }
    }, []);

    const handleLogout = () => {
        // Clear localStorage and reset user state
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        setUser(null);
    };

    const[products , setProducts]=useState(null)

  return (
    <div className='main-page'>
      <BrowserRouter>
      <Navbar user={user} setProducts={setProducts}/>
      <div className='page-content'>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about#contact" element={<Contact />} />
              <Route path="/login" element={<Login setUser={setUser}  />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile user={user} />} />
              <Route path="/products/:product_id" element={<ProductDetail/>} />
              <Route path="/products/display_products" element={<DisplayProducts products={products} setProducts={setProducts}/>} />
              {/* <Route path="*" element={alert("Page not found")} /> */}
              {/* Add other routes here */}
          </Routes>
          {user ? (
                <div>
                    <p>Welcome, {user.email}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                   
                </div>
            )}
            </div>
      </BrowserRouter>
      </div>
  )
}

export default App;


