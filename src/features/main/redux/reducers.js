import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { titlesReducer } from 'features/titles/redux';
import {
  popularTitlesReducer,
  freeTitlesReducer,
  trendingTitlesReducer,
} from 'features/home/redux';
import { favoriteTitlesReducer } from 'features/favorites/redux';

const rootReducer = combineReducers({
  titles: titlesReducer,
  popular: popularTitlesReducer,
  free: freeTitlesReducer,
  trending: trendingTitlesReducer,
  favorite: favoriteTitlesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
