import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import "../assets/ads.css";
import Image1 from '../assets/images/ad1.jpg'
import Image2 from '../assets/images/ad2.jpg'
import Image3 from '../assets/images/ad3.jpg'

export default function AdSection(){
  const [currentAd, setCurrentAd] = useState(0);
  const ads = [
    { image: Image1, link: "#link1" },
    { image: Image2, link: "#link2" },
    { image: Image3, link: "#link3" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd + 1) % ads.length);
    }, 3000); // Change ad every 3 seconds

    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <div className="ad-section">
        {/* <center> */}
      {ads.map((ad, index) => (
        <Link
          to={ad.link}
          id={index}
          className={`ad-slide ${index === currentAd ? "active" : ""}`}
        >
          <img src={ad.image} alt={`Ad ${index + 1}`} className="ad-image" /></Link>
        
      ))}
      {/* </center> */}
    </div>
  );
};

