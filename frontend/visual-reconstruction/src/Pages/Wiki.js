import { Container } from '@material-ui/core';
import React from 'react';

function Wiki() {
  return (
    <div className="Wiki">
      <Container fixed>
        <h2>
          Wiki
        </h2>
        <ul>
          <li>
            Human Vision
          </li>
          <li>
            Computer Vision
          </li>
          <li>
            Human-Computer Vision
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Wiki;