import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 1rem;
  color: ${(props) => props.theme.colors['text-primary']};
`;

const FractalTool = () => {
  return (
    <Container>
      <h2>Fractal Tool</h2>
      <p>Content for the Fractal tool goes here.</p>
    </Container>
  );
};

export default FractalTool;

