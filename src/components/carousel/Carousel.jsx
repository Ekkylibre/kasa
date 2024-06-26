import { useState } from 'react';
import './carousel.css';

function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentIndex((currentIndex + 1) % pictures.length);
    };

    const handlePrevImage = () => {
        setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="carrousel">
            <div className="counter">{currentIndex + 1}/{pictures.length}</div>
            <img className="accommodation-img" src={pictures[currentIndex]} alt="Accommodation" />
            <svg className="chevron-left" width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handlePrevImage}>
                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" />
            </svg>
            <svg className="chevron-right" width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleNextImage}>
                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
            </svg>
        </div>
    );
}

export default Carousel;
