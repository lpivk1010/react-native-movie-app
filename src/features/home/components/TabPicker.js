import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Text } from 'core/components';

const renderTabs = (tabs, activeTabId, onTabPress) =>
  tabs.map((tab) => {
    const isCurrent = tab.id === activeTabId;
    const onPress = () => onTabPress(tab);

    return (
      <StyledTab isCurrent={isCurrent} onPress={onPress} key={tab.id}>
        <StyledTabText
          fontSize="16px"
          lineHeight="24px"
          color="#0B253F"
          isCurrent={isCurrent}
          bold={isCurrent}
        >
          {tab.name}
        </StyledTabText>
      </StyledTab>
    );
  });

export const TabPicker = ({ title, tabs, activeTabId, onTabPress }) => {
  return (
    <>
      <Text
        fontSize="20px"
        lineHeight="28px"
        color="#0B253F"
        bold
        isSectionTitle
      >
        {title}
      </Text>
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

TabPicker.defaultProps = {
  title: '',
  tabs: [],
  activeTabId: 0,
};

const StyledTabs = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 15px;
`;

const StyledTab = styled.Pressable`
  height: 30px;
  margin-right: 20px;
  border-bottom-width: ${(props) => (props.isCurrent ? '3px' : '0')};
  border-bottom-color: ${(props) => (props.isCurrent ? '#000000' : '0')};
`;

const StyledTabText = styled(Text)`
  color: ${(props) => (props.isCurrent ? '#0B253F' : '#828282')};
`;
