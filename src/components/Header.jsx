// src/components/Header.jsx

import React, { useState, useEffect } from 'react'; 
import './Header.css';
import LogoImage from '../assets/favicon.png'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // NEW: Custom function for smooth scrolling and header offset
  const handleNavigation = (e, targetId) => {
    e.preventDefault(); // Stop the default instant jump
    
    closeMenu(); // Close the mobile menu immediately

    // Find the target element using the ID
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Offset: We use 70px because that is the mobile/scrolled header height
      const headerHeight = 70; 
      
      // Use the native window.scrollTo method with smooth behavior
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight, // Adjust by header height
        behavior: 'smooth', 
      });
    }
  };

  // LOGIC: Close menu when the user scrolls (standard usability fix)
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]); 

  return (
    <header className="header">
      {/* Logo link uses the smooth scroll handler */}
      <a href="#home" className="logo" onClick={(e) => handleNavigation(e, '#home')}>
        <img src={LogoImage} alt="Chandu Mineral Water Logo" className="logo-img" />
        <h1>Chandu Mineral Water</h1>
      </a>

      {/* Hamburger Icon/Button for Mobile */}
      <button 
        className={`menu-toggle ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigation Links - ALL links now use the handleNavigation function */}
      <nav className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
        <a href="#home" onClick={(e) => handleNavigation(e, '#home')}>Home</a>
        <a href="#products" onClick={(e) => handleNavigation(e, '#products')}>Products</a>
        <a href="#quality" onClick={(e) => handleNavigation(e, '#quality')}>Quality Process</a>
        <a href="#gallery" onClick={(e) => handleNavigation(e, '#gallery')}>Gallery</a>
        <a href="#contact" onClick={(e) => handleNavigation(e, '#contact')}>Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;