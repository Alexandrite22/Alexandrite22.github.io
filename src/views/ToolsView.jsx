import styled from '@emotion/styled';
import { useScreenSize, useResponsiveSizes } from '../hooks/useScreenSize';
import { Outlet } from 'react-router-dom';
import ToolTab from '../components/ToolTab';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  gap: ${(props) => props.gap};
  height: ${(props) => (props.isLandscape ? '100%' : 'auto')};
`;

const ContentCard = styled.div`
  background-color: transparent;
  padding: 0;
  border-radius: ${(props) => props.borderRadius};
  border-top-left-radius: 0;
  box-shadow: none;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  border: none;
`;

const ToolsView = () => {
  const { isLandscape } = useScreenSize();
  const { respXS, respSM } = useResponsiveSizes();
  
  return (
    <FlexColumn gap="0" isLandscape={isLandscape}>
      <ToolTab />
      <ContentCard p={respXS} borderRadius={respXS}>
        <Outlet />
      </ContentCard>
    </FlexColumn>
  );
};

export default ToolsView;
