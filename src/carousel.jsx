// src/components/Carousel.jsx
import React, { useState, useEffect } from "react";
import "./Carousel.css";
import carousel1 from "./carousel-pictures/carousel1.jpg";
import carousel2 from "./carousel-pictures/carousel2.jpg";
import carousel3 from "./carousel-pictures/carousel3.jpg";
import carousel4 from "./carousel-pictures/carousel4.jpg";
import carousel5 from "./carousel-pictures/carousel5.jpg";

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
