import React from 'react';
import styled from 'styled-components';

import _ from 'lodash';

import { ImageService } from '../services';

import { FlatList } from './FlatList';

const renderItem = ({ item }) => <CastCard person={item} />;

export const DetailsCast = ({ cast = [] }) => {
  return (
    <>
      <StyledListHeader>
        <StyledListHeaderText isTitle>Top Billed Cast</StyledListHeaderText>
        <StyledListHeaderText>Full Cast & Crew</StyledListHeaderText>
      </StyledListHeader>
      <StyledFlatList
        data={cast}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

const StyledListHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 18px;
`;

const StyledListHeaderText = styled.Text`
  font-family: Proxima Nova;
  font-size: ${(props) => (props.isTitle ? '20px' : '14px')};
  line-height: ${(props) => (props.isCurrent ? '28px' : '20px')};
  color: #0b253f;
  margin-bottom: 8px;
`;

const StyledFlatList = styled(FlatList)`
  margin-left: 18px;
  margin-bottom: 20px;
`;

const CastCard = ({ person }) => {
  const { name, character, profile_path: imgPath } = person;
  const imgUri = ImageService.generateImageUri(imgPath);
  return (
    <StyledCastCard>
      <StyledCardImage source={imgUri} />
      <StyledCardTextContainer>
        <StyledCardText isRealName numberOfLines={2} elipsizeMode="tail">
          {name}
        </StyledCardText>
        <StyledCardText numberOfLines={2} elipsizeMode="tail">
          {character}
        </StyledCardText>
      </StyledCardTextContainer>
    </StyledCastCard>
  );
};
const StyledCastCard = styled.View`
  height: 210px;
  width: 125px;
  margin-right: 12px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

const StyledCardImage = styled.Image`
  height: 130px;
  width: 125px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const StyledCardTextContainer = styled.View`
  height: 80px;
  padding: 10px;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledCardText = styled.Text`
  font-family: Proxima Nova;
  font-size: ${(props) => (props.isRealName ? '14px' : '12px')};
  line-height: ${(props) => (props.isRealName ? '15px' : '13px')};
  color: ${(props) => (props.isRealName ? '#000000' : '#828282')};
`;
