import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003366', // Deep Blue
    },
    secondary: {
      main: '#0033A0', // Royal Blue
    },
    background: {
      default: '#F5F5F5', // Light Grey
      paper: '#FFFFFF', // White
    },
    text: {
      primary: '#333333', // Charcoal Grey
      secondary: '#C0C0C0', // Silver
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
      color: '#003366', // Deep Blue
      textAlign: 'center',
    },
    h2: {
      fontWeight: 700,
      color: '#003366', // Deep Blue
      textAlign: 'center',
    },
    body1: {
      color: '#333333', // Charcoal Grey
      textAlign: 'center',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        containedPrimary: {
          backgroundColor: '#003366', // Deep Blue
          color: '#FFFFFF', // White
          '&:hover': {
            backgroundColor: '#002244', // Darker Blue
          },
        },
        containedSecondary: {
          backgroundColor: '#0033A0', // Royal Blue
          color: '#FFFFFF', // White
          '&:hover': {
            backgroundColor: '#002080', // Darker Royal Blue
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#003366', // Deep Blue
          color: '#FFFFFF', // White
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF', // White
        },
      },
    },
  },
});

export default theme;