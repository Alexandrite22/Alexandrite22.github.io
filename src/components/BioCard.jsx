import { Image, Text, VStack, Flex, Heading, Link, HStack } from '@chakra-ui/react';
import pfp from '../assets/StaticPFP.png';
import { useScreenSize, useDiagonalBreakpointValue, useResponsiveSizes } from '../hooks/useScreenSize';

const BioCard = () => {
  const { isLandscape } = useScreenSize();
  const { respEM, respSmall, respHeadingSize, respTextSize } = useResponsiveSizes();
  const pfpSize = useDiagonalBreakpointValue({ base: "100px", sm: "150px", md: "200px", lg: "250px", xl: "300px", '2xl': "350px" });
  return (
    <Flex 
        spacing={respEM} 
        flexDirection="row"
        alignItems="flex-start" 
        justifyContent="flex-start" 
        gap={respEM}
        bg="background-card"
        p={respEM}
        borderRadius={respSmall}
        boxShadow="md"
        width="full"
        >
        {isLandscape ? (
                <>
                    <Image
                        borderRadius={respSmall}
                        boxSize={pfpSize}
                        src={pfp}
                        alt="Profile Picture"
                    />
                    <VStack alignItems="flex-start" justifyContent="space-between" height="full">
                        <VStack alignItems="flex-start" justifyContent="flex-start">
                            <Heading fontWeight="bold" fontSize={respHeadingSize} color="text-primary">
                                Alex Hewson
                            </Heading>
                            <Text color="text-primary" fontSize={respTextSize}>
                                Full Stack Developer. I thrive on biting off more than I can chew.
                            </Text>
                        </VStack>
                        <VStack alignItems="flex-start" justifyContent="flex-start">
                            <Text id="description" mt={2} color="text-primary" fontSize={respTextSize}>
                                Located in Denver, Colorado, USA.
                                <br />
                                Email: <Link href='mailto:Alex.hewson.1122@gmail.com'>Alex.hewson.1122@gmail.com</Link>
                                <br />
                                Cell: <Link href='tel:+12163181544'>+1 (216) 318-1544</Link>
                            </Text>
                        </VStack>
                    </VStack>
                </>
            ) : (
                <>
                    <VStack alignItems="flex-start" justifyContent="space-between" height="full">
                        <HStack alignItems="flex-start" justifyContent="flex-start" gap={4}>
                            <Image
                                borderRadius={respSmall}
                                boxSize={pfpSize}
                                src={pfp}
                                alt="Profile Picture"
                            />
                            <VStack alignItems="flex-start" justifyContent="flex-start">
                                <Heading fontWeight="bold" fontSize={respHeadingSize} color="text-primary">
                                    Alex Hewson
                                </Heading>
                                <Text color="text-primary" fontSize={respTextSize}>
                                    Full Stack Developer. I thrive on biting off more than I can chew.
                                </Text>
                            </VStack>
                        </HStack>
                        <VStack alignItems="flex-start" justifyContent="flex-start">
                            <Text id="description" mt={2} color="text-primary" fontSize={respTextSize}>
                                Located in Denver, Colorado, USA.
                                <br />
                                Email: <Link href='mailto:Alex.hewson.1122@gmail.com'>Alex.hewson.1122@gmail.com</Link>
                                <br />
                                Cell: <Link href='tel:+12163181544'>+1 (216) 318-1544</Link>
                            </Text>
                        </VStack>
                    </VStack>
                </>
            )}

    </Flex>
  );
};

export default BioCard;