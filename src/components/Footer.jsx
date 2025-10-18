import {
  Box,
  useColorMode,
  useColorModeValue,
  Link,
  HStack,
  Switch,
  Text,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useResponsiveSizes } from '../hooks/useScreenSize';

function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { respXS, respMD } = useResponsiveSizes();
  const mainBg = useColorModeValue(
    'rgba(255, 255, 255, 0.5)',
    'rgba(26, 32, 44, 0.5)'
  );

  return (
    <Box
      id="footer-container"
      position="relative"
      p={`0 ${respXS} 0 ${respXS}`}
      bg={mainBg}
      w="full"
      borderRadius={respXS}
      boxShadow="md"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      backdropFilter="blur(10px)"
    >
      <HStack gap={respXS}>
        <Link fontSize={respMD} color="text-primary" href="https://github.com/alexandrite22" isExternal>
          GitHub
        </Link>
        <Text fontSize={respMD} color="text-primary">|</Text>
        <Link fontSize={respMD} color="text-primary" href="https://linkedin.com/in/alexander-hewson" isExternal>
          LinkedIn
        </Link>
        <Text fontSize={respMD} color="text-primary">|</Text>
        <Link fontSize={respMD} color="text-primary" href="https://docs.google.com/document/d/1uMrk-2FHum0oQvJ9bVxw5zieTHCC0Xf7VmDJUjElTWQ/edit?usp=sharing" isExternal>
          Resume
        </Link>
      </HStack>
      <HStack position="absolute" right={respXS}>
        <SunIcon color="sun" boxSize={respMD} />
        <Switch size={['sm', 'md']} isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        <MoonIcon color="moon" boxSize={respMD} />
      </HStack>
    </Box>
  );
}

export default Footer;
