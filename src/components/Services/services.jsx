import React from 'react';
import TiltCard from './TiltCard.jsx';

import './services.css';
import coffeeGif from '../../../public/coffee-cup.gif';
import technician from '../../../public/technician.gif';
import drill from '../../../public/drill.gif';
import carKey from '../../../public/car-key.gif';


export default function Services(){

    return (
        <>
            <div id='services' className='all-services-wrapper'>
                <div className='service-wrapper'>
                    <h3>Services</h3>
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
                <TiltCard
                    className="table first-table"
                    options={{
                    max: 20,
                    speed: 400,
                    glare: true,
                    "max-glare": 0.4,
                    }}
                    >
                    <div className='service2-rapper'>
                        <div className='service-gif-name'>
                            <img src={technician} alt='technician' />
                            <p>Repairs</p>
                        </div>
                        <div className='service-gif-name'>
                            <img src={carKey} alt='car key' />
                            <p>4X4 Upgrades</p>
                        </div>
                        <div className='service-gif-name'>
                            <img src={drill} alt='drill' />
                            <p>Camping Gear</p>
                        </div>
                    </div>
                </TiltCard>
            </div>
        </>
    )
}