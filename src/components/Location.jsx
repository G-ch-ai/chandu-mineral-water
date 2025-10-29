// src/components/Location.jsx

import React from 'react';
import './Location.css';

const Location = () => {
  // The specific 'src' URL you provided is now used here.
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8348.580761712217!2d78.91226310768708!3d13.19551516986052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad6410ebd475e5%3A0x4c2c407245d5d007!2sChandu%20Minaral%20Water!5e1!3m2!1sen!2sin!4v1761591130493!5m2!1sen!2sin";

  return (
    <section id="location" className="section location-section">
      <h2 className="section-title">Serving Bangarupalem & Surrounding Areas</h2>
      <p className="section-subtitle">
        Visit our plant or view our delivery area below. Fast delivery is guaranteed within 10km of our location.
      </p>

      <div className="map-container">
        <iframe
          src={mapEmbedUrl} 
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Chandu Mineral Water Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;