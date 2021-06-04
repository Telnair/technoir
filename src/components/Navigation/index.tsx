import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Route } from '../../store/routes';
import { NAVIGATION_HEIGHT } from '../constants/layout';
import { NavigationLink } from './NavigationLink';

const useStyles = makeStyles((theme: Theme) => ({
  nav: {
    height: NAVIGATION_HEIGHT,
    background: theme.palette.primary.main,
    padding: theme.spacing(0, 3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > p:not(:last-of-type)': {
      marginRight: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(6),
      }
    },
    [theme.breakpoints.up('sm')]: {
      top: 0,
      position: 'sticky',
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      bottom: 0,
      left: 0,
      right: 0,
      position: 'fixed',
    },
  },
}));

interface NavigationProps {
  activeRoute: Route;
}

const NAVIGATION_LINKS: Array<{ routeName: Route, label: string }> = [
  { routeName: Route.Home, label: 'Home' },
  { routeName: Route.Characters, label: 'Characters' },
  { routeName: Route.Weapons, label: 'Weapons' },
  { routeName: Route.Library, label: 'Library' },
];

export const Navigation: React.FC<NavigationProps> = (props) => {
  const { activeRoute } = props;

  const styles = useStyles();

  return (
    <nav className={styles.nav}>
      {NAVIGATION_LINKS.map(link => (
        <NavigationLink
          key={link.routeName}
          routeName={link.routeName}
          isActive={link.routeName === activeRoute}
        >
          {link.label}
        </NavigationLink>
      ))}
    </nav>
  );
};