// src/components/Header.jsx

import React, { useState } from 'react';
import './Header.css';
import CMWlogo from '../assets/CMWlogo.png'; // Make sure this path is correct

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      {/* WRAPPED in an <a> tag to make it click-to-home */}
      <a href="#home" className="logo" onClick={closeMenu}>
        {/* Logo Image */}
        <img src={CMWlogo} alt="Chandu Mineral Water Logo" className="logo-img" />
        
        {/* Business Name */}
        <h1>Chandu Mineral Water</h1>
      </a>

      {/* Hamburger Icon/Button for Mobile */}
      <button 
        className={`menu-toggle ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigation Links - conditional class for mobile */}
      <nav className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#products" onClick={closeMenu}>Products</a>
        <a href="#quality" onClick={closeMenu}>Quality Process</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#contact" onClick={closeMenu}>Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;