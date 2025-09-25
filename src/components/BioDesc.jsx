import { Text, Flex, Heading } from '@chakra-ui/react';

const BioDesc = () => {
    return (
        <Flex 
        spacing={4} 
        flexDirection="column"
        alignItems="flex-start" 
        justifyContent="flex-start" 
        gap={4}
        bg="background-card"
        borderRadius="0.75rem"
        boxShadow="md"
        width="full"
        height={{lg: "full"}}
        overflowY={{lg: "auto"}}
        >
                <Heading 
            p={4} 
            w="full"
            bg="background-card"
            fontWeight="bold" 
            fontSize={{base: "lg", md: "xl", lg: "2xl", xl: "3xl"}} 
            borderRadius="0.75rem 0.75rem 0 0"
            color="text-primary" position={{lg: "sticky", xl: "sticky"}} top={0} zIndex={1} >About Me:</Heading>
            <Text 
                id="description" 
                p="0 1rem 1rem 1rem" 
                color="text-primary"
                textAlign="justify"
                fontSize={{base: "sm", md: "md", lg: "lg", xl: "xl"}}>
                    Despite attending Tech Elevator in 2022 a majority of my skills are self taught. 
                    I directly enjoy the act of learning and executing and I derive satisfaction on seeing results. 
                    I enjoy baking quality into my work and I struggle to just "make it work for now". 
                    I enjoy familiarizing myself with a project's entire roadmap to accurately predict when code should needs 
                    extra attention and when code needs to just work. 
                    I rarely vibe code, I prefer to give AI explicit instructions to automate tasks as a time saving measure or I will ask AI to explain things I do not fully understand. In my experience AI is a fantastic time saver, but it is not a replacement for a developers experience.
            </Text>
        </Flex>
    );
};

export default BioDesc; 