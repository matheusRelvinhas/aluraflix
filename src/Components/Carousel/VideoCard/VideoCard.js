import React from 'react';
import './VideoCard.css';

const VideoCard = ({title , description, image}) => {  
  return (
    <div className='card'>
      <img src={image} alt='video-image' />
      <div className='card-content'>
        <h3 className='card-title'>{title}</h3>
        <p className='card-description'>{description}</p>
      </div>
    </div>
  ); 
}

export default VideoCard;
