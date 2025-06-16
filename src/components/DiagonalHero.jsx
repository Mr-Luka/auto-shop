import React, { useEffect, useState } from 'react';

import ImageSlider from './ImageSliderComponent/SliderImage.jsx';
import Services from './Services/services.jsx';
import Contact from './Contact/Contact.jsx';
import Team from './Team/Team.jsx';
import Reviews from './Reviews/Reviews.jsx';
import FloatingButtons from './FloatingButton/FloatingButton.jsx';
import { LandRoverBlack, jaguarFwhite, rangeRover } from './ImageSliderComponent/cars.js';

export default function DiagonalHero() {
  const [scrollY, setScrollY] = useState(0);
  const [showJaguar, setShowJaguar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // ← back to window.scrollY 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //spin the passion for Jaguar/LandRover
  useEffect(() => {
    const interval = setInterval(() => {
      setShowJaguar(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const shift = Math.min(scrollY, window.innerHeight);

  return (
    <>
      <div className="hero-wrapper">
        <div className="carzip-banner" style={{ transform: `translateY(-${scrollY * 0.6}px)`, opacity: `${1 - scrollY / window.innerHeight}` }}>
          carzip.ch
        </div>
        {/* Floating label */}
        <div className="label" onClick={() => window.location.reload()}>
          <div className={`flip-text ${showJaguar ? 'flip' : ''}`}>
            <p className="front">passion for <br /><span>LANDROVER</span></p>
            <p className="back">passion for <br /><span>JAGUAR</span></p>
          </div>
        </div>

        {/* Panels that separate */}
        <div className="black-panel" style={{ transform: `translate(-${shift}px, -${shift}px)` }}></div>
        <div className="orange-panel" style={{ transform: `translate(${shift}px, ${shift}px)` }}></div>

        {/* Main content */}
        <div className="content-section">
          <div className="content-box">
            <h2>COMPLETE Car Care</h2>
            <h5><span>ALL</span><br />in one place</h5>
            <p>
              We specialize in full vehicle servicing with official record entry into the Land Rover and Jaguar system.
              Accurate diagnostics, repair of both regular and complex issues, as well as tuning, modifications and MFK
              preparation.
              <br />We also offer vehicle purchase and sales — fast, fair and hassle-free.
            </p>
          </div>

          <div className="cars-image-slider-container">
            <div className="image-slider-div"><ImageSlider slides={LandRoverBlack} /></div>
            <div className="image-slider-div"><ImageSlider slides={jaguarFwhite} /></div>
            <div className="image-slider-div"><ImageSlider slides={rangeRover} /></div>
          </div>
          <Services />
          <Team />
          <Reviews />
          <Contact />
          <FloatingButtons />
        </div>
      </div>
    </>
  );
}