import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'


function App() {
  return (
    <div className='main-page'>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="*" element={alert("Page not found")} /> */}
              {/* Add other routes here */}
          </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App;