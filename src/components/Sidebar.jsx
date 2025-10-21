import { Flex, Image } from '@chakra-ui/react';
import { useScreenSize, useResponsiveSizes } from '../hooks/useScreenSize';

const Sidebar = () => {
    const { isLandscape } = useScreenSize();
    const { respXS, respXL } = useResponsiveSizes();
    return (
        <Flex
            flexDirection={isLandscape ? "column" : "row"}
            gap={respXS}
            height="full"
            width="full"
        >
            <Flex 
                bg="background-card" 
                p={respXS} 
                borderRadius={respXS}
            >
                <Image src={'/Logo.svg'} alt="Logo" boxSize={respXL} />
            </Flex>
            <Flex 
                bg="background-card" 
                p={respXS} 
                borderRadius={respXS}
                height="full"
                width="full"
            >
                
            </Flex>
        </Flex>
    )
}

export default Sidebar;