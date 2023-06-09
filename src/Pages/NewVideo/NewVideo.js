import React from 'react';
import Container from '../../Components/Container/Container';
import Form from '../../Components/Form/Form';
import './NewVideo.css';

const NewVideo = ({dataCss}) => {
  
  return (
    <>
      <Container 
        main={
          <>
            <Form />
          </>
        }
        dataCss={dataCss}
      /> 
    </>
  );
}

export default NewVideo;
