// src/components/ValueProps.jsx

import React from 'react';
import './ValueProps.css';

const ValueProps = () => {
  return (
    <div className="value-props-container">
      <div className="value-prop">
        <span>💧</span>
        <h3>Triple Purification</h3>
        <p>Advanced RO and UV treatment for absolute safety and purity.</p>
      </div>
      <div className="value-prop">
        <span>🚚</span>
        <h3>Quick Local Delivery</h3>
        <p>Fast, reliable service across Bangarupalem and surrounding areas.</p>
      </div>
      <div className="value-prop">
        <span>⭐</span>
        <h3>Trusted Quality</h3>
        <p>Serving homes, offices, and events with premium, hygienic water.</p>
      </div>
    </div>
  );
};

export default ValueProps;