import createRouter, { Route as BaseRoute } from 'router5';

export enum Route {
  Home = 'home',
  WeaponGenerator = 'weaponGenerator',
}

export interface AppRoute extends BaseRoute {
  name: Route;
}

const routes = [
  { name: Route.Home, path: '/' },
  { name: Route.WeaponGenerator, path: '/weapons/generate' }
];

export const router = createRouter(routes, { allowNotFound: true });