// src/components/Footer.jsx

import React from 'react';
import './Footer.css'; // We will create this CSS file next

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content section">
        
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p>Chandu Minaral Water</p>
          <p>Nehru Street last , Santhi Nagar</p>
          <p>Kurappali, Gollapalle, Bangarupalem</p>
          <p>Andhra Pradesh 517416</p>
          <p>
            Call for Delivery: 
            <a href="tel:+918500342029" className="footer-phone-link">
              +91 85003 42029
            </a>
            {/* Added a clear separator with spaces */}
             &nbsp;|&nbsp; 
            <a href="tel:+919059682029" className="footer-phone-link">
              +91 90596 82029
            </a>
          </p>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#quality">Quality Process</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          {/* Placeholder for social media links */}
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i>Facebook</a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i>Instagram</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Chandu Mineral Water. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;