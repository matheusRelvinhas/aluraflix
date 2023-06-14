import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Button from '../Button/Button';
import MyContext from '../../Context/MyContext';
import './Header.css';

const Header = () => {
  
  const { dataCss } = useContext(MyContext);
  
  return (
    <header className='header' style={{background: dataCss.primaryColor}}>
      <div className='header-container' >
        <div>
          <Link to='/aluraflix'><img className='header-logo' src={dataCss.logoImage} alt='Logo'/></Link>
        </div>
        <div className='header-buttom'>
          <Link to='/aluraflix/newVideo'>
            <Button text="Novo vídeo" />
          </Link>
        </div>
      </div>
      <div className='header-banner'>
        <Banner dataCss={dataCss}/>
      </div>
    </header>
  );
};

export default Header;
