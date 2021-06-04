import { createMuiTheme } from '@material-ui/core';

export const defaultTheme = createMuiTheme({
  spacing: 8,
  typography: {
    fontFamily: 'Roboto',
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

defaultTheme.typography.h1 = {
  fontSize: 48,
  fontWeight: 500,
  [defaultTheme.breakpoints.down('sm')]: {
    fontSize: 32,
  },
};

defaultTheme.typography.h2 = {
  fontSize: 32,
  fontWeight: 500,
  [defaultTheme.breakpoints.down('sm')]: {
    fontSize: 21,
  },
};

defaultTheme.typography.h3 = {
  fontSize: 24,
  fontWeight: 500,
  [defaultTheme.breakpoints.down('sm')]: {
    fontSize: 18,
  },
};

defaultTheme.typography.body1 = {
  fontSize: 16,
  fontWeight: 400,
  [defaultTheme.breakpoints.down('sm')]: {
    fontSize: 13,
  },
};

defaultTheme.typography.body2 = {
  fontSize: 18,
  fontWeight: 500,
  [defaultTheme.breakpoints.down('sm')]: {
    fontSize: 16,
  },
};