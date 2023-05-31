import './Footer.css';

const Footer = ({dataCss}) => {
  return (
    <footer className='footer' style={{background: dataCss.primaryColor}}>
      FOOTER
    </footer>
  );
}

export default Footer;
