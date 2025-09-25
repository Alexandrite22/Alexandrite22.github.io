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

function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  const mainBg = useColorModeValue(
    'rgba(255, 255, 255, 0.5)',
    'rgba(26, 32, 44, 0.5)'
  );

  return (
    <Box
      id="footer-container"
      position="relative"
      px="1.5rem"
      bg={mainBg}
      h="3rem"
      w="full"
      borderRadius="1.25rem"
      boxShadow="md"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      overflow="auto"
      gap="1rem"
      backdropFilter="blur(10px)"
    >
      <HStack>
        <Link color="text-primary" href="https://github.com/alexandrite22" isExternal>
          GitHub
        </Link>
        <Text color="text-primary">|</Text>
        <Link color="text-primary" href="https://linkedin.com/in/alexander-hewson" isExternal>
          LinkedIn
        </Link>
        <Text color="text-primary">|</Text>
        <Link color="text-primary" href="https://docs.google.com/document/d/1uMrk-2FHum0oQvJ9bVxw5zieTHCC0Xf7VmDJUjElTWQ/edit?usp=sharing" isExternal>
          Resume
        </Link>
      </HStack>
      <HStack position="absolute" right="1.5rem">
        <SunIcon color="sun" boxSize="1.5rem" />
        <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        <MoonIcon color="moon" boxSize="1.5rem" />
      </HStack>
    </Box>
  );
}

export default Footer;
