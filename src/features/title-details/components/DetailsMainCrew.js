import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { FlatList } from 'core/components';
import { Text } from 'core/components';
import { MovieDetailsService } from '../service';

const renderItem = ({ item }) => <MainCrewCard person={item} />;

export const DetailsMainCrew = ({ credits }) => {
  const crew = MovieDetailsService.getCrew(credits);

  return <StyledMainCrew data={crew} renderItem={renderItem} numColumns={3} />;
};

DetailsMainCrew.propTypes = {
  credits: PropTypes.object.isRequired,
};

DetailsMainCrew.defaultProps = {
  credits: {},
};

const StyledMainCrew = styled(FlatList)`
  margin: 0 18px;
  margin-bottom: 20px;
`;

const MainCrewCard = ({ person }) => {
  const name = person.name;
  const department = person.known_for_department;
  return (
    <StyledMainCrewCard>
      <Text fontSize="13px" lineHeight="20px" color="black">
        {name}
      </Text>
      <Text fontSize="13px" lineHeight="20px" color="black">
        {department}
      </Text>
    </StyledMainCrewCard>
  );
};

MainCrewCard.propTypes = {
  person: PropTypes.object.isRequired,
};

MainCrewCard.defaultProps = {
  person: {},
};

const StyledMainCrewCard = styled.View`
  height: 40px;
  width: 33.33%;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 3px;
  margin: 20px 0;
`;
