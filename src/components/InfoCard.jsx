import { VStack, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import { useResponsiveSizes, useScreenSize } from '../hooks/useScreenSize';

const InfoCard = ({ title, content }) => {
    const { respSM, respMD, respLG } = useResponsiveSizes();
    const { isLandscape } = useScreenSize();
    return (
        <VStack
            bg="background-card"
            borderRadius={respSM}
            boxShadow="md"
            width="full"
            height={isLandscape ? "full" : "auto"}
            overflowY={isLandscape ? "auto" : "hidden"}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            >
            <Heading
                p={respSM}
                w="full"
                bg="background-card"
                fontWeight="bold"
                fontSize={respLG}
                borderRadius={`${respSM} ${respSM} 0 0`}
                color="text-primary" position={isLandscape ? "sticky" : "static"} top={0} zIndex={1} >{title}</Heading>
            {Array.isArray(content) ? (
                <UnorderedList
                    id="description"
                    p={`0 ${respSM} ${respSM} ${respSM}`}
                    color="text-primary"
                    fontSize={respMD}
                    >
                    {content.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>
                    ))}
                </UnorderedList>
                ) : (
                    <Text
                        p={`0 ${respSM} ${respSM} ${respSM}`}
                        color="text-primary"
                        fontSize={respMD}
                        >
                        {content}
                    </Text>
                )
            }
        </VStack>
    );
};

export default InfoCard; 