import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const renderTabs = (tabs, activeTabId, onTabPress) =>
  tabs.map((tab) => {
    const isCurrent = tab.id === activeTabId;
    const onPress = () => onTabPress(tab);

    return (
      <StyledTab isCurrent={isCurrent} onPress={onPress} key={tab.id}>
        <StyledTabText isCurrent={isCurrent}>{tab.name}</StyledTabText>
      </StyledTab>
    );
  });

export const TabPicker = ({ title, tabs, activeTabId, onTabPress }) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledTabs>{renderTabs(tabs, activeTabId, onTabPress)}</StyledTabs>
    </>
  );
};

TabPicker.propTypes = {
  title: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired,
  activeTabId: PropTypes.number.isRequired,
  onTabPress: PropTypes.func.isRequired,
};

const StyledTitle = styled.Text`
  font-family: ProximaNova-Regular;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 8px;
`;

const StyledTabs = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 15px;
`;

const StyledTab = styled.Pressable`
  height: 30px;
  margin-right: 30px;
  border-bottom-width: ${(props) => (props.isCurrent ? '3px' : '0')};
  border-bottom-color: ${(props) => (props.isCurrent ? '#000000' : '0')};
`;

const StyledTabText = styled.Text`
  font-family: ProximaNova-Regular;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => (props.isCurrent ? '#000000' : '#828282')};
`;
