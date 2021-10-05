import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import styled from 'styled-components';
import { MovieCard } from '../components';

import { useSelector, useDispatch } from 'react-redux';
import { getLoading, getPopularMovies } from '../redux/selectors';
import { MovieActions } from '../redux/actions';

export const MovieList = () => {
  const [pageCount, setPageCount] = useState(1);
  const movies = useSelector(getPopularMovies);
  const loading = useSelector(getLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MovieActions.fetchPopularMovies(pageCount));
  }, [pageCount]);

  const renderCard = ({ item }) => <MovieCard movie={item} />;
  const keyExtractor = (item) => item.id;

  const handleLoadMore = () => {
    setPageCount((prevPageCount) => prevPageCount + 1);
  };

  return (
    <View>
      <StyledFlatList
        data={movies}
        renderItem={renderCard}
        keyExtractor={keyExtractor}
        onEndReached={handleLoadMore}
      />
      {loading && <ActivityIndicator size="large" />}
    </View>
  );
};

const StyledFlatList = styled.FlatList`
  padding: 0 33px;
`;
