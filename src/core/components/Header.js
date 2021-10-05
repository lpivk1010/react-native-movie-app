import React from 'react';
import { Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import { images } from 'core/assets/images';

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
      <StyledHeaderImage source={images.tmdb} canGoBack={canGoBack} />
    </StyledHeader>
  );
};

Header.propTypes = {
  canGoBack: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  canGoBack: false,
};

const StyledHeader = styled.View`
  background-color: #0b253f;
  width: 100%;
  height: ${() => (Platform.OS === 'ios' ? '90px' : '60px')};
  padding-top: ${() => (Platform.OS === 'ios' ? '35px' : '0px')};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeaderImage = styled.Image`
  width: 145px;
  margin: 0 auto;
  right: ${(props) => (props.canGoBack ? '20px' : '0px')};
`;

const StyledBackButton = styled.Pressable`
  width: 40px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;
