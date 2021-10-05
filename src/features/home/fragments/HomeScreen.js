import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, LayoutAnimation } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';
import { SearchActions } from 'features/search/redux';

import styled from 'styled-components';
import { MovieCard, SearchInput } from 'features/search';
import { FlatList } from 'core/components';
import { PopularTitles } from './PopularTitles';
import { FreeToWatchTitles } from './FreeToWatchTitles';
import { TrendingTitles } from './TrendingTitles';

const useTextInput = () => {
  const [searchText, setSearchText] = useState('');
  const [searchFocus, setSearchFocus] = useState(false);
  const [movies, setMovies] = useState([]);

  const onSearchFocus = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    return setSearchFocus(true);
  }, [searchFocus]);

  const dispatch = useDispatch();
  useEffect(async () => {
    setMovies(await dispatch(SearchActions.searchMovies(searchText)));
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }, [searchText]);

  const searchInputRef = useRef();
  const onCancelPress = () => {
    searchInputRef.current.blur();
    setSearchFocus(false);
    setSearchText('');
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  };

  return {
    searchText,
    setSearchText,
    searchFocus,
    onSearchFocus,
    searchInputRef,
    onCancelPress,
    movies,
  };
};

export const HomeScreen = () => {
  const {
    searchText,
    setSearchText,
    searchFocus,
    onSearchFocus,
    searchInputRef,
    onCancelPress,
    movies,
  } = useTextInput();

  const navigation = useNavigation();
  const onCardPress = (params) => navigation.navigate('Details', params);

  const renderCard = ({ item }) => {
    return <MovieCard movie={item} onCardPress={onCardPress} />;
  };

  return (
    <StyledScreenContent>
      <SearchInput
        value={searchText}
        searchInputRef={searchInputRef}
        onFocus={onSearchFocus}
        onChangeText={setSearchText}
        onCancelPress={onCancelPress}
      />
      {!searchFocus && (
        <View>
          <PopularTitles />
          <FreeToWatchTitles />
          <TrendingTitles />
        </View>
      )}
      {searchFocus && <StyledFlatList data={movies} renderItem={renderCard} />}
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
