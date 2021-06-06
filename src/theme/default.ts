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
  lineHeight: '56px',
  fontWeight: 500,
  fontFamily: 'Major Mono Display',
  marginBottom: defaultTheme.spacing(4),
  [defaultTheme.breakpoints.down('sm')]: {
    fontSize: 32,
    lineHeight: '38px',
  },
};

defaultTheme.typography.h2 = {
  fontSize: 32,
  lineHeight: '38px',
  fontWeight: 500,
  fontFamily: 'Major Mono Display',
  [defaultTheme.breakpoints.down('sm')]: {
    fontSize: 21,
    lineHeight: '27px',
  },
};

defaultTheme.typography.h3 = {
  fontSize: 24,
  lineHeight: '31px',
  fontWeight: 500,
  fontFamily: 'Major Mono Display',
  [defaultTheme.breakpoints.down('sm')]: {
    fontSize: 18,
    lineHeight: '25px',
  },
};

defaultTheme.typography.body1 = {
  fontSize: 16,
  lineHeight: '22px',
  fontWeight: 400,
  [defaultTheme.breakpoints.down('sm')]: {
    fontSize: 13,
    lineHeight: '20px',
  },
};

defaultTheme.typography.body2 = {
  fontSize: 18,
  lineHeight: '25px',
  fontWeight: 500,
  [defaultTheme.breakpoints.down('sm')]: {
    fontSize: 16,
    lineHeight: '22px',
  },
};