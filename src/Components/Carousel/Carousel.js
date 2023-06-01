import React from 'react';
import './Carousel.css';
import Slider from './Slider/Slider';

const Carousel = (/*{category , images*/) => {  
  
  const dataCarousel = { // cor principal de fundo, header(banner) e footer 
    category: ['Anime', 'Comédia'],
    images: ['Anime', 'Comédia']
  }
  
  return (
    <div className='card'>
    <Slider images={dataCarousel.images} category={dataCarousel.category}/>
    <div className='card-content'>
    </div>
    </div>
  ); 
}

export default Carousel;
