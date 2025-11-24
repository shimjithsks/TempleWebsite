import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#E63946' }, // rose red
    secondary: { main: '#ffffff' }, // white
    background: { default: '#fff' },
    text: { primary: '#222' }
  },
  typography: {
    fontFamily: "'Jost', 'Roboto', 'Noto Sans Malayalam', sans-serif"
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: { backgroundColor: '#E63946' }
      }
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#E63946',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#d62839'
          }
        }
      }
    }
  }
});

export default theme;
