import React, { useState } from 'react';
import MyContext from './Context/MyContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import NewVideo from './Pages/NewVideo/NewVideo';
import VideoPage from './Pages/VideoPage/VideoPage';


function App() {

  const dataCategory = {
    category: ['Filmes', 'Série', 'Anime'],
    image: [
      './images/logo.png', //img-filmes
      './images/logo.png', //img-serie
      './images/logo.png' //img-anime
    ]
  };  

  const dataCss =  { // cor principal de fundo, header(banner) e footer 
    primaryColor: '#ffe53e',
    logoImage: './images/logo.png',
    bannerImage: '/images/banner-relvis-delivery.png'
  };
  
  const dataIcon = [ // incones do footer. Ifood, whats e intagram
    { //images 32x32
      icon: 'https://i.postimg.cc/sDBSRQ4j/whatsapp.webp',
      url: 'https://wa.me/5531971451910',
      alt: 'whats'
    },
    {
      icon: 'https://i.postimg.cc/Z5BLjsML/ifood.webp',
      url: 'https://www.ifood.com.br/delivery/belo-horizonte-mg/relvis-delivery-padre-eustaquio/',
      alt: 'ifood'
    },
    {
      icon: 'https://i.postimg.cc/qMYstXv6/ig.webp',
      url: 'https://www.instagram.com/aluraonline',
      alt: 'instagram'
    }
  ]
   
  const [dataFilm, setDataFilm] = useState([
    [ // FILMES [0]
      { // images 512x512
        title: 'Peça pelo Whats',
        text: 'Mande uma mensagem e vamos te atender',
        image: 'https://i.postimg.cc/kXkSMJTx/whats01-card.webp',
        video: './video/video-test.mp4'
      },
      {
        title: 'Peça pelo Ifood',
        text: 'Consulte nossas promoções no ifood',
        image: 'https://i.postimg.cc/kXkSMJTx/whats01-card.webp',
        video: './video/video-test.mp4'
      }
    ],
    [ // SÉRIE [1]
      { // images 512x512
        title: 'Peça pelo Whats2',
        text: 'Mande uma mensagem e vamos te atender2',
        image: 'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp',
        video: './video/video-test.mp4'
      },
      {
        title: 'Peça pelo Ifood2',
        text: 'Consulte nossas promoções no ifood2',
        image: 'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp',
        video: './video/video-test.mp4'
      }
    ],
    [ // ANIME [2]
      { // images 512x512
        title: 'Peça pelo Whats3',
        text: 'Mande uma mensagem e vamos te atender3',
        image: 'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp',
        video: './video/video-test.mp4'
      },
      {
        title: 'Peça pelo Ifood3',
        text: 'Consulte nossas promoções no ifood3',
        image: 'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp',
        video: './video/video-test.mp4'
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
    dataIcon,
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
