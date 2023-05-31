import React from 'react';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';
import Footer from '../../Components/Footer/Footer';
import './HomePage.css';

const HomePage = ({dataCss}) => {
  
    const handleClick = () => {
    console.log('Botão clicado!');
  };
  
  return (
    <>
      <Header dataCss={dataCss}/>
      <h1>ALURAFLIX</h1>
      <Button text='Clique aqui' onClick={handleClick} dataCss={dataCss}/>
      <Footer dataCss={dataCss}/>
    </>
  );
}

export default HomePage;
