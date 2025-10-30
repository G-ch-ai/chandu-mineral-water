// src/components/Products.jsx

import React from 'react';
import ProductCard from './ProductCard'; 
import './Products.css'; 

const productData = [
  {
    id: 1,
    name: "20L Water Refill Service",
    size: "20 Litres (Water Only)",
    description: "Our primary delivery service. Ideal for customers who already own a 20L can and need a pure, hygienic refill.",
    features: [
      "RO Purified & UV Treated Water", 
      "Quick Home/Office Delivery", 
      "Best for Dispenser Use"
    ],
    imageAlt: "20L Water Refill"
  },
  {
    id: 2,
    name: "20L Can (With Tap) - PURCHASE",
    size: "Empty Plastic Container",
    description: "Buy a brand new, hygienic 20L can with a built-in tap for direct use. No dispenser required.",
    features: [
      "Food-Grade PET Plastic", 
      "Includes Hygienic Tap", 
      "Durable & Reusable Container"
    ],
    imageAlt: "20L Can with Tap for Sale"
  },
  {
    id: 3,
    name: "20L Can (Normal) - PURCHASE",
    size: "Empty Plastic Container",
    description: "Buy a new 20L container designed to be inverted and used with a standard water cooler or dispenser.",
    features: [
      "Food-Grade PET Plastic", 
      "Fits Standard Dispensers", 
      "Durable & Reusable Container"
    ],
    imageAlt: "20L Can without Tap for Sale"
  },
  {
    id: 4,
    name: "Cooling Water Service",
    size: "20 Litres (Cooled)",
    description: "Cold water on demand! We deliver pre-chilled cans, perfect for parties, events, or hot summer days.",
    features: [
      "Pre-Chilled Water for Immediate Use", 
      "Available for Single or Bulk Order", 
      "Ideal for Events & Gatherings"
    ],
    imageAlt: "Cooled 20L Can Delivery"
  },
  {
    id: 5,
    name: "Water Tanker Bulk Order",
    size: "Half Tanker (50 Cans) to 2 Tankers (200 Cans)",
    description: "For industrial, large-scale commercial, or massive event needs. Delivery directly to your site.",
    features: [
      "Flexible Volume (100-200 Cans equivalent)", 
      "Temporary Water Tank Provided (24hrs)", 
      "Custom Delivery Schedule"
    ],
    imageAlt: "Bulk Water Tanker Delivery"
  },
];

const Products = () => {
  return (
    <section id="products" className="section products-section">
      <h2 className="section-title">Our Products & Services</h2>
      <p className="section-subtitle">We offer pure water delivery, container sales, and bulk supply for all needs.</p>
      
      <div className="product-grid">
        {productData.map(product => (
          <ProductCard 
            key={product.id}
            name={product.name}
            description={product.description}
            size={product.size}
            features={product.features}
            imageAlt={product.imageAlt}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;