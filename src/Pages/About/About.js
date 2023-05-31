import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import './About.css';

const About = ({dataCss}) => {
  
  return (
    <>
      <Header dataCss={dataCss}/>
      <Footer dataCss={dataCss}/>
    </>
  );
}

export default About;
