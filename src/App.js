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
      'https://i.postimg.cc/NF86SMLK/filmes.webp', //img-filmes
      'https://i.postimg.cc/ZRppvR8w/serie.webp', //img-serie
      'https://i.postimg.cc/hjdb8MBb/anime.webp' //img-anime
    ]
  };  

  const dataCss =  { // cor principal de fundo, header(banner) e footer 
    primaryColor: '#444444',
    secundaryColor: '#e8372d',
    logoImage: 'https://i.postimg.cc/P55WVdHq/logo.webp',
    bannerImage: 'https://i.postimg.cc/1zLDz6qg/banner-aluraflix.webp'
  };
  
  const dataIcon = [ // incones do footer. Ifood, whats e intagram
    { //images 32x32
      icon: 'https://i.postimg.cc/Nf48x5WV/facebook-icon.webp',
      url: 'https://www.facebook.com/AluraCursosOnline/',
      alt: 'facebook'
    },
    {
      icon: 'https://i.postimg.cc/1XKFMjY6/twitter-icon.webp',
      url: 'https://twitter.com/AluraOnline/',
      alt: 'twitter'
    },
    {
      icon: 'https://i.postimg.cc/DwpqtRfP/instagram-icon.webp',
      url: 'https://www.instagram.com/aluraonline',
      alt: 'instagram'
    }
  ]
   
  const [dataFilm, setDataFilm] = useState([
    [ // FILMES [0]
      { // images 512x512
        title: 'Avatar: O Caminho da Água',
        text: '12 anos depois de explorar Pandora e se juntar aos Na’vi, Jake Sully formou uma família com Neytiri e se estabeleceu entre os clãs do novo mundo. Porém, a paz não durará para sempre.',
        image: 'https://i.postimg.cc/6qxVMR6s/avatar-2-film.webp',
        video: './video/video-films.mp4'
      },
      {
        title: 'John Wick 4: Baba Yaga Online',
        text: 'Com o preço por sua cabeça cada vez maior, John Wick leva sua luta contra a alta mesa global enquanto procura os jogadores mais poderosos do submundo, de Nova York a Paris, de Osaka a Berlim.',
        image: 'https://i.postimg.cc/8CFhDwjQ/john-wick-4-film.webp',
        video: './video/video-films.mp4'
      }
    ],
    [ // SÉRIE [1]
      { // images 512x512
        title: 'Anéis do Poder',
        text: 'início em uma época de relativa paz, a série acompanha um grupo de personagens que enfrenta o ressurgimento do mal na Terra-média. Das profundezas escuras das Montanhas de Névoa, das majestosas florestas de Lindon, do belíssimo reino da ilha de Númenor, até os confins do mapa, esses reinos e personagens criarão legados que permanecerão vivos muito além de suas partidas.',
        image: 'https://i.postimg.cc/fbFf0p6R/aneis-do-poder-serie.webp',
        video: './video/video-serie.mp4'
      },
      {
        title: 'The Last of Us',
        text: 'Situado duas décadas após a implosão de nossa sociedade, o drama seguirá Joel, um sobrevivente difícil, que é contratado para contrabandear uma garota de 14 anos chamada Ellie para fora de uma zona de quarentena opressiva. O que começa como um pequeno trabalho logo se torna uma jornada brutal e de partir o coração, já que os dois precisam atravessar os Estados Unidos e dependem um do outro para sobreviver.',
        image: 'https://i.postimg.cc/MHwR7Stq/tha-last-of-us.webp',
        video: './video/video-serie.mp4'
      }
    ],
    [ // ANIME [2]
      { // images 512x512
        title: 'Hunter x Hunter 2011',
        text: 'Monstros amedrontadores, criaturas exóticas, riquezas vastas, tesouros misteriosos, terras vis e terras inexploradas… Gon parte em uma aventura para se tornar um caçador profissional que arrisca a própria vida em busca do desconhecido. Pelo caminho, ele conhece outros participantes da Prova dos Caçadores: Kurapika, Leorio e Kirua. Será Gon capaz de vencer os grandes desafios da Prova de Caçadores e se tornar o melhor do mundo? Esta jornada selvagem e épica está prestes a começar!',
        image: 'https://i.postimg.cc/sf54vnK3/hunter-x-hunter.webp',
        video: './video/video-anime.mp4'
      },
      {
        title: 'Boruto: Naruto Next Generations',
        text: 'Continuação de “Naruto Shippuuden”, anime sobre o famoso ninja de roupa laranja Naruto Uzumaki que terminou dia 23 de março com 500 episódios – mais do dobro de seu antecessor, “Naruto”, que teve 220, enquanto que o mangá do qual os dois se basearam foi finalizado em 2014 com 72 volumes (todos já lançados no Brasil pela Panini, porém em 2015 deram início a publicação de uma edição de luxo intitulada “Naruto Gold”). Aqui o protagonista será o filho dele, Boruto Uzumaki, que tomará o lugar do pai como protagonista após este ter enfim conseguido se tornar no maior ninja de todos.',
        image: 'https://i.postimg.cc/X73cFwDd/boruto-naruto-next-generations.webp',
        video: './video/video-anime.mp4'
      }
    ],
  ]);
  
  const [currentVideo, setCurrentVideo] = useState({
    title: 'Hunter x Hunter 2011',
    text: 'Monstros amedrontadores, criaturas exóticas, riquezas vastas, tesouros misteriosos, terras vis e terras inexploradas… Gon parte em uma aventura para se tornar um caçador profissional que arrisca a própria vida em busca do desconhecido. Pelo caminho, ele conhece outros participantes da Prova dos Caçadores: Kurapika, Leorio e Kirua. Será Gon capaz de vencer os grandes desafios da Prova de Caçadores e se tornar o melhor do mundo? Esta jornada selvagem e épica está prestes a começar!',
    image: './images/hunter-x-hunter.jpg',
    video: './video/video-anime.mp4'
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
            <Route path='/aluraflix' element={<HomePage />}/>
            <Route path='/aluraflix/newVideo' element={<NewVideo />}/>
            <Route path='/aluraflix/videoPage' element={<VideoPage />}/>
          </Routes>
        </MyContext.Provider>
      </Router>
  );
}

export default App;
