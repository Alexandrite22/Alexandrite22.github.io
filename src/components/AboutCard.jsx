import styled from '@emotion/styled';
import {
  useScreenSize,
  useResponsiveSizes,
} from '../hooks/useScreenSize';
import { Heading, Text } from './ui/Typography';

const StyledFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${(props) => props.gap};
  background-color: ${(props) => props.theme.colors['background-card']};
  padding: ${(props) => props.p};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 100%;
  transition: background-color 0.3s ease;
  flex-direction: column;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  gap: ${(props) => props.gap || 0};
`;

const HStack = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: ${(props) => props.gap};
`;

const AboutCard = () => {
  const { isLandscape } = useScreenSize();
  const { respSM, respLG, respMD } = useResponsiveSizes();

  return (
    <StyledFlex gap={respSM} p={respSM} borderRadius={respSM}>
        <Heading fontSize={respLG}>
            What's This?
        </Heading>
        <Text fontSize={respMD}>
            This is a personal static page I use to test ideas. Please check the footer for links to my github, my LinkedIn, and my resume.
        </Text>
        <Text fontSize={respMD}>
            Since this is a playground for me to test ideas, it will never be "finished product" and is not updated regularly.
        </Text>
    </StyledFlex>
  );
};

export default AboutCard;