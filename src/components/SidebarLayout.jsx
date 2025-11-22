import styled from '@emotion/styled';
import { useColorMode } from '../context/ThemeContext';
import staticBG from '../assets/staticBG.jpg';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import {
  useResponsiveSizes,
  useScreenSize,
  useDiagonalBreakpointValue,
} from '../hooks/useScreenSize';
import Sidebar from './Sidebar';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: ${(props) => props.p};
  gap: ${(props) => props.gap};
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isLandscape ? 'row' : 'column')};
  border-radius: ${(props) => props.borderRadius};
  gap: ${(props) => props.gap};
  flex: 1;
  min-height: 0;
  overflow: ${(props) => (props.isLandscape ? 'hidden' : 'auto')};
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isLandscape ? props.width : '100%')};
  height: ${(props) => (props.isLandscape ? '100%' : 'auto')};
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.p};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  transition: background-color 0.3s ease;
`;

const OutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${(props) => props.p};
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  transition: background-color 0.3s ease;
`;

const SidebarLayout = () => {
  const { isLandscape } = useScreenSize();
  const { respXS, respSM } = useResponsiveSizes();
  const sidebarWidth = useDiagonalBreakpointValue({
    base: '6rem',
    sm: '8rem',
    md: '10rem',
    lg: '12rem',
    xl: '14rem',
    '2xl': '18rem',
  });
  const { colorMode } = useColorMode();

  const mainBg =
    colorMode === 'light'
      ? 'rgba(255, 255, 255, 0.5)'
      : 'rgba(26, 32, 44, 0.5)';

  return (
    <LayoutContainer
      p={respXS}
      gap={respXS}
      backgroundImage={staticBG}
    >
      <MainContent
        isLandscape={isLandscape}
        borderRadius={respXS}
        gap={respXS}
      >
        <SidebarContainer
          isLandscape={isLandscape}
          width={sidebarWidth}
          bg={mainBg}
          p={respXS}
          borderRadius={respXS}
        >
          <Sidebar />
        </SidebarContainer>
        <OutletContainer
          p={respXS}
          bg={mainBg}
          borderRadius={respSM}
        >
          <Outlet />
        </OutletContainer>
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default SidebarLayout;

