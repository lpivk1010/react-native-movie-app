import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FlatList } from './FlatList';

import { ImageService } from '../services';

const renderItem = ({ item }) => {
  const { title, backdrop_path: backdropPath } = item;
  return <RecomendationCard title={title} backdropPath={backdropPath} />;
};

export const DetailsRecomendations = ({ titles = [] }) => {
  return (
    <>
      <StyledTitle>Recomendations</StyledTitle>
      <StyledFlatList
        data={titles}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

const StyledTitle = styled.Text`
  font-family: Proxima Nova;
  font-size: 20px;
  line-height: 28px;
  color: #0b253f;
  margin: 0 18px;
  margin-bottom: 8px;
`;

const StyledFlatList = styled(FlatList)`
  margin-left: 18px;
  margin-bottom: 20px;
`;

const RecomendationCard = ({ title, backdropPath }) => {
  const backdropUri = ImageService.generateImageUri(backdropPath);
  return (
    <StyledRecomendationCard>
      <StyledRecomendationPoster source={backdropUri} />
      <StyledRecomendationTitle>{title}</StyledRecomendationTitle>
    </StyledRecomendationCard>
  );
};

const StyledRecomendationCard = styled.View`
  height: 220px;
  width: 180px;
  margin-right: 12px;
`;

const StyledRecomendationPoster = styled.Image`
  width: 180px;
  height: 125px;
  border-radius: 10px;
`;

const StyledRecomendationTitle = styled.Text`
  font-family: ProximaNova-Regular;
  font-size: 16px;
  line-height: 22px;
  color: #0b253f;
  margin-top: 10px;
`;
