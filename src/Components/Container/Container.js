import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Container = ({ main, dataCss }) => {
  return (
    <div>
      <Header dataCss={dataCss}/>      
      <main>
        {main}
      </main>
      <Footer dataCss={dataCss}/>
    </div>
  );
};

export default Container;