import { Text, Flex, Heading } from '@chakra-ui/react';

const SoftSkillCard = () => {
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
            color="text-primary" position={{lg: "sticky", xl: "sticky"}} top={0} zIndex={1} >Workstyle:</Heading>
            <Text 
                id="description" 
                p="0 1rem 1rem 1rem" 
                color="text-primary" 
                textAlign="justify"
                fontSize={{base: "sm", md: "md", lg: "lg", xl: "xl"}}>
                    I value clear communication and I am able to effectively communicate with my team and clients. I pride myself on being able to read tone and non-verbal cues, even across different cultures and language barriers in order to adjust the direction of conversation to ensure no one is left in the dark.
                    Within teams, I pride myself in passively learning the learning styles and communication behaviours of my team members to ensure smoother collaboration as time goes on. I like to perform initial technical handoffs early to allow everyone has more than enough time to ask questions they may not have thought of during the initial handoff, as someone who suffers from information overload, I always have follow up questions myself.
            </Text>
        </Flex>
    );
};

export default SoftSkillCard; 