import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
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
      light: 'yellow.500',
      dark: 'yellow.300',
    },
    moon: {
      light: 'purple.700',
      dark: 'purple.300',
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
}

const semanticTokens = {
  colors: {
    'background-body': {
      default: colors.ui.background.light,
      _dark: colors.ui.background.dark,
    },
    'background-card': {
      default: colors.ui.card.light,
      _dark: colors.ui.card.dark,
    },
    'text-primary': {
      default: colors.text.primary.light,
      _dark: colors.text.primary.dark,
    },
    'text-secondary': {
      default: colors.text.secondary.light,
      _dark: colors.text.secondary.dark,
    },
    'border-primary': {
        default: colors.ui.border.light,
        _dark: colors.ui.border.dark,
    },
    'sun': {
      default: colors.ui.sun.light,
      _dark: colors.ui.sun.dark,
    },
    'moon': {
      default: colors.ui.moon.light,
      _dark: colors.ui.moon.dark,
    },
  },
}

const theme = extendTheme({
  config,
  colors,
  semanticTokens,
  styles: {
    global: {
      '::-webkit-scrollbar': {
        width: '8px',
      },
      '::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#A0AEC0',
        borderRadius: 'full',
      },
      '::-webkit-scrollbar-button': {
        display: 'none',
      },
    },
  },
})

export default theme
