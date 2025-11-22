import styled from '@emotion/styled';
import pfp from '../assets/StaticPFP.png';
import {
  useScreenSize,
  useDiagonalBreakpointValue,
  useResponsiveSizes,
} from '../hooks/useScreenSize';
import { Heading, Text, Link } from './ui/Typography';

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
`;

const StyledImage = styled.img`
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.boxSize};
  height: ${(props) => props.boxSize};
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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

const BioCard = () => {
  const { isLandscape } = useScreenSize();
  const { respSM, respLG, respMD } = useResponsiveSizes();
  const pfpSize = useDiagonalBreakpointValue({
    base: '80px',
    sm: '125px',
    md: '165px',
    lg: '225px',
    xl: '250px',
    '2xl': '300px',
  });

  return (
    <StyledFlex gap={respSM} p={respSM} borderRadius={respSM}>
      {isLandscape ? (
        <HStack gap={respSM}>
          <StyledImage
            borderRadius={respSM}
            boxSize={pfpSize}
            src={pfp}
            alt="Profile Picture"
          />
          <VStack>
            <VStack>
              <Heading fontSize={respLG}>
                Alex Hewson
              </Heading>
              <Text fontSize={respMD}>
                Full Stack Developer. I thrive on biting off more than I can chew.
              </Text>
            </VStack>
            <VStack>
              <Text id="description" mt={2} fontSize={respMD}>
                Located in Denver, Colorado, USA.
                <br />
                Email:{' '}
                <Link href="mailto:Alex.hewson.1122@gmail.com">
                  Alex.hewson.1122@gmail.com
                </Link>
                <br />
                Cell:{' '}
                <Link href="tel:+12163181544">
                  +1 (216) 318-1544
                </Link>
              </Text>
            </VStack>
          </VStack>
        </HStack>
      ) : (
        <VStack>
            <HStack gap={respSM}>
                <StyledImage
                borderRadius={respSM}
                boxSize={pfpSize}
                src={pfp}
                alt="Profile Picture"
                />
                <VStack gap={respSM}>
                    <Heading fontSize={respLG}>
                        Alex Hewson
                    </Heading>
                    <Text fontSize={respMD}>
                        Full Stack Developer. I thrive on biting off more than I can chew.
                    </Text>
                </VStack>
            </HStack>
            <VStack>
                <Text id="description" mt={respSM} fontSize={respMD}>
                    Located in Denver, Colorado, USA.
                    <br />
                    Email:{' '}
                    <Link href="mailto:Alex.hewson.1122@gmail.com">
                        Alex.hewson.1122@gmail.com
                    </Link>
                    <br />
                    Cell:{' '}
                    <Link href="tel:+12163181544">
                        +1 (216) 318-1544
                    </Link>
                </Text>
            </VStack>
        </VStack>
      )}
    </StyledFlex>
  );
};

export default BioCard;