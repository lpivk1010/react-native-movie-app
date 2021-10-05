import React from 'react';
import { LayoutAnimation } from 'react-native';

import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { FavoritesActions, isTitleFavorite } from 'features/favorites/redux';

import styled from 'styled-components';

import HeartIcon from 'core/assets/svgs/heart.svg';
import HeartIconFocused from 'core/assets/svgs/heartFocusedLight.svg';
import { ImageService } from 'core/services';

export const Poster = React.memo(
  ({ itemId, posterPath, onPosterPress, smaller }) => {
    const itemPosterUri = ImageService.generateImageUri(posterPath);
    const isFavorite = useSelector(isTitleFavorite(itemId));

    const onPress = () => onPosterPress(itemId);

    const dispatch = useDispatch();
    const onHeartPress = () => {
      dispatch(FavoritesActions.setFavoriteTitle(itemId));
      LayoutAnimation.spring();
    };

    return (
      <StyledPoster smaller={smaller} onPress={onPress}>
        <StyledPosterImage
          source={itemPosterUri}
          onPress={onPress}
          smaller={smaller}
        />
        <StyledHeartContainer onPress={onHeartPress}>
          {isFavorite ? <HeartIconFocused /> : <HeartIcon />}
        </StyledHeartContainer>
      </StyledPoster>
    );
  },
);

Poster.propTypes = {
  itemId: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  onPosterPress: PropTypes.func.isRequired,
  smaller: PropTypes.bool,
};

Poster.defaultProps = {
  itemId: 0,
  posterPath: '',
  smaller: false,
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
