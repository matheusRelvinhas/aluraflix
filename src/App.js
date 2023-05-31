import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import About from './Pages/About/About';


function App() {
  const dataCss = { // cor principal de fundo, header(banner) e footer 
    primaryColor: '#ffe53e',
    logoImage: './images/logo.png',
    bannerImage: '/images/banner-relvis-delivery.png'
  }
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage dataCss={dataCss}/>}/>
          <Route path="/about" element={<About dataCss={dataCss}/>}/>
        </Routes>
      </Router>
  );
}

export default App;
