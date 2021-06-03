import { Box } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { AppRoute, Route } from '../../store/routes';
import { routeSelector } from '../../store/state/selectors';

interface AppProps {
  route: AppRoute;
}

const App: React.FC<AppProps> = (props) => {
  const { route } = props;

  let content = null;

  switch (route.name) {
    case Route.Home:
      content = <h1>Home</h1>;
      break;
    case Route.WeaponGenerator:
      content = <h1>Weapon Generator</h1>
      break;
  }

  return (
    <Box>
      {content}
    </Box>
  );
}

const mapStateToProps = (state: RootState) => ({
  route: routeSelector(state),
})

export default connect(mapStateToProps)(App);