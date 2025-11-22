export const theme = {
  colors: {
    brand: {
      primary: '#339AF0', // Blue 500
      secondary: '#228BE6', // Blue 600
    },
    ui: {
      background: {
        light: '#FFFFFF',
        dark: '#1A202C',
      },
      card: {
        light: '#F7FAFC',
        dark: '#2D3748',
      },
      border: {
        light: '#E2E8F0',
        dark: '#4A5568',
      },
      sun: {
        light: '#2D3748', // Near black for light mode
        dark: '#F7FAFC',  // Near white for dark mode
      },
      moon: {
        light: '#2D3748', // Near black for light mode
        dark: '#F7FAFC',  // Near white for dark mode
      },
    },
    text: {
      primary: {
        light: '#2D3748',
        dark: '#F7FAFC',
      },
      secondary: {
        light: '#718096',
        dark: '#A0AEC0',
      },
    },
  },
  semanticColors: (mode) => ({
    'background-body':
      mode === 'light'
        ? theme.colors.ui.background.light
        : theme.colors.ui.background.dark,
    'background-card':
      mode === 'light' ? theme.colors.ui.card.light : theme.colors.ui.card.dark,
    'text-primary':
      mode === 'light'
        ? theme.colors.text.primary.light
        : theme.colors.text.primary.dark,
    'text-secondary':
      mode === 'light'
        ? theme.colors.text.secondary.light
        : theme.colors.text.secondary.dark,
    'border-primary':
      mode === 'light'
        ? theme.colors.ui.border.light
        : theme.colors.ui.border.dark,
    sun:
      mode === 'light' ? theme.colors.ui.sun.light : theme.colors.ui.sun.dark,
    moon:
      mode === 'light' ? theme.colors.ui.moon.light : theme.colors.ui.moon.dark,
  }),
};
