import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { AppRoute, Route } from '../../store/routes';
import { routeSelector } from '../../store/state/selectors';
import { Header } from '../Header';
import { Home } from '../Home';

interface AppProps {
  route: AppRoute;
}

const App: React.FC<AppProps> = (props) => {
  const { route } = props;

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
      <Header activeRoute={route.name} />
      <Container maxWidth="lg">{content}</Container>
    </main>
  );
};

const mapStateToProps = (state: RootState) => ({
  route: routeSelector(state),
});

export default connect(mapStateToProps)(App);