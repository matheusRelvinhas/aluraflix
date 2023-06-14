import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import { v4 as uuidv4 } from 'uuid';
import './Footer.css';

const Footer = () => {

  const { dataCss, dataIcon } = useContext(MyContext);

  return (
    <footer className='footer' style={{background: dataCss.primaryColor}}>
      <div className='footer-container'>    
        <section>
          <ul>
            {dataIcon.map(icon => <li key={uuidv4()}>
              <a href={icon.url}>
                <img src={icon.icon} alt={icon.alt} width='32' height='32'/>
              </a>
            </li>)}
          </ul>
        </section>
        <section>
          <img className='logo' src={dataCss.logoImage} alt='logo'/>
        </section>
        <section className='footer-text'>
          <h3>
            Copia não hein comédia
          </h3>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
