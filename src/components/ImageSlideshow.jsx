import React, { useState } from 'react';

const ImageSlideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div>
            <button onClick={goToPrevious}>Previous</button>
            <img src={images[currentIndex].url} alt={images[currentIndex].title} />
            <button onClick={goToNext}>Next</button>
        </div>
  );
};

export default ImageSlideshow;
