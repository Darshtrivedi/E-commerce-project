import {React,useEffect} from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Ads from './components/Ad-section'
import Products from './components/Products'
import './App.css'
// import { SLink, Element, animateScroll as scroll } from 'react-scroll';

function Home() {
   
  
    return (
        <div >
            <Navbar />
            <Ads/>
            <Products/>
          </div>
    )
}

export default Home
