import _ from 'lodash';
import { createSelector } from 'reselect';

import { getTitles } from 'features/titles/redux';

export const getFavoriteTitlesIds = (state) => state.favorite.titles;
export const getFavoriteTitles = createSelector(
  getFavoriteTitlesIds,
  getTitles,
  (favoriteTitles, titles) =>
    _.map(favoriteTitles, (titleId) => titles[titleId]),
);

export const isTitleFavorite = (titleId) =>
  createSelector(getFavoriteTitlesIds, (titles) => titles.includes(titleId));
