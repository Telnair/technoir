import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { Ability, Article, Character, DataItem, Weapon } from '../../../utils/entities';

export type DomainDataField = 'weapons' | 'characters' | 'articles' | 'abilities';

interface DomainDataSlice {
  weapons: Weapon[] | null;
  characters: Character[] | null;
  abilities: Ability[] | null;
  articles: Article[] | null;
}

interface DataPayload {
  data: DataItem[];
  field: DomainDataField;
}

// @todo: refactor
export const domainDataSlice = createSlice<DomainDataSlice, SliceCaseReducers<DomainDataSlice>>({
  name: 'domainData',
  initialState: {
    weapons: null,
    characters: null,
    abilities: null,
    articles: null,
  },
  reducers: {
    setData: (state, action: PayloadAction<DataPayload>) => {
      switch (action.payload.field) {
        case 'weapons':
          state[action.payload.field] = action.payload.data as Weapon[];
          break;
        case 'abilities':
          state[action.payload.field] = action.payload.data as Ability[];
          break;
        case 'characters':
          state[action.payload.field] = action.payload.data as Character[];
          break;
        case 'articles':
          state[action.payload.field] = action.payload.data as Article[];
          break;
      }
    },
    resetData: (state, action: PayloadAction<DomainDataField>) => {
      state[action.payload] = null;
    },
  },
});

export const { setData, resetData } = domainDataSlice.actions;

export default domainDataSlice.reducer;