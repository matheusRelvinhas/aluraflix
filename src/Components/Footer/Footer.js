import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../Context/MyContext';
import { v4 as uuidv4 } from 'uuid';
import './Footer.css';

const Footer = () => {

  const { dataCss, dataIcon } = useContext(MyContext);

  return (
    <footer className='footer' style={{
      background: dataCss.primaryColor,
      color: dataCss.secundaryColor
    }}>
      <div className='footer-container'>    
        <section className='footer-icon'>
          <ul>
            {dataIcon.map(icon => <li key={uuidv4()}>
              <a href={icon.url}>
                <img src={icon.icon} alt={icon.alt} width='32' height='32'/>
              </a>
            </li>)}
          </ul>
        </section>
        <section>
          <Link to='/aluraflix'>
            <img className='logo' src={dataCss.logoImage} alt='logo'/>
          </Link>
        </section>
        <section className='footer-text'>
          <h5>
            <a href='https://github.com/matheusRelvinhas/'>matheusRelvinhas</a>
          </h5>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
