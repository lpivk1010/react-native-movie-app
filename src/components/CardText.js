import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const CardText = ({ isTitle, children }) => {
  return (
    <StyledCardText
      isTitle={isTitle}
      numberOfLines={isTitle ? 2 : 4}
      elipsizeMode="tail"
    >
      {children}
    </StyledCardText>
  );
};

CardText.propTypes = {
  title: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

CardText.defaultProps = {
  title: false,
};

const StyledCardText = styled.Text`
  font-family: ProximaNova-Regular;
  font-size: ${(props) => (props.isTitle ? '16px' : '14px')};
  line-height: ${(props) => (props.isTitle ? '16px' : '17px')};
  color: ${(props) => (props.isTitle ? 'black' : '#828282')};
  margin-bottom: ${(props) => (props.isTitle ? '5px' : '0')};
`;
