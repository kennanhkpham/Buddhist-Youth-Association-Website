// src/components/Carousel.jsx
import React, { useState, useEffect } from "react";
import "./Carousel.css";
import carousel1 from "./carousel-pictures/carousel1.jpg";
import carousel2 from "./carousel-pictures/carousel2.jpg";
import carousel3 from "./carousel-pictures/carousel3.jpg";
import carousel4 from "./carousel-pictures/carousel4.jpg";
import carousel5 from "./carousel-pictures/carousel5.jpg";
import { Link } from "react-router-dom"; 
export default function Carousel() {
  const images = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      {images.map((src, i) => (
        <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`carousel-image ${i === index ? "active" : ""}`}
        />
        ))}


      <div className="carousel-overlay">
        <h2>Welcoming to the home of GĐPT Từ Đàm</h2>
        <p>At GĐPT Từ Đàm, rooted in the teachings of the Buddha, 
        we provide a welcoming space to explore mindfulness, kindness,
        and wisdom through engaging activities, discussions, and service projects.</p>
        <Link to="/about" className="carousel-button">
            Learn More About Us
        </Link>
      </div>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
