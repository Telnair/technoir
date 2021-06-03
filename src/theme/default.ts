import { createMuiTheme } from '@material-ui/core';

export const defaultTheme = createMuiTheme({
  spacing: 8,
  typography: {
    fontFamily: 'Roboto',
    fontSize: 18,
    h1: {
      fontSize: 48,
    },
    h2: {
      fontSize: 32,
    },
    h3: {
      fontSize: 24,
    }
  },
  palette: {
    primary: {
      light: '#CC527A',
      main: '#E8175D',
      contrastText: '#021622',
    },
    secondary: {
      light: '#A8A7A7',
      main: '#474747',
      dark: '#363636',
    },
  }
});