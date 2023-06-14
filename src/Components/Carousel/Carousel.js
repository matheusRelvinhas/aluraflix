import React, { useState, useContext } from 'react';
import MyContext from '../../Context/MyContext';
import VideoCard from '../VideoCard/VideoCard';
import { v4 as uuidv4 } from 'uuid';
import './Carousel.css';

const Carousel = () => {

  const { dataCategory, dataFilm } = useContext(MyContext);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % dataCategory.image.length);

  };

  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex - 1 + dataCategory.image.length) % dataCategory.image.length);

  };

  return (
    <div className='carousel'>
      <div className="container-carousel">
        <button className="carousel-button prev" onClick={goToPreviousSlide}>
          &#8249;
        </button>
        <img className="carousel-image" src={dataCategory.image[currentIndex]} alt="Slide" />
        <button className="carousel-button next" onClick={goToNextSlide}>
          &#8250;
        </button>
      </div>
      <div className='container-cards'>
        {dataFilm[currentIndex].map(card => <VideoCard
          title= {card.title}
          text= {card.text}
          image= {card.image}
          video={card.video}
          key={uuidv4()}
        />)}
      </div>
    </div>
  );
};

export default Carousel;


