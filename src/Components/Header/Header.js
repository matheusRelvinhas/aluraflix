import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Button from '../Button/Button';
import MyContext from '../../Context/MyContext';
import './Header.css';

const Header = () => {
  
  const { dataCss } = useContext(MyContext);
  
  return (
    <header style={{background: dataCss.primaryColor}}>
      <div>
        <Link to='/'><img src={dataCss.logoImage} alt='Logo'/></Link>
        <Link to='/newVideo'>
          <Button text="Novo vídeo" />
        </Link>
      </div>
      <Banner dataCss={dataCss}/>
    </header>
  );
};

export default Header;
