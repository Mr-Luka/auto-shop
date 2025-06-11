import './team.css';
import rayan from '../../assets/rajan.jpg';

export default function Team(){

    return (
        <>
            <div className='team-wrapper'>
                <h3>TEAM</h3>
                <div className='our-team'>
                    <img src={rayan} alt='rajan ceo'/>
                    <div className='about-team'>
                        <h4>Rayan Vujosevic - <span>CEO</span></h4>
                        <p>Originally from Serbia, Rayan is one of Europe's top auto mechanics, now based in Switzerland. With deep expertise in Jaguar and Land Rover vehicles, he specializes in advanced automotive electronics, diagnostics, and system repairs. Known for his precision, reliability, and passion for British engineering, Rayan brings over a decade of experience to every vehicle he touches — earning the trust of 4x4 drivers across Europe.</p>
                    </div>
                </div>
            </div>
        </>
    )
}