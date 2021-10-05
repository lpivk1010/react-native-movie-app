import React from 'react';
import { Platform, Image } from 'react-native';
import styled from 'styled-components';

import { images } from '../assets/images';

import { useNavigation } from '@react-navigation/native';

export const Header = ({ canGoBack }) => {
  const navigation = useNavigation();
  const onBackButtonPress = () => navigation.goBack();

  return (
    <StyledHeader>
      {canGoBack && (
        <StyledBackButton onPress={onBackButtonPress}>
          <Image source={images.backButton} />
        </StyledBackButton>
      )}
      <StyledHeaderImage source={images.tmdb} />
    </StyledHeader>
  );
};

const StyledHeader = styled.View`
  width: 100%;
  height: ${() => (Platform.OS === 'ios' ? '90px' : '60px')};
  background-color: #0b253f;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: ${() => (Platform.OS === 'ios' ? '35px' : '0px')};
`;

const StyledHeaderImage = styled.Image`
  width: 145px;
`;

const StyledBackButton = styled.Pressable`
  position: absolute;
  left: 45px;
  bottom: 20px;
`;
