import React from 'react';
import './Carousel.css';
import Slider from './Slider/Slider';

const Carousel = (/*{category , images*/) => {  
  
  const dataCarousel = { // cor principal de fundo, header(banner) e footer 
    category: ['Anime', 'Comédia'],
    images: [
      'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp', 
      'https://i.postimg.cc/KzN7461m/bebidas01-card.webp'
    ]
  }

  const dataCard = [ // informações do card(main)
    [
      { // images 512x512
        title: 'Peça pelo Whats',
        text: 'Mande uma mensagem e vamos te atender',
        image: 'https://i.postimg.cc/kXkSMJTx/whats01-card.webp'
      },
      {
        title: 'Peça pelo Ifood',
        text: 'Consulte nossas promoções no ifood',
        image: 'https://i.postimg.cc/kXkSMJTx/whats01-card.webp'
      }
    ],
    [
      { // images 512x512
        title: 'Peça pelo Whats2',
        text: 'Mande uma mensagem e vamos te atender2',
        image: 'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp'
      },
      {
        title: 'Peça pelo Ifood2',
        text: 'Consulte nossas promoções no ifood2',
        image: 'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp'
      }
    ],
  ]
  
  return (
    <div className='card'>
      <Slider 
        images={dataCarousel.images} 
        category={dataCarousel.category}
        dataCard={dataCard}
      />
    </div>
  ); 
}

export default Carousel;
