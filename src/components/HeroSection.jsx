import React, { useEffect, useState } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [showJaguar, setShowJaguar] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setShowJaguar(prev => !prev);
    }, 3000);
    return () => clearInterval(flipInterval);
  }, []);

  const diagonalTransform = Math.min(scrollY * 0.15, 45); // Max 45deg open
  const labelStyle = {
    transform: scrollY > 100 ? 'translateY(-50%) scale(0.85)' : 'translateY(-50%)',
    top: scrollY > 100 ? '0.8rem' : '50%',
  };

  const handleClick = () => window.location.reload();

  return (
    <div className="hero-wrapper">
      <div
        className="diagonal-bg"
        style={{ transform: `rotate(${diagonalTransform}deg)` }}
      />

      <div className="brand-label" onClick={handleClick} style={labelStyle}>
        <div className={`flip ${showJaguar ? 'flipped' : ''}`}>
          <span className="front">passion for LANDROVER</span>
          <span className="back">passion for JAGUAR</span>
        </div>
      </div>
    </div>
  );
}