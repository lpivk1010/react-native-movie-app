import React from 'react';
import styled from 'styled-components';

export const DetailsOverview = ({ overview }) => (
  <StyledOverview>
    <StyledOverviewText isTitle>Overview</StyledOverviewText>
    <StyledOverviewText>{overview}</StyledOverviewText>
  </StyledOverview>
);

const StyledOverview = styled.View`
  margin: 0 18px;
  margin-bottom: 20px;
`;

const StyledOverviewText = styled.Text`
  font-family: ProximaNova-Regular;
  font-size: ${(props) => (props.isTitle ? '20px' : '14px')};
  line-height: ${(props) => (props.isTitle ? '28px' : '20px')};
  color: ${(props) => (props.isTitle ? '#0b253f' : '#000000')};
  margin-bottom: ${(props) => (props.isTitle ? '8px' : '0')};
`;
