import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import './Video.css';

function Video() {
  
  const { currentVideo } = useContext(MyContext);
  
  return (
   <>
     <div>
       <img src={currentVideo.image} alt='video-img' />
     </div>
     <div>
       <div>{currentVideo.video}</div>
       <div>
         <h1>{currentVideo.title}</h1>
         <p>{currentVideo.text}</p>
       </div>
     </div>
   </>
  );
}

export default Video;
