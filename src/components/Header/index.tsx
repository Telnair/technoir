import React from 'react';
import { AppBar, Box, Grid, Toolbar } from '@material-ui/core';
import { Route } from '../../store/routes';
import { NavigationLink } from './NavigationLink';

interface HeaderProps {
  activeRoute: Route;
}

const NAVIGATION_LINKS: Array<{ routeName: Route, label: string }> = [
  { routeName: Route.Home, label: 'Home' },
  { routeName: Route.Characters, label: 'Characters' },
  { routeName: Route.Weapons, label: 'Weapons' },
  { routeName: Route.Library, label: 'Library' },
];

export const Header: React.FC<HeaderProps> = (props) => {
  const { activeRoute } = props;

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container justify="space-around">
            {NAVIGATION_LINKS.map(link => (
              <NavigationLink
                key={link.routeName}
                routeName={link.routeName}
                isActive={link.routeName === activeRoute}
              >
                {link.label}
              </NavigationLink>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
      <Box height={100} />
    </>
  );
};