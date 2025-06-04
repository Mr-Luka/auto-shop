import React, { useEffect, useState } from 'react';

export default function DiagonalReveal() {
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

  const maxShift = 100;
  const scrollPercent = Math.min(scrollY / window.innerHeight, 1);
  const shift = maxShift * scrollPercent;

  const handleClick = () => window.location.reload();

  return (
    <div className="diagonal-wrapper">
      <div className="brand-label" onClick={handleClick}>
        <div className={`flip ${showJaguar ? 'flipped' : ''}`}>
          <span className="front">passion for LANDROVER</span>
          <span className="back">passion for JAGUAR</span>
        </div>
      </div>

      <div className="triangle orange" style={{ transform: `translate(-${shift}px, -${shift}px)` }}></div>
      <div className="triangle black" style={{ transform: `translate(${shift}px, ${shift}px)` }}></div>

      <div className="content">
        <div className="content-inner">
          <h2>Unser Angebot</h2>
          <div className="service">
            <p>🛠 Reparaturen</p>
            <p>🚙 4x4 Ausrüstung</p>
            <p>🏕 Camping / Zubehör</p>
          </div>
        </div>
      </div>
    </div>
  );
}