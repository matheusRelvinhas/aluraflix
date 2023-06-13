import React, { useState } from 'react';
import MyContext from './Context/MyContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import NewVideo from './Pages/NewVideo/NewVideo';
import VideoPage from './Pages/Video/VideoPage';


function App() {

  const dataCategory = {
    category: ['Filmes', 'Série', 'Anime'],
    image: [
      'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp', //img-filmes
      'https://i.postimg.cc/KzN7461m/bebidas01-card.webp', //img-serie
      'https://i.postimg.cc/KzN7461m/bebidas01-card.webp' //img-anime
    ]
  };  

  const dataCss =  { // cor principal de fundo, header(banner) e footer 
    primaryColor: '#ffe53e',
    logoImage: './images/logo.png',
    bannerImage: '/images/banner-relvis-delivery.png'
  };

  const [dataFilm, setDataFilm] = useState([
    [ // FILMES [0]
      { // images 512x512
        title: 'Peça pelo Whats',
        text: 'Mande uma mensagem e vamos te atender',
        image: 'https://i.postimg.cc/kXkSMJTx/whats01-card.webp',
        video:''
      },
      {
        title: 'Peça pelo Ifood',
        text: 'Consulte nossas promoções no ifood',
        image: 'https://i.postimg.cc/kXkSMJTx/whats01-card.webp',
        video:''
      }
    ],
    [ // SÉRIE [1]
      { // images 512x512
        title: 'Peça pelo Whats2',
        text: 'Mande uma mensagem e vamos te atender2',
        image: 'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp',
        video:''
      },
      {
        title: 'Peça pelo Ifood2',
        text: 'Consulte nossas promoções no ifood2',
        image: 'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp',
        video:''
      }
    ],
    [ // ANIME [2]
      { // images 512x512
        title: 'Peça pelo Whats3',
        text: 'Mande uma mensagem e vamos te atender3',
        image: 'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp',
        video:''
      },
      {
        title: 'Peça pelo Ifood3',
        text: 'Consulte nossas promoções no ifood3',
        image: 'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp',
        video:''
      }
    ],
  ]);
  
  const [currentVideo, setCurrentVideo] = useState({
    title: 'teste',
    text:  'teste',
    image: 'teste',
    video: 'teste'
  });

  const addData = (value) => {
    const newObj = {
      title: value.title,
      text: value.text,
      image: value.image,
      video: value.video,
    }
    const newDataFilm = [...dataFilm];
    if (value.category === 'Filmes') {
      newDataFilm[0] = [...newDataFilm[0], newObj];
      setDataFilm(newDataFilm);
    } else if (value.category === 'Série') {
      newDataFilm[1] = [...newDataFilm[1], newObj];
      setDataFilm(newDataFilm);
    } else if (value.category === 'Anime') {
      newDataFilm[2] = [...newDataFilm[2], newObj];
      setDataFilm(newDataFilm);
    } else {}
  };
  
  const addCurrentVideo = (value) =>  {
    const video = {
      title: value.title,
      text:  value.text,
      image: value.image,
      video: value.video
    }
    setCurrentVideo(video)
  }

  const sharedData = {
    dataCss,
    dataCategory,
    dataFilm,
    currentVideo,
    addData,
    addCurrentVideo
  };

  return (
      <Router>
        <MyContext.Provider value={sharedData}>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/newVideo' element={<NewVideo />}/>
            <Route path='/videoPage' element={<VideoPage />}/>
          </Routes>
        </MyContext.Provider>
      </Router>
  );
}

export default App;
