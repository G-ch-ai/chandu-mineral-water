// src/components/Gallery.jsx

import React from 'react';
import './Gallery.css'; // We will create this CSS file next

// Array for image placeholders
const galleryImages = [
  { id: 1, alt: "Water Plant Exterior", source: "Plant Exterior" },
  { id: 2, alt: "RO Filtration System", source: "RO System" },
  { id: 3, alt: "Automated Bottling Line", source: "Bottling Area" },
  { id: 4, alt: "Delivery Truck Fleet", source: "Delivery Truck" },
  { id: 5, alt: "Warehouse Stock", source: "Product Stock" },
  { id: 6, alt: "Quality Control Lab", source: "Lab Area" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section gallery-section">
      <h2 className="section-title">A Look Inside Our Pure Water Plant</h2>
      <p className="section-subtitle">See our commitment to hygiene, advanced filtration, and efficient delivery.</p>
      
      <div className="gallery-grid">
        {galleryImages.map(image => (
          <div key={image.id} className="gallery-item">
            {/* REPLACE THIS PLACEHOLDER LATER!
              Use the HTML <img> tag with your actual image path: 
              <img src="/assets/images/plant-exterior.jpg" alt={image.alt} /> 
            */}
            <div className="image-placeholder">
              <span>{image.source}</span>
              <p>{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;