import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { FlatList } from 'core/components';
import { Text } from 'core/components';

import { ImageService } from 'core/services';

const renderItem = ({ item }) => {
  const { title, backdrop_path: backdropPath } = item;
  return <RecomendationCard title={title} backdropPath={backdropPath} />;
};

export const DetailsRecomendations = ({ titles }) => {
  return (
    <>
      <StyledText
        fontSize="20px"
        lineHeight="28px"
        color="#0b253f"
        bold
        isSectionTitle
      >
        Recomendations
      </StyledText>
      <StyledFlatList
        data={titles}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

DetailsRecomendations.propTypes = {
  titles: PropTypes.array.isRequired,
};

DetailsRecomendations.defaultProps = {
  titles: [],
};

const StyledText = styled(Text)`
  margin-left: 18px;
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
      <StyledRecomendationTitle
        fontSize="16px"
        lineHeight="22px"
        color="#0B253F"
      >
        {title}
      </StyledRecomendationTitle>
    </StyledRecomendationCard>
  );
};

RecomendationCard.propTypes = {
  title: PropTypes.string.isRequired,
  backdropPath: PropTypes.string,
};

RecomendationCard.defaultProps = {
  titles: '',
  backdropPath: '',
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

const StyledRecomendationTitle = styled(Text)`
  margin-top: 10px;
`;
