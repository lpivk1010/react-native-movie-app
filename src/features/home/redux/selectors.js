import _ from 'lodash';
import { createSelector } from 'reselect';

import { getTitles } from 'features/titles/redux';

export const getPopularTitlesIds = (state) => state.popular.titles;
export const getPopularActiveTab = (state) => state.popular.activeTab;
export const getPopularPageCount = (state) => state.popular.pageCount;
export const getPopularTitles = createSelector(
  getPopularTitlesIds,
  getTitles,
  (popularTitles, titles) => _.map(popularTitles, (titleId) => titles[titleId]),
);

export const getFreeTitlesIds = (state) => state.free.titles;
export const getFreeActiveTab = (state) => state.free.activeTab;
export const getFreePageCount = (state) => state.free.pageCount;
export const getFreeTitles = createSelector(
  getFreeTitlesIds,
  getTitles,
  (freeTitles, titles) => _.map(freeTitles, (titleId) => titles[titleId]),
);

export const getTrendingTitlesIds = (state) => state.trending.titles;
export const getTrendingActiveTab = (state) => state.trending.activeTab;
export const getTrendingTitles = createSelector(
  getTrendingTitlesIds,
  getTitles,
  (trendingTitles, titles) =>
    _.map(trendingTitles, (titleId) => titles[titleId]),
);
