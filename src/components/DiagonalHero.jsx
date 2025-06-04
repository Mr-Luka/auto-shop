import React, { useEffect, useState } from 'react';

export default function DiagonalHero() {
  const [scrollY, setScrollY] = useState(0);
  const [showJaguar, setShowJaguar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowJaguar(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const shift = Math.min(scrollY, window.innerHeight); // allow full screen shift

  return (
    <div className="hero-wrapper">
      <div className="label" onClick={() => window.location.reload()}>
        <div className={`flip-text ${showJaguar ? 'flip' : ''}`}>
          <p className="front">passion for <br/><span>LANDROVER</span></p>
          <p className="back">passion for <br/><span>JAGUAR</span></p>
        </div>
      </div>

      <div className="orange-panel" style={{ transform: `translate(-${shift}px, -${shift}px)` }}></div>
      <div className="black-panel" style={{ transform: `translate(${shift}px, ${shift}px)` }}></div>

      <div className="content-section">
        <div className="content-box">
          <h2>Our Services</h2>
          <p>Repairs, 4x4 Upgrades, Camping Gear and more...</p>
        </div>
      </div>
    </div>
  );
}