import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { CardText } from './CardText';

import { ImageService } from 'core/services';

export const MovieCard = React.memo(({ movie, onCardPress }) => {
  const { id, title, overview, poster_path, release_date = '' } = movie;

  const movieTitle = `${title} (${release_date.slice(0, 4)})`;
  const moviePosterUri = ImageService.generateImageUri(poster_path);

  const onPress = () => onCardPress(id);

  return (
    <StyledCard onPress={onPress}>
      <StyledCardImage source={moviePosterUri} />
      <StyledCardDetails>
        <CardText isTitle>{movieTitle}</CardText>
        <CardText>{overview}</CardText>
      </StyledCardDetails>
    </StyledCard>
  );
});

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onCardPress: PropTypes.func.isRequired,
};

MovieCard.defaultProps = {
  movie: {},
};

const StyledCard = styled.Pressable`
  height: 142px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: row;

  margin-top: 12px;
`;

const StyledCardImage = styled.Image`
  flex: 1;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const StyledCardDetails = styled.View`
  flex: 2;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 14px;
`;
