import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { Actions, isTitleFavorite } from '../redux';

import HeartSVG from '../assets/images/heart-svg.js';
import { ImageService } from '../services';

export const Poster = React.memo(
  ({ itemId = 0, posterPath = '', onPosterPress, smaller }) => {
    const itemPosterUri = ImageService.generateImageUri(posterPath);
    const onPress = () => onPosterPress(itemId);

    const dispatch = useDispatch();
    const isFavorite = useSelector(isTitleFavorite(itemId));
    const onHeartPress = () => {
      dispatch(Actions.setFavoriteTitle(itemId));
    };

    return (
      <StyledPoster smaller={smaller} onPress={onPress}>
        <StyledPosterImage
          source={itemPosterUri}
          onPress={onPress}
          smaller={smaller}
        />
        <StyledHeartContainer onPress={onHeartPress}>
          <HeartSVG isFavorite={isFavorite} />
        </StyledHeartContainer>
      </StyledPoster>
    );
  },
);

Poster.propTypes = {
  posterPath: PropTypes.string.isRequired,
};

const StyledPoster = styled.Pressable`
  width: ${(props) => (props.smaller ? '33%' : '130px')};
  display: flex;
  align-items: center;
`;

const StyledPosterImage = styled.Image`
  height: ${(props) => (props.smaller ? '155px' : '180px')};
  width: ${(props) => (props.smaller ? '90%' : '122px')};
  border-radius: 10px;
  margin-right: ${(props) => (props.smaller ? '0px' : '8px')};
  margin-bottom: ${(props) => (props.smaller ? '11px' : '0px')};
`;

const StyledHeartContainer = styled.Pressable`
  position: absolute;
  left: 12px;
  top: 12px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: rgba(11, 37, 63, 0.6);
  justify-content: center;
  align-items: center;
`;
