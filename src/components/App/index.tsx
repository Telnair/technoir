import { Container, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { AppRoute, Route } from '../../store/routes';
import { routeSelector } from '../../store/state/selectors';
import { NAVIGATION_HEIGHT } from '../constants/layout';
import { Navigation } from '../Navigation';
import { Home } from '../Home';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingBottom: NAVIGATION_HEIGHT * 2,
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(2),
    }
  },
}));

interface AppProps {
  route: AppRoute;
}

const App: React.FC<AppProps> = (props) => {
  const { route } = props;

  const styles = useStyles();

  let content = null;

  switch (route.name) {
    case Route.Home:
      content = <Home />;
      break;
    case Route.Weapons:
      content = <Typography variant="h1" align="center">Weapons</Typography>;
      break;
    case Route.Characters:
      content = <Typography variant="h1" align="center">Characters</Typography>;
      break;
    case Route.Library:
      content = <Typography variant="h1" align="center">Library</Typography>;
      break;
    case Route.Weapon:
      content = <Typography variant="h1" align="center">Weapon {route.params.id}</Typography>;
      break;
    case Route.Character:
      content = <Typography variant="h1" align="center">Character {route.params.id}</Typography>;
      break;
    case Route.Article:
      content = <Typography variant="h1" align="center">Article {route.params.id}</Typography>;
      break;
    case Route.NewWeapon:
      content = <Typography variant="h1" align="center">New Weapon</Typography>;
      break;
    case Route.NewCharacter:
      content = <Typography variant="h1" align="center">New Character</Typography>;
      break;
    case Route.NewArticle:
      content = <Typography variant="h1" align="center">New Article</Typography>;
      break;
  }

  return (
    <main>
      <Navigation activeRoute={route.name} />
      <Container maxWidth="lg" className={styles.container}>{content}</Container>
    </main>
  );
};

const mapStateToProps = (state: RootState) => ({
  route: routeSelector(state),
});

export default connect(mapStateToProps)(App);