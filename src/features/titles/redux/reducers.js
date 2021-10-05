import _ from 'lodash';

import { createReducer } from '@reduxjs/toolkit';

import { TitlesActions } from './actions';
import { DetailsActions } from 'features/title-details/redux';

export const titlesReducer = createReducer({}, (builder) => {
  builder
    .addCase(TitlesActions.setTitles, (state, action) => {
      return { ...state, ...action.payload };
    })
    .addCase(DetailsActions.fetchMovieInfo.fulfilled, (state, action) => {
      const { movieId, movieInfo } = action.payload;
      state[movieId] = movieInfo;
    });
});
