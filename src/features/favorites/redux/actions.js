import { createAction } from '@reduxjs/toolkit';

const setFavoriteTitle = createAction('SET_FAVORITE_TITLE');

export const FavoritesActions = {
  setFavoriteTitle,
};
