import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 1rem;
  color: ${(props) => props.theme.colors['text-primary']};
`;

const PlaceholderTool = () => {
  return (
    <Container>
      <h2>Placeholder Tool</h2>
      <p>Content for the Placeholder tool goes here.</p>
    </Container>
  );
};

export default PlaceholderTool;

