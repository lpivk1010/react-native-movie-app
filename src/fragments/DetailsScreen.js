import React, { useEffect } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';

import _ from 'lodash';

import { useDispatch, useSelector } from 'react-redux';
import { getMovieInfo } from '../redux/selectors';
import { Actions } from '../redux';

import {
  DetailsCast,
  DetailsHeader,
  DetailsMainCrew,
  DetailsOverview,
  DetailsRecomendations,
  DetailsSocial,
} from '../components';

export const DetailsScreen = ({ route }) => {
  const movieId = route.params;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.fetchMovieInfo(movieId));
  }, [movieId]);

  const info = useSelector((state) => getMovieInfo(state, movieId));
  const { details = [], credits = [], reviews = [], similar = [] } = info;
  const { overview = '' } = details;
  const { cast = [] } = credits;
  const { total_results: reviewCount = 0 } = reviews;
  const latestReview = _.get(reviews, ['results', 0], {});
  const { results: similarTitles = [] } = similar;

  if (_.isEmpty(credits) || _.isEmpty(reviews) || _.isEmpty(similar)) {
    return (
      <View style={{ height: '100%', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0B253F" />
      </View>
    );
  }

  return (
    <ScrollView>
      {details && <DetailsHeader details={details} />}
      {overview && <DetailsOverview overview={overview} />}
      {credits && (
        <>
          <DetailsMainCrew credits={credits} />
          <DetailsCast cast={cast} />
        </>
      )}
      {reviewCount > 0 && (
        <DetailsSocial reviewCount={reviewCount} latestReview={latestReview} />
      )}
      {similarTitles && <DetailsRecomendations titles={similarTitles} />}
    </ScrollView>
  );
};
