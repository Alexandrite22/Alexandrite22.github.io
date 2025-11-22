import styled from '@emotion/styled';
import { useScreenSize, useResponsiveSizes } from '../hooks/useScreenSize';
import BioCard from '../components/BioCard';
import AboutCard from '../components/AboutCard';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  gap: ${(props) => props.gap};
  height: ${(props) => (props.isLandscape ? '100%' : 'auto')};
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isLandscape ? 'row' : 'column')};
  justify-content: space-between;
  align-items: ${(props) => (props.isLandscape ? 'stretch' : 'flex-start')};
  gap: ${(props) => props.gap};
  flex: 1;
  min-height: 0;
`;

const HomePage = () => {
  const { isLandscape } = useScreenSize();
  const { respSM } = useResponsiveSizes();
  return (
    <FlexColumn gap={respSM} isLandscape={isLandscape}>
      <BioCard />
      <AboutCard />
    </FlexColumn>
  );
};

export default HomePage;
