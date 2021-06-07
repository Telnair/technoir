import { Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Route } from '../../store/routes';
import { Link } from '../Link';

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    '& svg': {
      width: 30,
      height: 30,
    },
    '& svg path': {
      transition: 'fill .2s',
      fill: (props: Pick<NavigationLinkProps, 'isActive'>) => props.isActive
        ? theme.palette.common.white
        : theme.palette.primary.contrastText
    },
    '&:hover svg path': {
      fill: theme.palette.common.white,
    },
    [theme.breakpoints.down('sm')]: {
      height: 30,
      width: 30,
    },
    [theme.breakpoints.up('sm')]: {
      '& a': {
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          marginRight: theme.spacing(1),
        }
      },
      '&:hover': {
        color: theme.palette.common.white,
      },
      transition: 'color .2s',
      color: (props: Pick<NavigationLinkProps, 'isActive'>) => props.isActive
        ? theme.palette.common.white
        : theme.palette.primary.contrastText
    }
  },
}));

interface NavigationLinkProps {
  isActive: boolean;
  routeName: Route;
  title: string;
}

export const NavigationLink: React.FC<NavigationLinkProps> = (props) => {
  const { routeName, children, isActive, title } = props;
  const styles = useStyles({ isActive });

  return (
    <Typography variant="body2" className={styles.wrapper} title={title}>
      <Link routeName={routeName}>{children}</Link>
    </Typography>
  );
};