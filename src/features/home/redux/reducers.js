import _ from 'lodash';

import { createReducer } from '@reduxjs/toolkit';
import { HomeActions } from './actions';

import { POPULAR_TABS, FREE_TABS, TRENDING_TABS } from 'core/assets';

const POPULAR_INITIAL_STATE = {
  activeTab: POPULAR_TABS[0],
  titles: [],
  pageCount: 1,
};

export const popularTitlesReducer = createReducer(
  POPULAR_INITIAL_STATE,
  (builder) => {
    builder
      .addCase(HomeActions.setPopularActiveTab, (state, action) => {
        state.titles = [];
        state.pageCount = 1;
        state.activeTab = action.payload;
      })
      .addCase(HomeActions.fetchPopularTitles.fulfilled, (state, action) => {
        if (_.isEmpty(state.titles)) {
          state.titles = action.payload;
          state.pageCount = state.pageCount + 1;
        } else {
          state.titles = [...state.titles, ...action.payload];
          state.pageCount = state.pageCount + 1;
        }
      });
  },
);

const FREE_INITIAL_STATE = {
  activeTab: FREE_TABS[0],
  titles: [],
  pageCount: 1,
};

export const freeTitlesReducer = createReducer(
  FREE_INITIAL_STATE,
  (builder) => {
    builder
      .addCase(HomeActions.setFreeActiveTab, (state, action) => {
        state.titles = [];
        state.pageCount = 1;
        state.activeTab = action.payload;
      })
      .addCase(HomeActions.fetchFreeTitles.fulfilled, (state, action) => {
        if (_.isEmpty(state.titles)) {
          state.titles = action.payload;
          state.pageCount = state.pageCount + 1;
        } else {
          state.titles = [...state.titles, ...action.payload];
          state.pageCount = state.pageCount + 1;
        }
      });
  },
);

const TRENDING_INITIAL_STATE = {
  activeTab: TRENDING_TABS[0],
  titles: [],
};

export const trendingTitlesReducer = createReducer(
  TRENDING_INITIAL_STATE,
  (builder) => {
    builder
      .addCase(HomeActions.setTrendingActiveTab, (state, action) => {
        state.titles = [];
        state.activeTab = action.payload;
      })
      .addCase(HomeActions.fetchTrendingTitles.fulfilled, (state, action) => {
        state.titles = action.payload;
      });
  },
);
