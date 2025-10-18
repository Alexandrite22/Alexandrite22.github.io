import {
  Box,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import staticBG from './assets/staticBG.jpg';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import { useResponsiveSizes, useScreenSize } from './hooks/useScreenSize';


function App() { 
  const { isLandscape } = useScreenSize();
  const { respSM } = useResponsiveSizes();
  const bgOverlay = useColorModeValue(
    'rgba(255, 255, 255, 0.4)',
    'rgba(26, 32, 44, 0.4)'
  );

  const mainBg = useColorModeValue(
    'rgba(255, 255, 255, 0.5)',
    'rgba(26, 32, 44, 0.5)'
  );

  return (
    <Box
      id="background-container"
      backgroundImage={`url(${staticBG})`}
      backgroundSize="cover"
      backgroundPosition="center"
      p={respSM}
      height="100vh"
      position="relative"
      display="flex"
      flexDirection="column"
      gap={respSM}
      alignItems="center"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: bgOverlay,
        zIndex: 0,
      }}
    >
      <Box
        id="main-container"
        position="relative"
        p={respSM}
        bg={mainBg}
        w="full"
        flex={1}
        borderRadius={respSM}
        boxShadow="md"
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="flex-start"
        overflow={isLandscape ? 'hidden' : 'auto'}
        gap={respSM}
        backdropFilter="blur(10px)"
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
