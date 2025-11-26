import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

const theme = createTheme({
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    background: { default: colors.background },
    text: { primary: colors.textPrimary }
  },
  typography: {
    fontFamily: "'Jost', 'Roboto', 'Noto Sans Malayalam', sans-serif"
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: { backgroundColor: colors.primary }
      }
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: colors.primary,
          color: colors.white,
          '&:hover': {
            backgroundColor: colors.primaryDark
          }
        }
      }
    }
  }
});

export default theme;
