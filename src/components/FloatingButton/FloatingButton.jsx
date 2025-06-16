import whatsApp from '../../assets/whatsapp.png';
import arrowUp from '../../assets/arrow-up.png';
import './floatingButton.css';

import React, { useEffect, useState } from 'react';

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const servicesSection = document.getElementById('services');

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = servicesSection?.offsetTop || 500;

      setVisible(scrollY >= triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890', '_blank'); // ← Replace with your number
  };

  return visible ? (
    <div className="floating-buttons-container">
        <button onClick={handleWhatsAppClick} className="floating-button">
        <img src={whatsApp} alt='whatsapp' />
        </button>
        <button onClick={handleTopClick} className="floating-button">
        <img src={arrowUp} alt='arrow up' />
        </button>
    </div>
    ) : null;
}