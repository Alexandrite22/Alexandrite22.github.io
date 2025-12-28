import styled from '@emotion/styled';
import { useResponsiveSizes } from '../hooks/useScreenSize';
import { Outlet } from 'react-router-dom';
import ComponentsTab from '../components/ComponentsTab';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  gap: ${(props) => props.gap};
  height: 100%;
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

const ComponentsView = () => {
  const { respXS, } = useResponsiveSizes();
  
  return (
    <FlexColumn gap="0">
      <ComponentsTab />
      <ContentCard p={respXS} borderRadius={respXS}>
        <Outlet />
      </ContentCard>
    </FlexColumn>
  );
};

export default ComponentsView;
