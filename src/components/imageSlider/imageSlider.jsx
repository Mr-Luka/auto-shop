import {useState} from 'react';
import './imageSlider.css';



export default function ImageSlider({slides}){
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        backgroundImage: `url(${slides[currentIndex].url})`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '25px',
    }

    function goToPrevious(){
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    function goToNext(){
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    function goToSlide(slideIndex){
        setCurrentIndex(slideIndex)
    }

    return (
        <div className='slider-wrapper'>
            <div className='slider-styles'>
                <div className='left-arrow' onClick={goToPrevious}>&#x276E;</div>
                <div className='right-arrow' onClick={goToNext}>&#x276F;</div>
                <div className='slide-picture' style={slideStyles}></div>
                <div className='dots-container'>
                    {slides.map((slide, slideIndex)=> (
                        <div 
                            key={slideIndex} 
                            className='dot'
                            onClick={()=> goToSlide(slideIndex)}    
                        >&#x25CF;</div>
                    ))}
                </div>
            </div>
        </div>
    )
}