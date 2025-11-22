import styled from '@emotion/styled';
import { useScreenSize, useResponsiveSizes } from '../hooks/useScreenSize';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isLandscape ? 'column' : 'row')};
  gap: ${(props) => props.gap};
  height: 100%;
  width: 100%;
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.colors['background-card']};
  padding: ${(props) => props.p};
  border-radius: ${(props) => props.borderRadius};
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: ${(props) => (props.isLandscape ? 'column' : 'row')};
  align-items: center;
  gap: ${(props) => props.gap};
  ${(props) => !props.isLandscape && `
    width: 100%;
    justify-content: space-between;
  `}
`;

const StyledImage = styled.img`
    width: ${(props) => props.boxSize};
    height: ${(props) => props.boxSize};
`;

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${(props) => props.gap};
`;

const StyledLink = styled(RouterLink)`
    color: ${(props) => props.theme.colors['text-primary']};
    text-decoration: none;
    font-size: ${(props) => props.fontSize};
    padding: 0.5rem 0;
    &:hover {
        color: ${(props) => props.theme.colors.brand.primary};
    }
`;

const StyledSelect = styled.select`
    /* Reset */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    /* Custom Styles */
    background-color: ${(props) => props.theme.colors['background-card']};
    color: ${(props) => props.theme.colors['text-primary']};
    border: 1px solid ${(props) => props.theme.colors['border-primary']};
    border-radius: ${(props) => props.borderRadius};
    padding: 0.5rem;
    padding-right: 2rem; /* Make space for arrow */
    font-size: ${(props) => props.fontSize};
    width: 150px;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    /* Custom Arrow using an inlined SVG */
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23A0AEC0"><path d="M7 10l5 5 5-5H7z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 0.5rem center;
    background-size: 1.5em;

    &:hover {
        border-color: ${(props) => props.theme.colors.brand.primary};
    }

    &:focus {
        outline: none;
        border-color: ${(props) => props.theme.colors.brand.primary};
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.brand.primary}33; /* Add a subtle glow */
    }
`;

const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
];

const Sidebar = () => {
  const { isLandscape } = useScreenSize();
  const { respXS, respMD, respXL } = useResponsiveSizes();
  const navigate = useNavigate();

  const handleNavigation = (event) => {
    navigate(event.target.value);
  };

  return (
    <FlexContainer isLandscape={isLandscape} gap={respXS}>
      <Card id="sidebar-card" p={respXS} borderRadius={respXS} isLandscape={isLandscape} gap={respXS}>
        <StyledImage src={'/Logo.svg'} alt="Logo" boxSize={respXL} />
        {isLandscape ? (
            <NavContainer gap={respXS}>
                {links.map(link => (
                    <StyledLink key={link.to} to={link.to} fontSize={respMD}>
                        {link.label}
                    </StyledLink>
                ))}
            </NavContainer>
        ) : (
            <StyledSelect onChange={handleNavigation} borderRadius={respXS} fontSize={respMD}>
                {links.map(link => (
                    <option key={link.to} value={link.to}>
                        {link.label}
                    </option>
                ))}
            </StyledSelect>
        )}
      </Card>
    </FlexContainer>
  );
};

export default Sidebar;