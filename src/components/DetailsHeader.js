import React from 'react';
import { View } from 'react-native';

import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { Actions, isTitleFavorite } from '../redux';

import HeartSVG from '../assets/images/heart-svg';
import { MovieDetailsService } from '../services';

export const DetailsHeader = ({ details }) => {
  const { id, titleYear, userScore, backgroundUri, genresRuntime, date } =
    MovieDetailsService.getHeaderInfo(details);

  const dispatch = useDispatch();
  const isFavorite = useSelector(isTitleFavorite(id));
  const onHeartPress = () => {
    dispatch(Actions.setFavoriteTitle(id));
  };

  return (
    <>
      <StyledBackground source={backgroundUri} resizeMode="cover">
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }}></View>
      </StyledBackground>
      <StyledDetails>
        <StyledUserScore>
          <StyledUserScoreText isUserScore>{userScore}</StyledUserScoreText>
          <StyledUserScoreText>User Score</StyledUserScoreText>
        </StyledUserScore>
        <View>
          <StyledText isTitle>{titleYear}</StyledText>
          <StyledText>{date} (US)</StyledText>
          <StyledText>{genresRuntime}</StyledText>
        </View>
        <StyledHeartContainer onPress={onHeartPress}>
          <HeartSVG isFavorite={isFavorite} />
        </StyledHeartContainer>
      </StyledDetails>
    </>
  );
};

const StyledBackground = styled.ImageBackground`
  height: 300px;
  margin-bottom: 20px;
`;

const StyledDetails = styled.View`
  position: absolute;
  top: 50px;
  height: 200px;
  justify-content: space-evenly;
  margin: 0px 18px;
`;

const StyledUserScore = styled.View`
  width: 120px;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledUserScoreText = styled.Text`
  font-family: ProximaNova-Regular;
  font-size: ${(props) => (props.isUserScore ? '18px' : '14px')};
  line-height: ${(props) => (props.isUserScore ? '24px' : '27px')};
  color: #ffffff;
  text-shadow: 1px 1px #303030;
`;

const StyledText = styled.Text`
  font-family: ProximaNova-Regular;
  font-size: ${(props) => (props.isTitle ? '24px' : '14px')};
  line-height: ${(props) => (props.isTitle ? '34px' : '20px')};
  color: #f2f2f2;
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
