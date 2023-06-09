import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import './Footer.css';

const Footer = () => {

  const { dataCss } = useContext(MyContext);

  return (
    <footer className='footer' style={{background: dataCss.primaryColor}}>
      FOOTER
    </footer>
  );
}

export default Footer;
