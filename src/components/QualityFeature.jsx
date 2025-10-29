// src/components/QualityFeature.jsx

import React from 'react';
import './QualityFeature.css'; // We will create this CSS file next

const QualityFeature = ({ icon, title, description }) => {
  return (
    <div className="quality-feature">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default QualityFeature;