import React from 'react';
import './Carousel.css';
import Slider from './Slider/Slider';
import VideoCard from './VideoCard/VideoCard';

const Carousel = (/*{category , images*/) => {  
  
  const dataCarousel = { // cor principal de fundo, header(banner) e footer 
    category: ['Anime', 'Comédia'],
    images: [
      'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp', 
      'https://i.postimg.cc/KzN7461m/bebidas01-card.webp'
    ]
  }

  const dataCard = [ // informações do card(main)
    { // images 512x512
      title: 'Peça pelo Whats',
      text: 'Mande uma mensagem e vamos te atender',
      image: 'https://i.postimg.cc/kXkSMJTx/whats01-card.webp'
    },
    {
      title: 'Peça pelo Ifood',
      text: 'Consulte nossas promoções no ifood',
      image: 'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp'
    }
  ]
  
  return (
    <div className='card'>
      <Slider images={dataCarousel.images} category={dataCarousel.category}/>
      <div className='card-content'>
        {dataCard.map(card => <VideoCard
          title= {card.title}
          text= {card.text}
          image= {card.image}
        />)}
      </div>
    </div>
  ); 
}

export default Carousel;
