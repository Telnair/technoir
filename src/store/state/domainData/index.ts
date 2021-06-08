import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { Ability, Article, Character, DataItem, Weapon } from '../../../utils/entities';

export type DomainDataField = 'weapons' | 'characters' | 'articles' | 'abilities';

interface DomainDataSlice {
  weapons: Weapon[];
  characters: Character[];
  abilities: Ability[];
  articles: Article[];
}

interface DataPayload {
  data: DataItem;
  field: DomainDataField;
}

export const domainDataSlice = createSlice<DomainDataSlice, SliceCaseReducers<DomainDataSlice>>({
  name: 'domainData',
  initialState: {
    weapons: [],
    characters: [],
    abilities: [],
    articles: [],
  },
  reducers: {
    setData: (state, action: PayloadAction<DataPayload>) => {
      // refactor
      switch (action.payload.field) {
        case 'weapons':
          state[action.payload.field] = action.payload.data as unknown as Weapon[];
          break;
        case 'abilities':
          state[action.payload.field] = action.payload.data as unknown as Ability[];
          break;
        case 'characters':
          state[action.payload.field] = action.payload.data as unknown as Character[];
          break;
        case 'articles':
          state[action.payload.field] = action.payload.data as unknown as Article[];
          break;
      }
    },
    resetData: (state, action: PayloadAction<DomainDataField>) => {
      state[action.payload] = [];
    },
  },
});

export const { setData, resetData } = domainDataSlice.actions;

export default domainDataSlice.reducer;