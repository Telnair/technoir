import { Container } from '@material-ui/core';
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

  let content = null;

  switch (route.name) {
    case Route.Home:
      content = <Home />;
      break;
    case Route.WeaponGenerator:
      // @todo: weapon generator page
      content = <h1>Weapon Generator</h1>;
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