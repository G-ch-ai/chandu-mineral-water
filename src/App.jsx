// src/App.jsx

import React from 'react';
// Import the global CSS
import './App.css'; 

// Import all required components
import Header from './components/Header'; 
import Hero from './components/Hero'; 
import Products from './components/Products'; 
import Quality from './components/Quality'; 
import Gallery from './components/Gallery';
import Contact from './components/Contact'; 
import Location from './components/Location'; 
import Footer from './components/Footer'; 
import ValueProps from './components/ValueProps';
import BackToTopButton from './components/BackToTopButton';

function App() {
  return (
    <div className="app-container">
      {/* 1. Navigation */}
      <Header />
      
      {/* 2. Main Content Area */}
      <main className="main-content">
        <Hero />       {/* Hero/Main Banner */}
        <ValueProps />
        <Products />   {/* Product Listings */}
        <Quality />    {/* Quality Process */}
        <Gallery />
        <Contact />    {/* Contact Form & Info */}
        <Location />   {/* Service Area Map */}
      </main>
      
      {/* 3. Footer */}
      <Footer /> 
      <BackToTopButton />
    </div>
  );
}

export default App;