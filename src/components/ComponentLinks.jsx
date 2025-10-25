import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, VStack } from '@chakra-ui/react'
import SidebarLink from './SidebarLink'
import { useResponsiveSizes } from '../hooks/useScreenSize' 
const ComponentLinks = () => {
    const { respXS, respMD } = useResponsiveSizes()
    return (
        <Accordion 
            allowToggle 
            variant="sidebar" 
            border="none" 
            borderRadius={respXS} 
            bg="background-card" 
            width="full" 
            >
            <AccordionItem width="full" border="none" borderRadius={respXS}>
                <AccordionButton width="full" justifyContent="space-between">
                    <SidebarLink to="/components">Components</SidebarLink>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                    <VStack width="full" gap="0">
                        <SidebarLink to="/components/alerts">Alerts</SidebarLink>
                        <SidebarLink to="/components/file-uploader">File Uploader</SidebarLink>
                        <SidebarLink to="/components/team-manager">Team Manager</SidebarLink>
                    </VStack>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default ComponentLinks;