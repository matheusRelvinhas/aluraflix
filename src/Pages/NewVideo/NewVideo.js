import React from 'react';
import Container from '../../Components/Container/Container';
import Form from '../../Components/Form/Form';
import './NewVideo.css';

const NewVideo = () => {
  
  return (
    <>
      <Container 
        main={
          <>
            <Form />
          </>
        }
      /> 
    </>
  );
}

export default NewVideo;
