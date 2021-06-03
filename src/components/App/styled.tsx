import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const HEADER_HEIGHT = 56;

export const useStyles = makeStyles((theme: Theme) => ({
  header: {
    height: HEADER_HEIGHT,
    background: theme.palette.primary.light,
    borderBottom: `5px solid ${theme.palette.primary.main}`,
  },
  content: {
    background: 'rgba(0,0,0,.2)',
    padding: `${theme.spacing(3)}px ${theme.spacing(4)}px`,
    textAlign: 'center',
  },
}));