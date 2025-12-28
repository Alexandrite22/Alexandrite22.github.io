import React from 'react';
import styled from '@emotion/styled';
import { Heading, Text } from './ui/Typography';
import { useResponsiveSizes } from '../hooks/useScreenSize';

const Container = styled.div`
  padding: 1rem;
  color: ${(props) => props.theme.colors['text-primary']};
`;

const Placeholder = () => {
  const { respLG, respMD } = useResponsiveSizes();
  return (
    <Container>
      <Heading fontSize={respLG}>
        Placeholder
      </Heading>
      <Text fontSize={respMD}>
        Placeholder I used to make sure the tabs worked
      </Text>
    </Container>
  );
};

export default Placeholder;

