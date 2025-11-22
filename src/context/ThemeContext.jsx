import React, { createContext, useState, useContext, useMemo } from 'react';
import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';
import { theme as appTheme } from '../theme';

const ThemeContext = createContext();

export const useColorMode = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState('light');

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => {
    const semanticColors = appTheme.semanticColors(colorMode);
    return {
      ...appTheme,
      colors: {
        ...appTheme.colors,
        ...semanticColors,
      },
      colorMode,
      toggleColorMode,
    };
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
      <EmotionThemeProvider theme={theme}>
        <Global
          styles={{
            '*,\n*::before,\n*::after': {
              boxSizing: 'border-box',
            },
            'html, body': {
              margin: 0,
              padding: 0,
              height: '100%',
              width: '100%',
              overflow: 'hidden',
              fontFamily: '"Teachers", sans-serif',
            },
            body: {
              transition: 'background-color 0.3s ease, color 0.3s ease',
            },
            '::-webkit-scrollbar': {
              width: '8px',
            },
            '::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '::-webkit-scrollbar-thumb': {
              background: '#A0AEC0',
              borderRadius: '9999px',
            },
            '::-webkit-scrollbar-button': {
              display: 'none',
            },
          }}
        />
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
