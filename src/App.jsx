import { Box, Button, useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.100', 'gray.700')
  return (
      <Box position="relative" 
        m="3rem" 
        p="3rem" 
        bg={bg} 
        height={`calc(100vh - 6rem)`}
        borderRadius="md" 
        boxShadow="md" 
        display="flex" 
        flexDirection="column" 
        flexGrow={1}
        alignItems="center" 
        justifyContent="center" 
        gap="1rem">
        <IconButton
          aria-label="Toggle theme"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          position="absolute"
          top="1rem"
          right="1rem"
        />
        <Button colorScheme='teal' size='lg'>
          Click Me
        </Button>
      </Box>
  )
}

export default App
