import React from 'react';
import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { getFavoriteTitles } from '../redux/selectors';

import { Poster } from '../components';
import { FlatList } from '../components';

export const FavoritesScreen = () => {
  const movies = useSelector(getFavoriteTitles);

  const navigation = useNavigation();
  const onPosterPress = (params) => navigation.navigate('Details', params);

  const renderPoster = ({ item }) => {
    return (
      <Poster
        itemId={item?.details?.id}
        posterPath={item?.details?.poster_path}
        onPosterPress={onPosterPress}
        key={item?.details?.id}
        smaller
      />
    );
  };

  return (
    <StyledFavorites>
      <StyledTitle>Favorites</StyledTitle>
      <FlatList data={movies} renderItem={renderPoster} numColumns={3} />
    </StyledFavorites>
  );
};

const StyledFavorites = styled.View`
  margin: 0 18px;
`;

const StyledTitle = styled.Text`
  font-family: ProximaNova-Regular;
  font-size: 20px;
  line-height: 28px;
  color: #0b253f;
  margin: 15px 6px;
`;
