import styled from '@emotion/styled';
import { useColorMode } from '../context/ThemeContext';
import { useTheme as useEmotionTheme } from '@emotion/react';
import { WiDaySunny, WiMoonAltWaningCrescent6 } from 'react-icons/wi';
import { useResponsiveSizes } from '../hooks/useScreenSize';

const FooterContainer = styled.div`
  position: relative;
  padding: 0 ${(props) => props.respXS};
  background-color: ${(props) =>
    props.theme.colorMode === 'light'
      ? 'rgba(255, 255, 255, 0.5)'
      : 'rgba(26, 32, 44, 0.5)'};
  width: 100%;
  border-radius: ${(props) => props.respXS};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  transition: background-color 0.3s ease;
`;

const HStack = styled.div`
  display: flex;
  gap: ${(props) => props.gap};
  align-items: center;
`;

const Link = styled.a`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.colors['text-primary']};
  transition: color 0.3s ease;
`;

const Text = styled.span`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.colors['text-primary']};
  transition: color 0.3s ease;
`;

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #2196f3;
  }
  &:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
  &:checked + span:before {
    transform: translateX(14px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: '';
    height: 12px;
    width: 12px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { respXS, respMD } = useResponsiveSizes();
  const theme = useEmotionTheme();

  return (
    <FooterContainer respXS={respXS}>
      <HStack gap={respXS}>
        <Link
          fontSize={respMD}
          href="https://github.com/alexandrite22"
          isExternal
        >
          GitHub
        </Link>
        <Text fontSize={respMD}>|</Text>
        <Link
          fontSize={respMD}
          href="https://linkedin.com/in/alexander-hewson"
          isExternal
        >
          LinkedIn
        </Link>
        <Text fontSize={respMD}>|</Text>
        <Link
          fontSize={respMD}
          href="https://docs.google.com/document/d/1uMrk-2FHum0oQvJ9bVxw5zieTHCC0Xf7VmDJUjElTWQ/edit?usp=sharing"
          isExternal
        >
          Resume
        </Link>
      </HStack>
      <HStack
        style={{ position: 'absolute', right: respXS }}
        gap={respXS}
      >
        <WiDaySunny color={theme.colors.sun} size={respMD} />
        <SwitchContainer>
          <SwitchInput
            type="checkbox"
            checked={colorMode === 'dark'}
            onChange={toggleColorMode}
          />
          <Slider />
        </SwitchContainer>
        <WiMoonAltWaningCrescent6
          color={theme.colors.moon}
          size={respMD}
        />
      </HStack>
    </FooterContainer>
  );
}

export default Footer;
