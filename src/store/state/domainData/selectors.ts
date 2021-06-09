import { flow } from 'lodash';
import { RootState } from '../..';

export const weaponsSelector = flow((state: RootState) => state.domainData.weapons);
export const abilitiesSelector = flow((state: RootState) => state.domainData.abilities);
export const charactersSelector = flow((state: RootState) => state.domainData.characters);
export const articlesSelector = flow((state: RootState) => state.domainData.articles);