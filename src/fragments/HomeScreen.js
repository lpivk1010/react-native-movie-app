import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';
import { Actions } from '../redux';

import styled from 'styled-components';

import { SearchInput } from '../components';
import { MovieCard } from '../components';
import { FlatList } from '../components';
import { PopularTitles } from './PopularTitles';
import { FreeToWatchTitles } from './FreeToWatchTitles';
import { TrendingTitles } from './TrendingTitles';

export const HomeScreen = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const onSearchInputFocus = () => setSearchFocus(true);

  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  useEffect(async () => {
    setMovies(await dispatch(Actions.searchMovies(searchText)));
  }, [searchText]);

  const navigation = useNavigation();
  const onCardPress = (params) => navigation.navigate('Details', params);

  const renderCard = ({ item }) => {
    return <MovieCard movie={item} onCardPress={onCardPress} />;
  };
  const keyExtractor = (item) => item.id;

  const searchInputRef = useRef();
  const onCancelPress = () => {
    searchInputRef.current.blur();
    setSearchFocus(false);
    setSearchText('');
  };

  return (
    <StyledScreenContent>
      <SearchInput
        searchInputRef={searchInputRef}
        onFocus={onSearchInputFocus}
        onChangeText={setSearchText}
        onCancelPress={onCancelPress}
        value={searchText}
      />
      {!searchFocus && (
        <View>
          <PopularTitles />
          <FreeToWatchTitles />
          <TrendingTitles />
        </View>
      )}
      {searchFocus && (
        <StyledFlatList
          data={movies}
          renderItem={renderCard}
          keyExtractor={keyExtractor}
        />
      )}
    </StyledScreenContent>
  );
};

const StyledScreenContent = styled.ScrollView`
  margin-left: 18px;
  margin-top: 18px;
`;

const StyledFlatList = styled(FlatList)`
  margin-right: 18px;
`;
