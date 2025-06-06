import React, { useEffect, useState } from 'react';

import coffeeGif from '../../public/coffee-cup.gif';

import ImageSlider from './imageSlider/ImageSlider.jsx';
import {LandRoverBlack, jaguarFwhite, rangeRover} from './imageSlider/cars.js';

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
          <h2>COMPLETE Car Care</h2>
          <h5><span>ALL</span><br/>in one place</h5>
          <p>We specialize in full vehicle servicing with official record entry into the Land Rover and Jaguar system.
             Accurate diagnostics, repair of both regular and complex issues, aswell as tunning, modifications and MFK 
             preparation.
             <br/>We also offer vehicle purchase and sales - fast, fair and hassle-free</p>
        </div>
        <div className='cars-image-slider-container'>
          <div className='image-slider-div'>
            <ImageSlider slides={LandRoverBlack} />
          </div>
          <div className='image-slider-div'>
            <ImageSlider slides={jaguarFwhite} />
          </div>
          <div className='image-slider-div'>
            <ImageSlider slides={rangeRover} />
          </div>
        </div>
        <div className='service-wrapper'>
          <h3>Service</h3>
          <p>ICE AND ELECTRIC VEHICELS INCLUDING SERVICE RECORD DIRECTLY BY LAND ROVER AND JAGUAR DIAGNOSIS.
            <br/>
            -REPAIR AND COMPLEX REPAIRS INCLUDING COMPLEX ELECTRICAL FAULTS;
            <br/>
            -PREPERATION FOR MFK;
            <br/>
            -TUNING;
            <br/>
            -MODIFICATIONS
            <br/>
            -VEHICLE CHECK AND ASSISTING ADVICES IN BUYING LANDROVER OR JAGUAR VEHICLES.
          </p>
          <p id='free-coffee'>
            free coffee for customers
            <img src={coffeeGif} alt="coffee cup" className="coffee-gif" />  
          </p>
        </div>
      </div>
    </div>
  );
}