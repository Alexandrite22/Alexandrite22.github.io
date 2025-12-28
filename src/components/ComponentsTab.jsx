import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { useResponsiveSizes } from '../hooks/useScreenSize';

const TabContainer = styled.div`
  display: flex;
  gap: 0;
  width: 100%;
`;

// Filter out custom props so they don't get passed to the DOM
const StyledTab = styled(NavLink, {
    shouldForwardProp: (prop) => !['borderRadius', 'padding', 'fontSize'].includes(prop)
  })`
  padding: ${(props) => props.padding};
  color: ${(props) => props.theme.colors['text-secondary']};
  text-decoration: none;
  background-color: ${(props) => props.theme.colors['background-card']};
  border: 1px solid ${(props) => props.theme.colors['border-primary']};
  border-bottom: none;
  border-top-left-radius: ${(props) => props.borderRadius};
  border-top-right-radius: ${(props) => props.borderRadius};
  margin-bottom: -2px; /* Overlap with the container border */
  font-weight: 500;
  position: relative;
  z-index: 0;
  opacity: 0.7;
  font-size: ${(props) => props.fontSize};

  &:hover {
    color: ${(props) => props.theme.colors['text-primary']};
    opacity: 1;
    background-color: ${(props) => props.theme.colors.ui.background.light}1A;
  }

  &.active {
    color: ${(props) => props.theme.colors['text-primary']};
    background-color: ${(props) => props.theme.colors['background-card']};
    border-color: ${(props) => props.theme.colors['border-primary']};
    border-bottom: 2px solid ${(props) => props.theme.colors.brand.primary};
    font-weight: 600;
    z-index: 1;
    opacity: 1;
  }
`;

const ComponentsTab = () => {
  const { respXS, respSM, respMD } = useResponsiveSizes();

  return (
    <TabContainer gap={respXS}>
      <StyledTab 
        to="."
        end
        borderRadius={respXS} 
        padding={`${respXS} ${respSM}`}
        fontSize={respMD}
      >
        Alerts
      </StyledTab>
      <StyledTab 
        to="placeholder" 
        borderRadius={respXS}
        padding={`${respXS} ${respSM}`}
        fontSize={respMD}
      >
        Placeholder
      </StyledTab>
    </TabContainer>
  );
};

export default ComponentsTab;

