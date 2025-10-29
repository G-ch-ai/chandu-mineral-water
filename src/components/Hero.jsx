// src/components/Hero.jsx

import React from 'react';
import './Hero.css'; // We will create this CSS file next

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Pure & Refreshing Drinking Water</h1>
        <h2>Trusted by families in Bangarupalem for guaranteed quality.</h2>
        <a href="#contact" className="cta-button">
          Order Delivery Now!
        </a>
      </div>
    </section>
  );
};

export default Hero;