import React from "react";
import "./Photos.css";

const images2022 = import.meta.glob('../pictures/2022/*.{jpg,jpeg,png}', { eager: true });
const images2023 = import.meta.glob('../pictures/2023/*.{jpg,jpeg,png}', {eager: true});
const images2024 = import.meta.glob('../pictures/2024/*.{jpg,jpeg,png}', {eager : true});
const images2025 = import.meta.glob('../pictures/2025/*.{jpg,jpeg,png}', {eager : true});


export default function Photos() {

  const imagesList2022 = Object.values(images2022).map(mod => mod.default);
  const imagesList2023 = Object.values(images2023).map(mod => mod.default);
  const imagesList2024 = Object.values(images2024).map(mod => mod.default);
  const imagesList2025 = Object.values(images2025).map(mod => mod.default);

  return (

    <div className="body">

      <h1>2025</h1>
      {/* 2025 Image Section */}
      <div className = "gallery">
        {imagesList2025.map((src, index) => (
          <img key={index} src={src} alt={`photo-${index}`} />
        ))}
      </div>

      <h1>2024</h1>
      {/* 2024 Image Section */}
      <div className = "gallery">
        {imagesList2024.map((src, index) => (
          <img key={index} src={src} alt={`photo-${index}`} />
        ))}
      </div>

      <h1>2023</h1>
      {/* 2023 Image Section */}
      <div className = "gallery">
        {imagesList2023.map((src, index) => (
          <img key={index} src={src} alt={`photo-${index}`} />
        ))}
      </div>


      <h1>2022</h1>
      {/* 2022 Image Section */}
      <div className="gallery">
        {imagesList2022.map((src, index) => (
          <img key={index} src={src} alt={`photo-${index}`} />
        ))}
      </div>

    </div>
  );
}