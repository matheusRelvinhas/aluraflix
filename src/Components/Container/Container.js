import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Container = ({ main }) => {
  return (
    <div>
      <Header />      
      <main>
        {main}
      </main>
      <Footer />
    </div>
  );
};

export default Container;