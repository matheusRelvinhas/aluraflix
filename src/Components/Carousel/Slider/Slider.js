import React, { useState } from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './Slider.css';

const Slider = ({ images, category, dataCard }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);

  };

  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  };

  return (
    <div className="carousel">
      <div>
        <button className="carousel-button prev" onClick={goToPreviousSlide}>
          &#8249;
        </button>
        <img className="carousel-image" src={images[currentIndex]} alt="Slide" />
        <button className="carousel-button next" onClick={goToNextSlide}>
          &#8250;
        </button>
        <h2>{category[currentIndex]}</h2>
      </div>
      <div className='card-content'>
        {dataCard[currentIndex].map(card => <VideoCard
          title= {card.title}
          text= {card.text}
          image= {card.image}
        />)}
      </div>
    </div>
  );
};

export default Slider;


