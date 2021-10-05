import React from 'react';

import _ from 'lodash';

import styled from 'styled-components';

import { FlatList } from './FlatList';
import { MovieDetailsService } from '../services';

const renderItem = ({ item }) => <MainCrewCard person={item} />;

export const DetailsMainCrew = ({ credits = [] }) => {
  const crew = MovieDetailsService.getCrew(credits);

  return <StyledMainCrew data={crew} renderItem={renderItem} numColumns={3} />;
};

const StyledMainCrew = styled(FlatList)`
  margin: 0 18px;
  margin-bottom: 20px;
`;

const MainCrewCard = ({ person = {} }) => {
  const name = person.name;
  const department = person.known_for_department;
  return (
    <StyledMainCrewCard>
      <StyledMainCrewText>{name}</StyledMainCrewText>
      <StyledMainCrewText>{department}</StyledMainCrewText>
    </StyledMainCrewCard>
  );
};

const StyledMainCrewCard = styled.View`
  height: 40px;
  width: 33.33%;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 3px;
  margin: 20px 0;
`;

const StyledMainCrewText = styled.Text`
  font-family: ProximaNova-Regular;
  font-size: 14px;
  line-height: 20px;
`;
