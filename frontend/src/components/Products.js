import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../assets/images/monitor.avif';
import Image2 from '../assets/images/Headphones-1.webp';
import Image3 from '../assets/images/keyboard-mouse-1.jpg';
import Image4 from '../assets/images/mobile-1.jpeg';
import Image5 from '../assets/images/watch-1.jpeg';
import Image6 from '../assets/images/all-1.jpeg';
import '../assets/category-products-effect.css'

export default function Products() {
  const products = [
    { name: "Monitor screens", image: Image1, id: 'p1' },
    { name: "Headphones", image: Image2, id: 'p2' },
    { name: "Keyboards and mouse", image: Image3, id: 'p3' },
    { name: "Mobile phones", image: Image4, id: 'p4' },
    { name: "Digital Watches", image: Image5, id: 'p5' },
    { name: "View more", image: Image6, id: 'p6' },
  ];


  return (
    <div className="container mt-5">
      
      <center>
        <div className="mb-4 p-4  category-header" >
          <h2 className='header-text'>What Are You Looking For <span className="text-primary">?</span></h2>
        </div>
      </center>
      
      <div className="row ">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4 hover-container ">
            <Link to={`/${product.id}`} className="card text-center " style={{ textDecoration: 'none' }}>
              <div
                className="card-body position-relative container-body"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  
                }}
              >
                <div className="text-white w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 position-absolute top-0 start-0">
                  <h1 className="m-0 text-content">{product.name}</h1>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <hr/>
    </div>
  );
}
