import { ChakraProvider, Box, Button } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Box p={4} bg='gray.100' maxW='md' mx='auto' mt={5}>
        <Button colorScheme='teal' size='lg'>
          Click Me
        </Button>
      </Box>
    </ChakraProvider>
  )
}

export default App
