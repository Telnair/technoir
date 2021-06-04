import { createMuiTheme } from '@material-ui/core';

export const defaultTheme = createMuiTheme({
  spacing: 8,
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: 48,
      fontWeight: 500,
    },
    h2: {
      fontSize: 32,
      fontWeight: 500,
    },
    h3: {
      fontSize: 24,
      fontWeight: 500,
    },
    body1: {
      fontSize: 18,
      fontWeight: 400,
    },
    body2: {
      fontSize: 18,
      fontWeight: 500,
    }
  },
  palette: {
    primary: {
      light: '#CC527A',
      main: '#E8175D',
      dark: '#E8175D',
      contrastText: '#021622',
    },
    secondary: {
      light: '#A8A7A7',
      main: '#474747',
      dark: '#363636',
    },
  }
});