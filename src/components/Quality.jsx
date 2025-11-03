// src/components/Quality.jsx

import React from 'react';
import QualityFeature from './QualityFeature';
import './Quality.css'; // Create this file for the section layout

const qualitySteps = [
  { icon: '💧', title: 'RO Purification', description: 'Removes dissolved solids, heavy metals, and large microbial impurities for crystal clarity.' },
  { icon: '☀️', title: 'UV Sterilization', description: 'Uses ultraviolet light to eliminate bacteria and viruses without adding any chemicals.' },
  { icon: '🔬', title: 'Multi-Stage Filtration', description: 'Advanced sediment and carbon filters remove fine particles, chlorine, and odors.' },
  { icon: '🚚', title: 'Hygienic Refill & Transport', description: 'Water sealed for transport tankers and sold directly to customers refilling 20L cans at the plant.' },
];

const Quality = () => {
  return (
    <section id="quality" className="section quality-section">
      <h2 className="section-title">Our Commitment to Purity</h2>
      <p className="section-subtitle">The 4-Step Process for Guaranteed Safe Drinking Water.</p>
      
      <div className="quality-grid">
        {qualitySteps.map((step, index) => (
          <QualityFeature 
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Quality;