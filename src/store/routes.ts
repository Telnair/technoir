import createRouter, { Route as BaseRoute } from 'router5';

export enum Route {
  Home = 'home',
  Weapons = 'weapons',
  Characters = 'characters',
  Library = 'library',
  Weapon = 'weapons.weapon',
  Character = 'characters.character',
  Article = 'library.article',
  NewWeapon = 'weapons.new',
  NewCharacter = 'characters.new',
  NewArticle = 'library.new',
  Ability = 'abilities.ability',
  Abilities = 'abilities',
  NewAbility = 'abilities.new',
  Battle = 'battle',
}

export interface RouteParams {
  id?: string;
}

export interface AppRoute extends BaseRoute {
  name: Route;
  params: RouteParams;
}

const routes = [
  { name: Route.Home, path: '/' },
  { name: Route.Library, path: '/library' },
  { name: Route.Article, path: '/:id' },
  { name: Route.NewArticle, path: '/new' },
  { name: Route.Weapons, path: '/weapons' },
  { name: Route.Weapon, path: '/:id' },
  { name: Route.NewWeapon, path: '/new' },
  { name: Route.Characters, path: '/characters' },
  { name: Route.Character, path: '/:id' },
  { name: Route.NewCharacter, path: '/new' },
  { name: Route.Abilities, path: '/abilities' },
  { name: Route.Ability, path: '/:id' },
  { name: Route.NewAbility, path: '/new' },
  { name: Route.Battle, path: '/battle' }
];

export const router = createRouter(routes, { allowNotFound: true });