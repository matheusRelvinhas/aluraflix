import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Button from '../Button/Button';

import './Header.css';

const Header = ({dataCss}) => {
  const handleButtonClick = () => {
    console.log('Botão Novo vídeo clicado!');
    // Adicione aqui a lógica para abrir a página de criação de um novo vídeo
  };

  return (
    <header style={{background: dataCss.primaryColor}}>
      <div>
        <Link to='/'><img src={dataCss.logoImage} alt='Logo'/></Link>
        <Button text="Novo vídeo" onClick={handleButtonClick} />
      </div>
      <Banner dataCss={dataCss}/>
    </header>
  );
};

export default Header;
