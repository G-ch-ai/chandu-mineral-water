// src/components/Header.jsx

import React, { useState, useEffect } from 'react'; // ADDED useEffect
import './Header.css';
import LogoImage from '../assets/CMWlogo.png'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  /* ----------------------------------------------------------------- */
  /* NEW LOGIC: Close menu when the user scrolls */
  /* ----------------------------------------------------------------- */
  useEffect(() => {
    // 1. Define the scroll handler function
    const handleScroll = () => {
      // 2. Only close the menu if it is currently open
      if (isOpen) {
        closeMenu();
      }
    };

    // 3. Attach the event listener when the component mounts or 'isOpen' changes
    window.addEventListener('scroll', handleScroll);

    // 4. Clean up: Remove the event listener when the component unmounts
    //    or before re-running the effect (standard practice for performance)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]); // Dependency array: Re-run effect only when 'isOpen' state changes

  /* ----------------------------------------------------------------- */
  
  return (
    <header className="header">
      <a href="#home" className="logo" onClick={closeMenu}>
        <img src={LogoImage} alt="Chandu Mineral Water Logo" className="logo-img" />
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
        {/* Links call closeMenu on click (already implemented) */}
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
