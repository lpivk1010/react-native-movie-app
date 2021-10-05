import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Text } from 'core/components';

export const DetailsOverview = ({ overview }) => (
  <StyledOverview>
    <Text fontSize="20px" lineHeight="28px" color="#0b253f" bold isSectionTitle>
      Overview
    </Text>
    <Text fontSize="13px" lineHeight="20px" color="#000000">
      {overview}
    </Text>
  </StyledOverview>
);

DetailsOverview.propTypes = {
  overview: PropTypes.string.isRequired,
};

DetailsOverview.defaultProps = {
  overview: '',
};

const StyledOverview = styled.View`
  margin: 0 18px;
  margin-bottom: 20px;
`;
