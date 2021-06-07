import { Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store';
import { Route } from '../../../store/routes';
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

const mockWeapons: Weapon[] = [
  {
    id: 'test-pistol',
    name: 'Steet Rat Pistol',
    type: 'weapon',
    createdAt: new Date().toISOString(),
    strength: 4,
    attacks: 1,
    damage: 1,
    category: 'pistol',
    grade: 'common',
    abilities: [],
  },
  {
    id: 'test-rifle',
    name: 'Craft Rifle',
    type: 'weapon',
    createdAt: new Date().toISOString(),
    strength: 5,
    attacks: 3,
    damage: 1,
    category: 'rifle',
    grade: 'uncommon',
    abilities: [],
  },
  {
    id: 'test-sword',
    name: 'Excalibur',
    type: 'weapon',
    createdAt: new Date().toISOString(),
    strength: 'x2',
    attacks: 3,
    damage: 'D6+3',
    category: 'melee',
    grade: 'legendary',
    abilities: [],
  },
];

// @todo: update to selector and BE-based data
const mapStateToProps = ((state: RootState) => ({
  data: mockWeapons,
}));

export default connect(mapStateToProps)(Weapons);