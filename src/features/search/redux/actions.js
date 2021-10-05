import { Alert } from 'react-native';
import _ from 'lodash';

import { APIService } from 'core/services';

import { TitlesActions } from 'features/titles/redux';

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
    dispatch(TitlesActions.setTitles(movies));

    return results;
  } catch (error) {
    console.log(error);
    Alert.alert('Searching failed');
  }
};

export const SearchActions = {
  searchMovies,
};
