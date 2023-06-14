import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Container.css';

const Container = ({ main }) => {
  return (
    <div className='container'>
      <div>
        <Header />
      </div>    
      <main className='main'>
        {main}
      </main>
      <div className='container-footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Container;
