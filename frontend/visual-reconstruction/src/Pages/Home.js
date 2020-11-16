import { Container } from '@material-ui/core';
import React from 'react';
import ImageUpload from './UtilPages/ImageUpload';

function Home() {
  return (
    <div className='Home'>
      <Container fixed>
        <h2>
          Visual Reconstruction Demo
        </h2>
        <ImageUpload />
      </Container>
      
    </div>
  );
}

export default Home;