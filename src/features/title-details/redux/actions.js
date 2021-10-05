import _ from 'lodash';

import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { MovieDetailsService } from '../service/MovieDetailsService';

const setMovieInfo = createAction('SET_MOVIE_INFO');

const fetchMovieInfo = createAsyncThunk(
  'SET-MOVIE-INFO',
  async (itemId, thunkAPI) => {
    try {
      const detailsResponse = await MovieDetailsService.fetchInfo(itemId);
      const details = _.pick(detailsResponse, [
        'id',
        'poster_path',
        'backdrop_path',
        'genres',
        'overview',
        'release_date',
        'runtime',
        'title',
        'vote_average',
      ]);

      const creditsResponse = await MovieDetailsService.fetchInfo(
        itemId,
        '/credits',
      );
      const cast = _.map(creditsResponse.cast, (person) =>
        _.pick(person, [
          'id',
          'name',
          'profile_path',
          'known_for_department',
          'character',
        ]),
      );
      const crew = _.map(creditsResponse.crew, (person) =>
        _.pick(person, ['id', 'name', 'known_for_department', 'job']),
      );
      const credits = { cast, crew };

      const reviews = await MovieDetailsService.fetchInfo(itemId, '/reviews');

      const similarResponse = await MovieDetailsService.fetchInfo(
        itemId,
        '/similar',
      );
      const similarTitles = similarResponse.results;
      const similar = _.map(similarTitles, (title) =>
        _.pick(title, ['id', 'title', 'backdrop_path']),
      );

      return {
        movieId: itemId,
        movieInfo: { details, credits, reviews, similar },
      };
    } catch (error) {
      thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const DetailsActions = {
  setMovieInfo,
  fetchMovieInfo,
};
