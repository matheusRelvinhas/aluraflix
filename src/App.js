import React, { useState } from 'react';
import MyContext from './Context/MyContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import NewVideo from './Pages/NewVideo/NewVideo';


function App() {

  const [nome, setNome] = useState('John Doe'); //context-test

  const sharedData = {
    nome: nome,

    dataCss: { // cor principal de fundo, header(banner) e footer 
      primaryColor: '#ffe53e',
      logoImage: './images/logo.png',
      bannerImage: '/images/banner-relvis-delivery.png'
    },

    dataCategory: {
      category: ['Filmes', 'Série', 'Anime'],
      image: [
        'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp', //img-filmes
        'https://i.postimg.cc/KzN7461m/bebidas01-card.webp', //img-serie
        'https://i.postimg.cc/KzN7461m/bebidas01-card.webp' //img-anime
      ]
    },

    dataFilm: [
      [ // FILMES [0]
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
      [ // SÉRIE [1]
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
      [ // ANIME [2]
        { // images 512x512
          title: 'Peça pelo Whats3',
          text: 'Mande uma mensagem e vamos te atender3',
          image: 'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp'
        },
        {
          title: 'Peça pelo Ifood3',
          text: 'Consulte nossas promoções no ifood3',
          image: 'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp'
        }
      ],
    ]
  };

  return (
      <Router>
        <MyContext.Provider value={sharedData}>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/newVideo" element={<NewVideo />}/>
          </Routes>
        </MyContext.Provider>
      </Router>
  );
}

export default App;
