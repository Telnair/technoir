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
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(6),
      }
    },
    [theme.breakpoints.up('sm')]: {
      top: 0,
      position: 'sticky',
      marginBottom: theme.spacing(4),
      boxShadow: `0 0 15px 0 ${theme.palette.primary.main}`,
    },
    [theme.breakpoints.down('sm')]: {
      bottom: 0,
      left: 0,
      right: 0,
      position: 'fixed',
      boxShadow: `0 0 30px 0 ${theme.palette.primary.main}`,
    },
  },
}));

interface NavigationProps {
  activeRoute: Route;
}

const NAVIGATION_LINKS: Array<{ routeName: Route, label: string }> = [
  { routeName: Route.Characters, label: 'People' },
  { routeName: Route.Abilities, label: 'Abilities' },
  { routeName: Route.Weapons, label: 'Weapons' },
  { routeName: Route.Library, label: 'Library' },
  { routeName: Route.Battle, label: 'Battle' },
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