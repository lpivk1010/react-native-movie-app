import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const SearchInput = ({
  onFocus,
  onChangeText,
  searchInputRef,
  onCancelPress,
  value,
}) => {
  return (
    <StyledSearch>
      <StyledInput
        ref={searchInputRef}
        placeholder="Search"
        clearButtonMode="always"
        onFocus={onFocus}
        onChangeText={onChangeText}
        value={value}
      />
      <StyledCancelButton onPress={onCancelPress}>Cancel</StyledCancelButton>
    </StyledSearch>
  );
};

SearchInput.propTypes = {
  onFocus: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onCancelPress: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  searchInputRef: PropTypes.object.isRequired,
};

const StyledSearch = styled.View`
  height: 45px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledInput = styled.TextInput`
  height: 45px;
  width: 80%;
  border-radius: 10px;
  padding: 0 10px;
  background-color: #eaeaeb;
`;

const StyledCancelButton = styled.Text`
  margin-right: 18px;
  font-size: 16px;
  color: #0b253f;
`;
