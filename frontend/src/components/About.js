import React from 'react'
import Navbar from './Navbar'
import '../assets/about-us.css'

export default function About() {
  return (
    <div >
      <Navbar/>
      
      <div className='about-page'>
        
        <center>
        
        <div className='about-body'>
          <p className='about-header'>About us</p>
          <br/><br/><br/>
          <hr className='about-horizontal-line'/>
          <br/><br/>
          <p className='paragraph-1'>Welcome to [Your Website Name], your one-stop shop for the latest and greatest in electronic devices. Whether you're a tech enthusiast, a professional, or just looking for the perfect gadget to make life easier, we've got you covered.
          <br/><br/><br/>
          <p className='about-header-2'>Our Mission</p>
          <br/><br/>
          <hr className='about-horizontal-line'/>
          <br/>
          At [Your Website Name], our mission is to bring you the best technology at unbeatable prices. We believe that everyone should have access to high-quality electronics without breaking the bank. That's why we're committed to offering a wide range of products, from the latest smartphones and laptops to essential accessories and cutting-edge gadgets, all carefully selected to meet your needs.
          <br/><br/><br/>
          {/* <p className='about-header-2'>Why Choose Us?</p> */}
          </p>
        </div>
        </center>
        
      </div>
      
    </div>
  )
}
