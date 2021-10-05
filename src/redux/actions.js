import { Alert } from 'react-native';

import _ from 'lodash';

import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getPopularPageCount, getFreePageCount } from './selectors';

import { APIService } from '../services';

const setTitles = createAction('SET_TITLES');
const setMovieInfo = createAction('SET_MOVIE_INFO');

const setPopularActiveTab = createAction('SET_POPULAR_ACTIVE_TAB');
const setPopularTitles = createAction('SET_POPULAR_TITLES');
const setFreeActiveTab = createAction('SET_FREE_ACTIVE_TAB');
const setFreeTitles = createAction('SET_FREE_TITLES');
const setTrendingActiveTab = createAction('SET_TRENDING_ACTIVE_TAB');
const setTrendingTitles = createAction('SET_TRENDING_TITLES');

const setFavoriteTitle = createAction('SET_FAVORITE_TITLE');

const fetchTitles = async (APIEndpoint) => {
  try {
    const response = await fetch(APIEndpoint);
    if (!response.ok) {
      Alert.alert('Loading failed!');
    }
    const results = await response.json().then((titles) => titles.results);

    return _.reduce(
      results,
      (result, item) => ({ ...result, [item.id]: { details: item } }),
      {},
    );
  } catch (error) {
    console.log(error);
    Alert.alert('Loading failed!');
  }
};

const fetchPopularTitles = createAsyncThunk(
  'SET-POPULAR-TITLES',
  async (key, thunkAPI) => {
    const pageCount = getPopularPageCount(thunkAPI.getState());
    const titles = await fetchTitles(
      APIService.getPopularTitlesAPIEndPoint(key, pageCount),
    );
    thunkAPI.dispatch(setTitles(titles));
    const titlesIds = Object.keys(titles);

    return titlesIds;
  },
);

const fetchFreeTitles = createAsyncThunk(
  'SET-FREE-TITLES',
  async (key, thunkAPI) => {
    const pageCount = getFreePageCount(thunkAPI.getState());
    const titles = await fetchTitles(
      APIService.getFreeTitlesAPIEndPoint(key, pageCount),
    );
    thunkAPI.dispatch(setTitles(titles));
    const titlesIds = Object.keys(titles);

    return titlesIds;
  },
);

const fetchTrendingTitles = createAsyncThunk(
  'SET-TRENDING-TITLES',
  async (key, thunkAPI) => {
    const titles = await fetchTitles(
      APIService.getTrendingTitlesAPIEndPoint(key),
    );
    thunkAPI.dispatch(setTitles(titles));
    const titlesIds = Object.keys(titles);

    return titlesIds;
  },
);

export const fetchMovieInfo = createAsyncThunk(
  'SET-MOVIE-INFO',
  async (itemId) => {
    try {
      const detailsResponse = await fetch(
        APIService.getInfoAPIEndPoint(itemId),
      );
      const details = await detailsResponse.json();

      const creditsResponse = await fetch(
        APIService.getInfoAPIEndPoint(itemId, '/credits'),
      );
      const credits = await creditsResponse.json();

      const reviewsResponse = await fetch(
        APIService.getInfoAPIEndPoint(itemId, '/reviews'),
      );
      const reviews = await reviewsResponse.json();

      const similarResponse = await fetch(
        APIService.getInfoAPIEndPoint(itemId, '/similar'),
      );
      const similar = await similarResponse.json();

      return {
        movieId: itemId,
        movieInfo: { details, credits, reviews, similar },
      };
    } catch (error) {
      console.log(error);
      Alert.alert('Loading info failed!');
    }
  },
);

const searchMovies = (searchText) => async (dispatch) => {
  try {
    const response = await fetch(
      APIService.urlBuilder(`search/movie`, 1, `query=${searchText}`),
    );
    const results = await response.json().then((titles) => titles.results);
    const movies = _.reduce(
      results,
      (result, item) => ({ ...result, [item.id]: { details: item } }),
      {},
    );
    dispatch(setTitles(movies));

    return results;
  } catch (error) {
    console.log(error);
    Alert.alert('Searching failed');
  }
};

export const Actions = {
  setTitles,
  setMovieInfo,
  fetchMovieInfo,
  setPopularActiveTab,
  setPopularTitles,
  fetchPopularTitles,
  setFreeActiveTab,
  setFreeTitles,
  fetchFreeTitles,
  setTrendingActiveTab,
  setTrendingTitles,
  fetchTrendingTitles,
  searchMovies,
  setFavoriteTitle,
};
