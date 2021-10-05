import _ from 'lodash';

import { createReducer, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { Actions } from './actions';
import { POPULAR_TABS, FREE_TABS, TRENDING_TABS } from '../const';

const titlesReducer = createReducer({}, (builder) => {
  builder
    .addCase(Actions.setTitles, (state, action) => {
      return { ...state, ...action.payload };
    })
    .addCase(Actions.fetchMovieInfo.fulfilled, (state, action) => {
      const { movieId, movieInfo } = action.payload;
      state[movieId] = movieInfo;
    });
});

const POPULAR_INITIAL_STATE = {
  activeTab: POPULAR_TABS[0],
  titles: [],
  pageCount: 1,
};

const popularTitlesReducer = createReducer(POPULAR_INITIAL_STATE, (builder) => {
  builder
    .addCase(Actions.setPopularActiveTab, (state, action) => {
      state.titles = [];
      state.pageCount = 1;
      state.activeTab = action.payload;
    })
    .addCase(Actions.fetchPopularTitles.fulfilled, (state, action) => {
      if (_.isEmpty(state.titles)) {
        state.titles = action.payload;
        state.pageCount = state.pageCount + 1;
      } else {
        state.titles = [...state.titles, ...action.payload];
        state.pageCount = state.pageCount + 1;
      }
    });
});

const FREE_INITIAL_STATE = {
  activeTab: FREE_TABS[0],
  titles: [],
  pageCount: 1,
};

const freeTitlesReducer = createReducer(FREE_INITIAL_STATE, (builder) => {
  builder
    .addCase(Actions.setFreeActiveTab, (state, action) => {
      state.titles = [];
      state.pageCount = 1;
      state.activeTab = action.payload;
    })
    .addCase(Actions.fetchFreeTitles.fulfilled, (state, action) => {
      if (_.isEmpty(state.titles)) {
        state.titles = action.payload;
        state.pageCount = state.pageCount + 1;
      } else {
        state.titles = [...state.titles, ...action.payload];
        state.pageCount = state.pageCount + 1;
      }
    });
});

const TRENDING_INITIAL_STATE = {
  activeTab: TRENDING_TABS[0],
  titles: [],
};

const trendingTitlesReducer = createReducer(
  TRENDING_INITIAL_STATE,
  (builder) => {
    builder
      .addCase(Actions.setTrendingActiveTab, (state, action) => {
        state.titles = [];
        state.activeTab = action.payload;
      })
      .addCase(Actions.fetchTrendingTitles.fulfilled, (state, action) => {
        state.titles = action.payload;
      });
  },
);

const FAVORITE_INITIAL_STATE = {
  titles: [],
};

const favoriteTitlesReducer = createReducer(
  FAVORITE_INITIAL_STATE,
  (builder) => {
    builder.addCase(Actions.setFavoriteTitle, (state, action) => {
      if (state.titles.includes(action.payload)) {
        state.titles = _.without(state.titles, action.payload);
      } else {
        state.titles = [...state.titles, action.payload];
      }
    });
  },
);

export const rootReducer = combineReducers({
  titles: titlesReducer,
  popular: popularTitlesReducer,
  free: freeTitlesReducer,
  trending: trendingTitlesReducer,
  favorite: favoriteTitlesReducer,
});
