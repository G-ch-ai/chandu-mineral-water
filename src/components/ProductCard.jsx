// src/components/ProductCard.jsx

import React from 'react';
import './ProductCard.css'; // We will create this CSS file next

const ProductCard = ({ name, description, size, features, imageAlt }) => {
  return (
    <div className="product-card">
      <div className="product-image-placeholder">
        {/* Placeholder for a unique product image */}
        <p>{imageAlt || name}</p>
      </div>
      
      <div className="product-details">
        <h3>{name}</h3>
        <p className="product-size">{size}</p>
        <p className="product-description">{description}</p>
        
        <ul className="product-features">
          {features.map((feature, index) => (
            <li key={index}>✅ {feature}</li>
          ))}
        </ul>

        <a href="#contact" className="card-cta-button">
          Order Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;