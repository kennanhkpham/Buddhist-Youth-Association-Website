import React, { useState } from "react";
import "./Photos.css";

const images2022 = import.meta.glob('../pictures/2022/*.{jpg,jpeg,png}', { eager: true });
const images2023 = import.meta.glob('../pictures/2023/*.{jpg,jpeg,png}', { eager: true });
const images2024 = import.meta.glob('../pictures/2024/*.{jpg,jpeg,png}', { eager: true });
const images2025 = import.meta.glob('../pictures/2025/*.{jpg,jpeg,png}', { eager: true });

export default function Photos() {
  const [selectedImage, setSelectedImage] = useState(null);

  const imagesList2022 = Object.values(images2022).map(mod => mod.default);
  const imagesList2023 = Object.values(images2023).map(mod => mod.default);
  const imagesList2024 = Object.values(images2024).map(mod => mod.default);
  const imagesList2025 = Object.values(images2025).map(mod => mod.default);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleImageClose = () => {
    setSelectedImage(null);
  };

  const handleDownload = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageUrl.split("/").pop(); // Extract filename
    link.click();
  };

  return (
    <div className="body">
      {/* 2025 */}
      <h1>2025</h1>
      <div className="gallery">
        {imagesList2025.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`photo-2025-${index}`}
            onClick={() => handleImageClick(src)}
          />
        ))}
      </div>

      {/* 2024 */}
      <h1>2024</h1>
      <div className="gallery">
        {imagesList2024.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`photo-2024-${index}`}
            onClick={() => handleImageClick(src)}
          />
        ))}
      </div>

      {/* 2023 */}
      <h1>2023</h1>
      <div className="gallery">
        {imagesList2023.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`photo-2023-${index}`}
            onClick={() => handleImageClick(src)}
          />
        ))}
      </div>

      {/* 2022 */}
      <h1>2022</h1>
      <div className="gallery">
        {imagesList2022.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`photo-2022-${index}`}
            onClick={() => handleImageClick(src)}
          />
        ))}
      </div>

      {/* Modal for expanded image */}
      {selectedImage && (
        <div
          className="modal-overlay"
          onClick={handleImageClose}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <img src={selectedImage} alt="Expanded" className="modal-image" />
            <div className="modal-buttons">
              <button
                onClick={() => handleDownload(selectedImage)}
                className="download-btn"
              >
                Download
              </button>
              <button
                onClick={handleImageClose}
                className="close-btn"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
