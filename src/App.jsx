import {
  Box,
  Flex,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import BioCard from './components/BioCard';
import staticBG from './assets/staticBG.jpg';
import Footer from './components/Footer';
import BioDesc from './components/BioDesc';
import HardSkillsCard from './components/HardSkillsCard';
import SoftSkillCard from './components/SoftSkillCard';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

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
      p="1.25rem"
      height="100vh"
      position="relative"
      display="flex"
      flexDirection="column"
      gap="1.5rem"
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
        p="1.5rem"
        bg={mainBg}
        w="full"
        flex={1}
        borderRadius="1rem"
        boxShadow="md"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        overflow={{ base: 'auto', md: 'auto', lg: 'hidden', xl: 'hidden' }}
        gap="1rem"
        backdropFilter="blur(10px)"
      >
        <BioCard />
        <Flex
          flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
          justifyContent="space-between"
          alignItems={{ base: 'flex-start', lg: 'stretch' }}
          gap="1rem"
          flex={1}
          minH={0}
        >
          <BioDesc />
          <HardSkillsCard />
          <SoftSkillCard />
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
