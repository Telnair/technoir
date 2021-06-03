import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { AppRoute, Route } from '../../store/routes';
import { routeSelector } from '../../store/state/selectors';
import { Home } from '../Home';
import { useStyles } from './styled';

interface AppProps {
  route: AppRoute;
}

const App: React.FC<AppProps> = (props) => {
  const { route } = props;

  const styles = useStyles();

  let content: React.ReactNode = <Typography variant="h1">Not Found</Typography>;

  switch (route.name) {
    case Route.Home:
      content = <Home />;
      break;
    case Route.Weapons:
      content = <Typography variant="h1">Weapons</Typography>;
      break;
    case Route.Characters:
      content = <Typography variant="h1">Characters</Typography>;
      break;
    case Route.Library:
      content = <Typography variant="h1">Library</Typography>;
      break;
    case Route.Weapon:
      content = <Typography variant="h1">Weapon {route.params.id}</Typography>;
      break;
    case Route.Character:
      content = <Typography variant="h1">Character {route.params.id}</Typography>;
      break;
    case Route.Article:
      content = <Typography variant="h1">Article {route.params.id}</Typography>;
      break;
    case Route.NewWeapon:
      content = <Typography variant="h1">New Weapon</Typography>;
      break;
    case Route.NewCharacter:
      content = <Typography variant="h1">New Character</Typography>;
      break;
    case Route.NewArticle:
      content = <Typography variant="h1">New Article</Typography>;
      break;
  }

  return (
    <main>
      <header className={styles.header}>
        {/* @todo: navigation */}
      </header>
      <Container maxWidth="lg" className={styles.content}>
        {content}
      </Container>
    </main>
  );
};

const mapStateToProps = (state: RootState) => ({
  route: routeSelector(state),
});

export default connect(mapStateToProps)(App);