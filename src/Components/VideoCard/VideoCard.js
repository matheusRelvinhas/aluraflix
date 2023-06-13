import React from 'react';
import './VideoCard.css';

const VideoCard = ({title , text, image, video}) => {  
  return (
    <div className='card'>
      <img src={image} alt='video-img' />
      <div className='card-content'>
        <h3 className='card-title'>{title}</h3>
        <p className='card-description'>{text}</p>
      </div>
    </div>
  ); 
}

export default VideoCard;
