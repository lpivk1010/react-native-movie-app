import React from 'react';
import styled from 'styled-components';

export const Text = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

const StyledText = styled.Text`
  font-family: ${(props) =>
    props.bold ? 'Metropolis-SemiBold' : 'Metropolis-Regular'};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  margin-bottom: ${(props) => (props.isSectionTitle ? '8px' : '0px')};
`;
