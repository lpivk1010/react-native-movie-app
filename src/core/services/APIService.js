import Config from 'react-native-config';

export const urlBuilder = (category, page = 1, params = '') => {
  return `${Config.API_BASE_URL}/${category}?api_key=${Config.API_KEY}&page=${page}&${params}`;
};

const getPopularTitlesAPIEndPoint = (key, page) => {
  if (key === 'movie')
    return urlBuilder(
      'discover/movie',
      page,
      'with_watch_monetization_types=flatrate',
    );

  if (key === 'tv')
    return urlBuilder(
      'tv/popular',
      page,
      'with_watch_monetization_types=flatrate',
    );

  if (key === 'rent')
    return urlBuilder(
      'discover/movie',
      page,
      'with_watch_monetization_types=rent',
    );

  return urlBuilder(
    'movie/now_playing',
    page,
    'with_watch_monetization_types=flatrate',
  );
};

const getFreeTitlesAPIEndPoint = (key, page) =>
  urlBuilder(`discover/${key}`, page, 'with_watch_monetization_types=free');

const getTrendingTitlesAPIEndPoint = (key) => urlBuilder(`trending/all/${key}`);

const getInfoAPIEndPoint = (itemId, category = '') =>
  `${Config.API_BASE_URL}/movie/${itemId}${category}?api_key=${Config.API_KEY}`;

export const APIService = {
  urlBuilder,
  getPopularTitlesAPIEndPoint,
  getFreeTitlesAPIEndPoint,
  getTrendingTitlesAPIEndPoint,
  getInfoAPIEndPoint,
};
