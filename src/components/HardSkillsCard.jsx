import { Text, Flex, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

const HardSkillsCard = () => {
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
            color="text-primary" position={{lg: "sticky", xl: "sticky"}} top={0} zIndex={1} >Technical Overview:</Heading>
        <UnorderedList
            id="description" 
            p="0 1rem 1rem 1rem" 
            color="text-primary" 
            fontSize={{base: "sm", md: "md", lg: "lg", xl: "xl"}}>
                <ListItem>React</ListItem>
                <ListItem>Vue.js</ListItem>
                <ListItem>Bootstrap</ListItem>
                <ListItem>Emotion</ListItem>
                <ListItem>Chakra V2</ListItem>
                <ListItem>MUI</ListItem>
                <ListItem>Figma</ListItem>
                <ListItem>Tanstack Router & Query</ListItem>
                <ListItem>NODE.js</ListItem>
                <ListItem>.NET</ListItem>
                <ListItem>Django</ListItem>
                <ListItem>Postman</ListItem>
                <ListItem>Cypress e2e testing</ListItem>
                <ListItem>xUnit testing</ListItem>
                <ListItem>Basic Technical roadmapping</ListItem>
                <ListItem>AXE compliance tooling</ListItem>
                <ListItem>Basic Docker</ListItem>
                <ListItem>Basic Java </ListItem>
                <ListItem>Micronaut Beginner</ListItem>
                <ListItem>Spring/Springboot Beginner</ListItem>
        </UnorderedList>
        </Flex>
    );
};

export default HardSkillsCard; 