import React, { useState } from 'react'
import '../assets/products.css'
import Image1 from '../assets/images/monitor.avif'
import Image2 from '../assets/images/Headphones-1.webp'
import Image3 from '../assets/images/keyboard-mouse-1.jpg'
import Image4 from '../assets/images/mobile-1.jpeg'
import Image5 from '../assets/images/watch-1.jpeg'
import Image6 from '../assets/images/all-1.jpeg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion} from '@fortawesome/free-solid-svg-icons';
// import { faQuestion } from '@fortawesome/pro-light-svg-icons';



export default function Products() {
    const[backgrounds,setBackgrounds] = useState({})
    const products = [
        { name: "Monitor screens", image: Image1,id:'p1' },
        { name: "Headphones", image: Image2 ,id:'p2'},
        { name: "Keyboards and mouse", image: Image3 ,id:'p3'},
        { name: "Mobile phones", image: Image4 ,id:'p4'},
        { name: "Digital Watches", image: Image5 ,id:'p5'},
        { name: "View more", image: Image6 ,id:'p6'},
        // Add more products as needed
      ];
      function handleHover(productId, image) {
        setBackgrounds((prevBackgrounds) => ({
          ...prevBackgrounds,
          [productId]: {
            backgroundImage: `url(${image})`,
            backgroundSize:'cover',
            backgroundPosition: 'center',
            backdropFilter:'blur(20px)',
            color: "white",
          },
        }));
      }
    
      function handleLeave(productId) {
        setBackgrounds((prevBackgrounds) => ({
          ...prevBackgrounds,
          [productId]: {
            backgroundImage: 'none',
            color: "black",
          },
        }));
      }
  return (<div>
    {/* Product Categories */}
          <div className="product-grid">
          <center>
          <div className='header'>
            <p className='text'>What You're Looking For<p className='icon'>?</p></p>
          </div>
          </center>
          <br/>
          {products.map((product) => (

              <Link to={"/"+product.id} className="hover-container" onMouseEnter={(e)=>{

                }} style={{backgroundImage:`url(${product.image})`}}>
              <center>
              <h3 className="text-content">{product.name}</h3>
              </center>

              </Link>
                ))}
          </div>

          {/* Product lists */}
          <div className='products-list-1'>
            <center>
            <div className='header'>
              Most Liked Products
            </div>
            </center>
          </div>
          </div>
  )
}
  


