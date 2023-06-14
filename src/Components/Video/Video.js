import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import './Video.css';

function Video() {
  
  const { currentVideo } = useContext(MyContext);
  
  return (
    <>
      <div className="video">
        <div className="video-container">
          <div className="video-thumbnail">
            <img src={currentVideo.image} alt="Video Thumbnail" />
          </div>
          <div className="video-info">
            <h3 className="video-title">{currentVideo.title}</h3>
            <p className="video-description">{currentVideo.text}</p>
          </div>
        </div>
        <video className="video-player" controls>
          <source src={currentVideo.video} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </>
  );
}

export default Video;
