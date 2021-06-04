import React from 'react';
import { AppBar, Box, Grid, Toolbar, useMediaQuery } from '@material-ui/core';
import { Route } from '../../store/routes';
import { NavigationLink } from './NavigationLink';
import { defaultTheme } from '../../theme/default';

interface HeaderProps {
  activeRoute: Route;
}

const NAVIGATION_LINKS: Array<{ routeName: Route, label: string }> = [
  { routeName: Route.Home, label: 'Home' },
  { routeName: Route.Characters, label: 'Characters' },
  { routeName: Route.Weapons, label: 'Weapons' },
  { routeName: Route.Library, label: 'Library' },
];

const TOP_OFFSET = {
  desktop: 120,
  mobile: 80,
};

export const Header: React.FC<HeaderProps> = (props) => {
  const { activeRoute } = props;
  const isMobile = useMediaQuery(defaultTheme.breakpoints.down('sm'));

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
      <Box height={isMobile ? TOP_OFFSET.mobile : TOP_OFFSET.desktop} />
    </>
  );
};