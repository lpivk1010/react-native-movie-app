import { Alert } from 'react-native';
import _ from 'lodash';

import { createAction } from '@reduxjs/toolkit';

const setTitles = createAction('SET_TITLES');

const fetchTitles = async (APIEndpoint) => {
  const response = await fetch(APIEndpoint);
  if (!response.ok) {
    Alert.alert('Loading failed!');
  }
  const results = await response.json().then((titles) => titles.results);

  const filteredResults = _.map(results, (item) =>
    _.pick(item, ['id', 'poster_path']),
  );

  return _.reduce(
    filteredResults,
    (result, item) => ({ ...result, [item.id]: { details: item } }),
    {},
  );
};

export const TitlesActions = {
  setTitles,
  fetchTitles,
};
