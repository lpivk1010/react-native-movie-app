import _ from 'lodash';

import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getPopularPageCount, getFreePageCount } from './selectors';
import { TitlesActions } from 'features/titles/redux';

import { APIService } from 'core/services';

const setPopularActiveTab = createAction('SET_POPULAR_ACTIVE_TAB');
const setPopularTitles = createAction('SET_POPULAR_TITLES');
const setFreeActiveTab = createAction('SET_FREE_ACTIVE_TAB');
const setFreeTitles = createAction('SET_FREE_TITLES');
const setTrendingActiveTab = createAction('SET_TRENDING_ACTIVE_TAB');
const setTrendingTitles = createAction('SET_TRENDING_TITLES');

const fetchPopularTitles = createAsyncThunk(
  'SET-POPULAR-TITLES',
  async (key, thunkAPI) => {
    try {
      const pageCount = getPopularPageCount(thunkAPI.getState());
      const titles = await TitlesActions.fetchTitles(
        APIService.getPopularTitlesAPIEndPoint(key, pageCount),
      );
      thunkAPI.dispatch(TitlesActions.setTitles(titles));

      return Object.keys(titles);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

const fetchFreeTitles = createAsyncThunk(
  'SET-FREE-TITLES',
  async (key, thunkAPI) => {
    try {
      const pageCount = getFreePageCount(thunkAPI.getState());
      const titles = await TitlesActions.fetchTitles(
        APIService.getFreeTitlesAPIEndPoint(key, pageCount),
      );
      thunkAPI.dispatch(TitlesActions.setTitles(titles));

      return Object.keys(titles);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

const fetchTrendingTitles = createAsyncThunk(
  'SET-TRENDING-TITLES',
  async (key, thunkAPI) => {
    try {
      const titles = await TitlesActions.fetchTitles(
        APIService.getTrendingTitlesAPIEndPoint(key),
      );
      thunkAPI.dispatch(TitlesActions.setTitles(titles));

      return Object.keys(titles);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const HomeActions = {
  setPopularActiveTab,
  setPopularTitles,
  setFreeActiveTab,
  setFreeTitles,
  setTrendingActiveTab,
  setTrendingTitles,
  fetchPopularTitles,
  fetchFreeTitles,
  fetchTrendingTitles,
};
