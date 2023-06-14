import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import { Link } from 'react-router-dom';
import './VideoCard.css';

const VideoCard = ({title , text, image, video}) => {
  
  const { addCurrentVideo } = useContext(MyContext);
  
  const addVideo = {
    title: title,
    text: text,
    image: image,
    video: video
  }

  return (
    <div className='card'>
      <Link
        to='/videoPage'
        onClick={() => addCurrentVideo(addVideo)}
      >
        <img src={image} alt='video-img' className='card-image'/> 
        <div className='card-content'>
          <h3 className='card-title'>{title}</h3>
          <p className='card-description'>{text}</p>
        </div>
      </Link>
    </div>
  ); 
}

export default VideoCard;
