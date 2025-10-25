import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';

const SidebarLink = ({ title, children }) => {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        {title}
                    </Box>
                </AccordionButton>
            </AccordionItem>
        </Accordion>
    )
}

export default SidebarLink;