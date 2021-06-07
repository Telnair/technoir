import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Route } from '../../store/routes';
import { NAVIGATION_HEIGHT } from '../constants/layout';
import { NavigationLink } from './NavigationLink';

import { ReactComponent as HomeIcon } from '../../assets/svg/airtight-hatch.svg';
import { ReactComponent as CharacterIcon } from '../../assets/svg/skills.svg';
import { ReactComponent as WeaponsIcon } from '../../assets/svg/steyr-aug.svg';
import { ReactComponent as AbilitiesIcon } from '../../assets/svg/charged-arrow.svg';
import { ReactComponent as LibraryIcon } from '../../assets/svg/bookshelf.svg';
import { ReactComponent as BattleIcon } from '../../assets/svg/empty-chessboard.svg';
import { useIsMobile } from '../../hooks/useIsMobile';

const useStyles = makeStyles((theme: Theme) => ({
  nav: {
    height: NAVIGATION_HEIGHT,
    background: theme.palette.primary.main,
    padding: theme.spacing(0, 3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      top: 0,
      position: 'sticky',
      marginBottom: theme.spacing(4),
      boxShadow: `0 0 15px 0 ${theme.palette.primary.main}`,
      '& p:not(:last-of-type)': {
        marginRight: theme.spacing(6),
      },
    },
    [theme.breakpoints.down('sm')]: {
      bottom: 0,
      left: 0,
      right: 0,
      position: 'fixed',
      boxShadow: `0 0 30px 0 ${theme.palette.primary.main}`,
      justifyContent: 'space-between',
    },
  },
}));

interface NavigationProps {
  activeRoute: Route;
}

const NAVIGATION_LINKS: Array<{ routeName: Route, label: string, icon: React.ReactNode }> = [
  { routeName: Route.Home, label: 'Home', icon: <HomeIcon /> },
  { routeName: Route.Characters, label: 'Characters', icon: <CharacterIcon /> },
  { routeName: Route.Abilities, label: 'Abilities', icon: <AbilitiesIcon /> },
  { routeName: Route.Weapons, label: 'Weapons', icon: <WeaponsIcon /> },
  { routeName: Route.Library, label: 'Library', icon: <LibraryIcon /> },
  { routeName: Route.Battle, label: 'Battle', icon: <BattleIcon /> },
];

export const Navigation: React.FC<NavigationProps> = (props) => {
  const { activeRoute } = props;

  const styles = useStyles();
  const isMobile = useIsMobile();

  return (
    <nav className={styles.nav}>
      {NAVIGATION_LINKS.map(link => (
        <NavigationLink
          key={link.routeName}
          routeName={link.routeName}
          isActive={link.routeName === activeRoute}
          title={link.label}
        >
          {link.icon}
          {isMobile ? null : link.label}
        </NavigationLink>
      ))}
    </nav>
  );
};