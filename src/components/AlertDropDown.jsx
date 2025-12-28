import React from 'react';
import styled from '@emotion/styled';
import { Alerts, DontShowAgain } from '../lib/store';
import { removeAlertById, clearAlerts } from '../lib/alerts';
import {
  FaChevronLeft,
  FaChevronRight,
  FaCopy,
  FaTimes,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaCheckCircle,
} from 'react-icons/fa';
import { Text } from './ui/Typography';
import { useResponsiveSizes } from '../hooks/useScreenSize';

// Styled Components
const AlertContainer = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 9999;
  width: 100vw;
  max-height: calc(25vh + 1em);
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 0 0 0.5em 0.5em;
  padding: 0.5em;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  color: black;
  box-sizing: border-box;

  @media (min-width: 880px) {
    width: 30em;
    max-height: calc(20vh + 1.5em);
  }

  @media (min-width: 1172px) {
    max-height: calc(25vh + 1.5em);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 2em;
  padding-right: 2em;
  box-sizing: border-box;
`;

const HeaderText = styled(Text)`
  font-weight: bold;
  margin: 0 0.5em 0.5em 0;
  color: black;
  
  @media (min-width: 880px) {
    margin: 0 0.75em 0.75em 0;
  }
`;

const ScrollArea = styled.div`
  overflow-y: auto;
  max-height: calc(20vh - 4em);
  border-radius: 0.5em;
  background-color: ${(props) => (props.isError ? '#EF9A9A' : 'transparent')};
  padding: 0.25em 0.5em;
  position: relative;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #E57373;
    border-radius: 24px;
  }
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25em;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.2s;
  font-size: 1em;
  color: inherit;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  right: 0.25em;
  top: 0.25em;
`;

const CopyButton = styled(IconButton)`
  position: absolute;
  right: 0.125em;
  top: 3em; 
  z-index: 1;
`;

const NavContainer = styled.div`
  margin-top: 0.5em;
  min-height: 2em;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;

const FooterText = styled(Text)`
  font-size: 0.875rem;
  color: black;
  margin: 0;
`;

const ClearAllButton = styled.button`
  background: transparent;
  border: none;
  font-size: 0.75rem;
  opacity: 0.75;
  cursor: pointer;
  position: absolute;
  left: 0.75em;
  bottom: 0.375em;
  color: black;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;

const DontShowCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25em;
  position: absolute;
  right: 0.75em;
  bottom: 0.375em;
  font-size: 0.75rem;
`;

const StyledInput = styled.input`
  accent-color: ${(props) => props.accentColor};
  cursor: pointer;
`;

const AlertIconWrapper = styled.div`
  position: absolute;
  left: 0.5em;
  top: 0.5em;
  font-size: 1.5em;
  color: ${(props) => props.color};
`;

const statusConfig = {
  error: {
    bg: '#EF9A9A', // Red 200 equivalent
    border: 'red',
    iconColor: '#C62828',
    Icon: FaExclamationCircle,
  },
  warning: {
    bg: '#FFF59D', // Yellow 200
    border: '#FBC02D',
    iconColor: '#F9A825',
    Icon: FaExclamationTriangle,
  },
  info: {
    bg: '#90CAF9', // Blue 200
    border: '#1E88E5',
    iconColor: '#1565C0',
    Icon: FaInfoCircle,
  },
  success: {
    bg: '#A5D6A7', // Green 200
    border: '#43A047',
    iconColor: '#2E7D32',
    Icon: FaCheckCircle,
  },
};

const AlertDropDown = () => {
  const [alerts] = Alerts.useState();
  const [dontShowAgainList, setDontShowAgainList] = DontShowAgain.useState();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [copyLabel, setCopyLabel] = React.useState('Copy to clipboard');
  const [isChecked, setIsChecked] = React.useState(false);
  
  const { respMD, respSM } = useResponsiveSizes();

  React.useEffect(() => {
    if (currentIndex >= alerts.length && alerts.length > 0) {
      setCurrentIndex(alerts.length - 1);
    }
  }, [alerts.length, currentIndex]);

  if (!alerts.length) {
    return null;
  }

  const currentAlert = alerts[currentIndex];
  const totalAlerts = alerts.length;

  const navigateNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalAlerts);
  };

  const navigatePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalAlerts) % totalAlerts);
  };

  const handleDontShowAgain = (id) => {
    const newList = [...(dontShowAgainList || []), id];
    setDontShowAgainList(newList);
    localStorage.setItem('DontShowAgain', JSON.stringify(newList));
  };

  const handleRemoveAlert = () => {
    setIsChecked(false);
    if (isChecked) {
      handleDontShowAgain(currentAlert.id);
    }
    removeAlertById(
      currentAlert.id,
      dontShowAgainList.includes(currentAlert.id)
    );
    if (currentIndex >= alerts.length - 1) {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }
  };

  const handleCopy = async () => {
    try {
      const textToCopy = `${currentAlert.source}\n${currentAlert.content}`;
      await navigator.clipboard.writeText(textToCopy);
      setCopyLabel('Copied!');
      setTimeout(() => setCopyLabel('Copy to clipboard'), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const status = statusConfig[currentAlert.type] || statusConfig.error;
  const { bg, border, iconColor, Icon } = status;

  return (
    <AlertContainer bgColor={bg} borderColor={border}>
      <AlertIconWrapper color={iconColor}>
        <Icon />
      </AlertIconWrapper>
      
      <CloseButton onClick={handleRemoveAlert} aria-label="Close alert">
        <FaTimes />
      </CloseButton>

      <ContentWrapper>
        <div style={{ position: 'relative' }}>
          <HeaderText fontSize={respMD}>
            {currentAlert.source}
          </HeaderText>
          
          <ScrollArea isError={currentAlert.type === 'error'}>
            {currentAlert.type === 'error' && (
              <CopyButton
                onClick={handleCopy}
                aria-label={copyLabel}
                title={copyLabel}
              >
                <FaCopy />
              </CopyButton>
            )}
            <Text fontSize={respSM} color="black">
              {currentAlert.content}
            </Text>
          </ScrollArea>
        </div>

        <NavContainer>
          <IconButton onClick={navigatePrev} disabled={totalAlerts <= 1}>
            <FaChevronLeft />
          </IconButton>
          <FooterText>
            {currentIndex + 1}/{totalAlerts}
          </FooterText>
          <IconButton onClick={navigateNext} disabled={totalAlerts <= 1}>
            <FaChevronRight />
          </IconButton>
        </NavContainer>
      </ContentWrapper>

      <ClearAllButton onClick={clearAlerts}>
        clear all
      </ClearAllButton>

      <DontShowCheck>
        <StyledInput
          type="checkbox"
          checked={isChecked}
          onChange={handleCheck}
          accentColor={border}
          id="dont-show-checkbox"
        />
        <label htmlFor="dont-show-checkbox" style={{ cursor: 'pointer', color: 'black' }}>
            don't show again
        </label>
      </DontShowCheck>
    </AlertContainer>
  );
};

export default AlertDropDown;