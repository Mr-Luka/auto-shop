import React, { useEffect, useState } from 'react';

export default function DiagonalSection() {
  const [scrollY, setScrollY] = useState(0);
  const [showJaguar, setShowJaguar] = useState(false);

  // Auto flip every 3 sec for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setShowJaguar(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openAmount = Math.min(scrollY / 2, 100); // Limit max open
  const rotationClass = showJaguar ? 'flip' : '';

  const handleClick = () => window.location.reload();

  return (
    <>
      <div className="fixed-label" onClick={handleClick}>
        <span className={`flip-box ${rotationClass}`}>
          <span className="front">passion for LANDROVER</span>
          <span className="back">passion for JAGUAR</span>
        </span>
      </div>

      <div className="diagonal-wrapper" style={{ '--open': `${openAmount}px` }}>
        <div className="orange-panel"></div>
        <div className="black-panel"></div>
      </div>
    </>
  );
}