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
  background-color: ${(props) => props.theme.colors['background-card']};
  padding: ${(props) => props.p};
  border-radius: ${(props) => props.borderRadius};
  border-top-left-radius: 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  border: 1px solid ${(props) => props.theme.colors['border-primary']};
  border-top: none; /* Connects with the tab container border */
`;

const ToolsView = () => {
  const { isLandscape } = useScreenSize();
  const { respXS, respSM } = useResponsiveSizes();
  
  return (
    <FlexColumn gap="0" isLandscape={isLandscape}>
      <ToolTab />
      <ContentCard p={respSM} borderRadius={respXS}>
        <Outlet />
      </ContentCard>
    </FlexColumn>
  );
};

export default ToolsView;
