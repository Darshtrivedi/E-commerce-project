import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Login from './components/Login'



function App() {
  return (
    <div className='main-page'>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="*" element={alert("Page not found")} /> */}
              {/* Add other routes here */}
          </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App;