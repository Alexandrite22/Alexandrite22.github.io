import { VStack, Heading, Text } from '@chakra-ui/react';
import { useResponsiveSizes, useScreenSize } from '../hooks/useScreenSize';

const InfoCard = ({ title, content }) => {
    const { respEM, respTextSize, respHeadingSize, respSmall } = useResponsiveSizes();
    const { isLandscape } = useScreenSize();
    return (
        <VStack
            bg="background-card"
            borderRadius={respSmall}
            boxShadow="md"
            width="full"
            height={{lg: "full"}}
            overflowY={{lg: "auto"}}
            >
            <Heading
                p={respEM}
                w="full"
                bg="background-card"
                fontWeight="bold"
                fontSize={respHeadingSize}
                borderRadius={`${respSmall} ${respSmall} 0 0`}
                color="text-primary" position={isLandscape ? "sticky" : "static"} top={0} zIndex={1} >{title}</Heading>
            {Array.isArray(content) ? (
                <VStack
                    id="description"
                    p={`0 ${respEM} ${respEM} ${respEM}`}
                    color="text-primary"
                    fontSize={respTextSize}
                    alignItems="flex-start"
                    width="full"
                    >
                    {content.map((item, index) => (
                        <Text key={index}>{item}</Text>
                    ))}
                </VStack>
                ) : (
                    <Text
                        p={`0 ${respEM} ${respEM} ${respEM}`}
                        color="text-primary"
                        fontSize={respTextSize}
                        >
                        {content}
                    </Text>
                )
            }
        </VStack>
    );
};

export default InfoCard; 