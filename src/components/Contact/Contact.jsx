import React from 'react';
import './contact.css';
import Newsletter from './Newsletter';
import car from '../../assets/car.mp4';
import fb from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <h1>Contact</h1>
      <div className="contact-container">
        <div className="contact-info">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Phone:</strong> +41 76 123 4567</p>
          <p><strong>Email:</strong> info@carzip.ch</p>
          <div className='social-icons'>
            <a
              href="https://www.instagram.com/carzip.ch/?igsh=NTc4MTIwNjQ2YQ%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
            <a
              href="https://www.instagram.com/carzip.ch/?igsh=NTc4MTIwNjQ2YQ%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fb} alt='facebook' />
            </a>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            title="Carzip Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.548148210833!2d6.632273076186365!3d46.519653571103704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c30e4466b1435%3A0x2fa9f1aa66e7cd32!2sLausanne%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1718049600000!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className='newsletter-with-video'>
        <Newsletter />
        <video className="car-video" src={car} autoPlay loop muted playsInline></video>
      </div>
      
    </div>
  );
}