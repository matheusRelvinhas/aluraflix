import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Container from '../../Components/Container/Container';
import './HomePage.css';


const HomePage = ({dataCss}) => {
  
    const handleClick = () => {
    console.log('Botão clicado!');
  };
  
  return (
    <>
      <Container 
        main={
          <>
            <Carousel/>
          </>
        }
        dataCss={dataCss}
      /> 
    </>
  );
}

export default HomePage;
