import React from 'react';
import '../assets/ad-styling.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container } from 'react-bootstrap';
import Image1 from '../assets/images/ad-4.jpg';
import Image2 from '../assets/images/ad-5.jpg';
import Image3 from '../assets/images/ad-6.jpg';

export default function Ad_section() {
  return (
    <div className='' style={{width:"100vw",marginLeft: "calc(-50vw + 50%)",border:"0"}}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 ad-img"
            style={{width:"100vw",marginLeft:"-1%"}}
            src={Image1}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>Latest Smartphones</h3>
            <p>Check out the latest models and features.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 ad-img"
            src={Image2}
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>Best Laptops</h3>
            <p>Explore top-rated laptops at unbeatable prices.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 ad-img"
            src={Image3}
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>Trending Gadgets</h3>
            <p>Stay ahead with the newest tech gadgets.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    {/* </Container> */}
    </div>
  )
}


