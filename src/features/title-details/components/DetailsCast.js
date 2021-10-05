import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import styled from 'styled-components';
import { FlatList } from 'core/components';
import { Text } from 'core/components';

import { ImageService } from 'core/services';

const renderItem = ({ item }) => <CastCard person={item} />;

export const DetailsCast = ({ cast }) => {
  return (
    <>
      <StyledListHeader>
        <Text
          fontSize="20px"
          lineHeight="28px"
          color="#0b253f"
          bold
          isSectionTitle
        >
          Top Billed Cast
        </Text>
        <Text fontSize="14px" lineHeight="20px" color="#0b253f" bold>
          Full Cast & Crew
        </Text>
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

DetailsCast.propTypes = {
  cast: PropTypes.array.isRequired,
};

DetailsCast.defaultProps = {
  cast: [],
};

const StyledListHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 18px;
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
        <Text
          fontSize="13px"
          lineHeight="15px"
          color="#000000"
          bold
          numberOfLines={2}
          elipsizeMode="tail"
        >
          {name}
        </Text>
        <Text
          fontSize="11px"
          lineHeight="13px"
          color="#828282"
          numberOfLines={2}
          elipsizeMode="tail"
        >
          {character}
        </Text>
      </StyledCardTextContainer>
    </StyledCastCard>
  );
};

CastCard.propTypes = {
  person: PropTypes.object.isRequired,
};

CastCard.defaultProps = {
  person: {},
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
