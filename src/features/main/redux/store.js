import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { persistedReducer } from './reducers';

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
});
