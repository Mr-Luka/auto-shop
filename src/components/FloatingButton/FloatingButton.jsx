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
    <div style={styles.container}>
      <button onClick={handleWhatsAppClick} style={styles.button}>💬</button>
      <button onClick={handleTopClick} style={styles.button}>⬆️</button>
    </div>
  ) : null;
}