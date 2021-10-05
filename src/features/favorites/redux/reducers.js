import _ from 'lodash';

import { createReducer } from '@reduxjs/toolkit';
import { FavoritesActions } from './actions';

const FAVORITE_INITIAL_STATE = {
  titles: [],
};

export const favoriteTitlesReducer = createReducer(
  FAVORITE_INITIAL_STATE,
  (builder) => {
    builder.addCase(FavoritesActions.setFavoriteTitle, (state, action) => {
      if (state.titles.includes(action.payload)) {
        state.titles = _.without(state.titles, action.payload);
      } else {
        state.titles = [...state.titles, action.payload];
      }
    });
  },
);
