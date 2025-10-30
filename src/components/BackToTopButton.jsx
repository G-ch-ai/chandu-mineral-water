// src/components/BackToTopButton.jsx

import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // NEW: Custom function for a smooth, slow scroll animation
  const scrollToTop = () => {
    // 1. Define the duration of the scroll animation in milliseconds
    const duration = 1200; // Increased duration for a slower scroll (default is often 300-500ms)
    const startingY = window.scrollY;
    const startTime = performance.now();

    // 2. Define the animation function
    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function (smoother stop)
      const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      
      const newY = startingY * (1 - easeInOutCubic(progress));

      window.scrollTo(0, newY);

      if (timeElapsed < duration) {
        // Continue the animation loop
        requestAnimationFrame(animateScroll);
      }
    };

    // 3. Start the animation loop
    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="back-to-top" 
          aria-label="Back to Top"
        >
          &#9650;
        </button>
      )}
    </>
  );
};

export default BackToTopButton;