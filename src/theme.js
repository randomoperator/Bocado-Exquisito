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
    fontFamily: '"Roboto", sans-serif', // Specify your font here
    h1: {
      fontWeight: 700,
      color: '#003366', // Deep Blue
      textAlign: 'center',
      fontSize: '2.5rem', // Adjust for responsiveness
      '@media (max-width:600px)': {
        fontSize: '2rem', // Smaller size on small screens
      },
    },
    h2: {
      fontWeight: 700,
      color: '#003366', // Deep Blue
      textAlign: 'center',
      fontSize: '2rem', // Adjust for responsiveness
      '@media (max-width:600px)': {
        fontSize: '1.5rem', // Smaller size on small screens
      },
    },
    body1: {
      color: '#333333', // Charcoal Grey
      textAlign: 'center',
      fontSize: '1rem', // Adjust for responsiveness
      '@media (max-width:600px)': {
        fontSize: '0.875rem', // Smaller size on small screens
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: '2px solid #000000', // Black border
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Depth effect
          '&:hover': {
            border: '2px solid #000000', // Black border on hover
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Deeper depth effect on hover
          },
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
    MuiCard: {
      styleOverrides: {
        root: {
          border: '2px solid #000000', // Black border
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Depth effect
          '&:hover': {
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Deeper depth effect on hover
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF', // White
          border: '2px solid #000000', // Black border
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Depth effect
          '&:hover': {
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Deeper depth effect on hover
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 16px', // Ensure padding is consistent
          maxWidth: '100%', // Ensure container doesn't exceed viewport width
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;