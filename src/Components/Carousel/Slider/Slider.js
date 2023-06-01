import React, { useState } from 'react';
import './Slider.css';

const Slider = ({ images, category }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    setCurrentIndex1((currentIndex1 + 1) % category.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    setCurrentIndex1((currentIndex1 - 1 + category.length) % category.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={goToPreviousSlide}>
        &#8249;
      </button>
      <img className="carousel-image" src={images[currentIndex]} alt="Slide" />
      <button className="carousel-button next" onClick={goToNextSlide}>
        &#8250;
      </button>
      <h2>{category[currentIndex1]}</h2>
    </div>
  );
};

export default Slider;
