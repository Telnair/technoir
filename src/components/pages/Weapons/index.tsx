import { Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store';
import { Route } from '../../../store/routes';
import { weaponsSelector } from '../../../store/state/domainData/selectors';
import { Weapon } from '../../../utils/entities';
import { List } from '../../List';

interface WeaponsProps {
  data: Weapon[];
}

const Weapons: React.FC<WeaponsProps> = (props) => {
  const { data } = props;

  return (
    <>
      <Typography variant="h1" align="center">Weapons</Typography>
      <List data={data} createRoute={Route.NewWeapon} />
    </>
  );
};

const mapStateToProps = ((state: RootState) => ({
  data: weaponsSelector(state),
}));

export default connect(mapStateToProps)(Weapons);