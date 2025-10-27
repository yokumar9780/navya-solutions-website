import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0A2540',
    },
    secondary: {
      main: '#00AEEF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F6F9FC',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '9999px',
          fontWeight: 600,
          padding: '10px 32px',
        },
      },
    },
  },
});

// Additional color constants for styled-components
export const colors = {
  primary: '#0A2540',
  secondary: '#00AEEF',
  accent: '#00D4FF',
  light: '#F6F9FC',
  dark: '#1A1A1A',
};
