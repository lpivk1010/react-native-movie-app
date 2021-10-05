import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import CircularProgress from 'react-native-circular-progress-indicator';

import { useDispatch, useSelector } from 'react-redux';
import { FavoritesActions, isTitleFavorite } from 'features/favorites/redux';

import styled from 'styled-components';
import { Text } from 'core/components';
import { HeartSVG } from 'core/assets';
import { MovieDetailsService } from '../service';

export const DetailsHeader = ({ details }) => {
  const { id, titleYear, userScore, backgroundUri, genresRuntime, date } =
    MovieDetailsService.getHeaderInfo(details);
  const isFavorite = useSelector(isTitleFavorite(id));

  const dispatch = useDispatch();
  const onHeartPress = () => {
    dispatch(FavoritesActions.setFavoriteTitle(id));
  };

  return (
    <>
      <StyledBackground source={backgroundUri} resizeMode="cover">
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }}></View>
      </StyledBackground>
      <StyledDetails>
        <StyledUserScore>
          <CircularProgress
            value={userScore}
            valueSuffix="%"
            textColor="#fff"
            radius={21}
            inActiveStrokeWidth={4}
            activeStrokeColor={'#34cceb'}
            activeStrokeWidth={2}
            duration={2000}
          />
          <StyledText fontSize="14px" lineHeight="24px" color="#ffffff">
            User Score
          </StyledText>
        </StyledUserScore>
        <View>
          <StyledText
            fontSize="22px"
            lineHeight="30px"
            color="#ffffff"
            bold
            isSectionTitle
          >
            {titleYear}
          </StyledText>
          <StyledText fontSize="14px" lineHeight="24px" color="#ffffff">
            {date} (US)
          </StyledText>
          <StyledText fontSize="14px" lineHeight="24px" color="#ffffff">
            {genresRuntime}
          </StyledText>
        </View>
        <StyledHeartContainer onPress={onHeartPress}>
          <HeartSVG isFavorite={isFavorite} />
        </StyledHeartContainer>
      </StyledDetails>
    </>
  );
};

DetailsHeader.propTypes = {
  details: PropTypes.object.isRequired,
};

DetailsHeader.defaultProps = {
  details: {},
};

const StyledBackground = styled.ImageBackground`
  height: 300px;
  margin-bottom: 20px;
`;

const StyledDetails = styled.View`
  position: absolute;
  top: 75px;
  height: 210px;
  justify-content: space-evenly;
  margin: 0px 18px;
`;

const StyledUserScore = styled.View`
  width: 140px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledText = styled(Text)`
  text-shadow: 1px 1px #303030;
`;

const StyledHeartContainer = styled.Pressable`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  background-color: rgba(11, 37, 63, 0.6);
  border-radius: 16px;
`;
