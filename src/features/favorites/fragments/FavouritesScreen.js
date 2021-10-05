import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import { getFavoriteTitles } from '../redux';

import styled from 'styled-components';
import { Text } from 'core/components';
import { FlatList } from 'core/components';
import { Poster } from 'features/home/components';

export const FavoritesScreen = () => {
  const movies = useSelector(getFavoriteTitles);

  const navigation = useNavigation();
  const onPosterPress = (params) => {
    return navigation.navigate('Details', params);
  };

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
      <StyledText
        fontSize="20px"
        lineHeight="28px"
        color="#0B253F"
        bold
        isSectionTitle
      >
        Favorites
      </StyledText>
      <FlatList data={movies} renderItem={renderPoster} numColumns={3} />
    </StyledFavorites>
  );
};

const StyledFavorites = styled.View`
  margin: 0 18px;
`;

const StyledText = styled(Text)`
  margin-top: 30px;
`;
