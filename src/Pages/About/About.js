import React from 'react';
import Container from '../../Components/Container/Container';

import './About.css';

const About = ({dataCss}) => {
  
  return (
    <>
      <Container 
        main={
          <>
            Página About
          </>
        }
        dataCss={dataCss}
      /> 
    </>
  );
}

export default About;
