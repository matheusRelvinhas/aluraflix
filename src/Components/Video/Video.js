import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import './Video.css';

function Video() {
  
  const { currentVideo, dataCss } = useContext(MyContext);
  
  return (
    <>
      <div className="video" style={{
        background: dataCss.primaryColor,
        color: dataCss.secundaryColor
      }}>
        <div className="video-container">
          <div className="video-thumbnail">
            <img src={currentVideo.image} alt="Video Thumbnail" />
          </div>
          <div className="video-info">
            <h3 className="video-title"><strong>{currentVideo.title}</strong></h3>
          </div>
        </div>
        <video className="video-player" controls>
          <source src={currentVideo.video} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        <div className="video-description">
          <p><strong>Sinopse: {currentVideo.text}</strong></p>
        </div>
      </div>
    </>
  );
}

export default Video;
