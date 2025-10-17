import {
  Box,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import staticBG from './assets/staticBG.jpg';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import { useResponsiveSizes } from './hooks/useScreenSize';


function App() { 
  const { respEM, respSmall } = useResponsiveSizes();
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
      p={respEM}
      height="100vh"
      position="relative"
      display="flex"
      flexDirection="column"
      gap={respEM}
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
        p={respEM}
        bg={mainBg}
        w="full"
        flex={1}
        borderRadius={respSmall}
        boxShadow="md"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        overflow={{ base: 'auto', md: 'auto', lg: 'hidden', xl: 'hidden' }}
        gap={respEM}
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
