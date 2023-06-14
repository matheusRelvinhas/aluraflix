import React from 'react';
import './Banner.css';

const Banner = ({dataCss}) => {
  return (
      <>
        <img className='banner-img' src={dataCss.bannerImage} alt='Banner'/>
      </>
  );
}

export default Banner;
