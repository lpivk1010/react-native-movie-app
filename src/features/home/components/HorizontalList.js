import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';
import { FlatList } from 'core/components';
import { Poster } from './Poster';
import { TabPicker } from './TabPicker';

export const HorizontalList = ({
  horizontalListRef,
  title,
  tabs,
  data,
  activeTabId,
  onTabPress,
  onPosterPress,
  onEndReached,
}) => {
  const renderPoster = ({ item }) => {
    return (
      <Poster
        itemId={item?.details?.id}
        posterPath={item?.details?.poster_path}
        onPosterPress={onPosterPress}
        key={item?.details?.id}
      />
    );
  };

  return (
    <StyledContainer>
      <TabPicker
        title={title}
        tabs={tabs}
        activeTabId={activeTabId}
        onTabPress={onTabPress}
      />
      <FlatList
        ref={horizontalListRef}
        data={data}
        renderItem={renderPoster}
        horizontal
        onEndReached={onEndReached}
        showsHorizontalScrollIndicator={false}
        onEndReachThreshold={0.5}
        maxToRenderPerBatch={3}
      />
    </StyledContainer>
  );
};

HorizontalList.propTypes = {
  title: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  activeTabId: PropTypes.number.isRequired,
  onTabPress: PropTypes.func.isRequired,
  onEndReached: PropTypes.func,
  horizontalListRef: PropTypes.object,
};

HorizontalList.defaultProps = {
  title: '',
  tabs: [],
  data: [],
  activeTabId: 0,
};

const StyledContainer = styled.View`
  margin-bottom: 20px;
  height: 265px;
`;
