import { Image, Text, VStack, Flex, Heading, Link } from '@chakra-ui/react';
import pfp from '../assets/StaticPFP.png';

const BioCard = () => {
  return (
    <Flex 
        spacing={4} 
        flexDirection="row"
        alignItems="flex-start" 
        justifyContent="flex-start" 
        gap={4}
        bg="background-card"
        p={4}
        borderRadius="0.75rem"
        boxShadow="md"
        width="full"
        >
        <Image
            borderRadius="0.5rem"
            boxSize={{base: "100px", md: "150px", lg: "200px", xl: "250px"}}
            src={pfp}
            alt="Profile Picture"
        />
        <VStack alignItems="flex-start" justifyContent="space-between" height="full">
            <VStack alignItems="flex-start" justifyContent="flex-start">
                <Heading fontWeight="bold" fontSize={{base: "2xl", md: "3xl", lg: "4xl", xl: "5xl"}} color="text-primary">
                    Alex Hewson
                </Heading>
                <Text color="text-primary" fontSize={{base: "md", md: "lg", lg: "xl", xl: "2xl"}}>
                    Full Stack Developer. I thrive on biting off more than I can chew.
                </Text>
            </VStack>
            <VStack alignItems="flex-start" justifyContent="flex-start">
                <Text id="description" mt={2} color="text-primary" fontSize={{base: "sm", md: "md", lg: "lg", xl: "xl"}}>
                    Located in Denver, Colorado, USA.
                    <br />
                    Email: <Link href='mailto:Alex.hewson.1122@gmail.com'>Alex.hewson.1122@gmail.com</Link>
                    <br />
                    Cell: <Link href='tel:+12163181544'>+1 (216) 318-1544</Link>
                </Text>
            </VStack>
        </VStack>
    </Flex>
  );
};

export default BioCard;