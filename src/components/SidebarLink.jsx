import { Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useResponsiveSizes } from '../hooks/useScreenSize';    
const SidebarLink = ({ to, children }) => {
    const { respXS, respMD } = useResponsiveSizes();
    return (
        <Link 
            as={RouterLink}
            display="flex"
            width="full" 
            hover={{ textDecoration: 'underline', bg: 'opacity.10'}} 
            borderRadius={respXS} 
            to={to}
            fontSize={respMD}
            justifyContent="flex-start"
            alignItems="center"
            >
            {children}
        </Link>
    )
}

export default SidebarLink