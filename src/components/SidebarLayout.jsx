import {
    Box,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';
import staticBG from '../assets/staticBG.jpg';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useResponsiveSizes, useScreenSize, useDiagonalBreakpointValue } from '../hooks/useScreenSize';
import Sidebar from './Sidebar';


const SidebarLayout = () => {
    const { isLandscape } = useScreenSize();
    const { respXS, respSM } = useResponsiveSizes();
    const sidebarWidth = useDiagonalBreakpointValue({ base: "6rem", sm: "8rem", md: "10rem", lg: "12rem", xl: "14rem", '2xl': "18rem" });

    const mainBg = useColorModeValue(
        'rgba(255, 255, 255, 0.5)',
        'rgba(26, 32, 44, 0.5)'
    );

    return (
        <Flex 
            id="sidebar-container"
            flexDirection="column"
            height="100vh"
            width="100vw"
            p={respXS}
            gap={respXS}
            backgroundImage={`url(${staticBG})`}
            backgroundSize="cover"
            backgroundPosition="center"
            >
            <Flex 
                flexDirection={isLandscape ? "row" : "column"}
                borderRadius={respXS}
                gap={respXS}
                flex={1} 
                minH={0}
                overflow={isLandscape ? "hidden" : "auto"}
            >
                <Flex 
                    flexDirection="column" 
                    width={isLandscape ? sidebarWidth : "full"} 
                    height={isLandscape ? "full" : "auto"}
                    bg={mainBg}
                    p={respXS}
                    borderRadius={respXS}
                    boxShadow="md"
                    backdropFilter="blur(10px)"
                >
                    <Sidebar />
                </Flex>
                <Flex 
                    flexDirection="column"
                    flex={1}
                    p={respXS}
                    bg={mainBg}
                    borderRadius={respSM}
                    boxShadow="md"
                    backdropFilter="blur(10px)"
                >
                    <Outlet />
                </Flex>
            </Flex>
            <Footer />
        </Flex>
    );
};

export default SidebarLayout;

