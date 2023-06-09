import React from 'react';
import Container from '../../Components/Container/Container';
import Carousel from '../../Components/Carousel/Carousel';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <Container
        main={
          <>
            <Carousel />
          </>
        }
      /> 
    </>
  );
}

export default HomePage;
