import React, { useEffect, useRef, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getPopularTitles, getPopularActiveTab, Actions } from '../redux';

import { useNavigation } from '@react-navigation/native';

import { POPULAR_TABS } from '../const';

import { HorizontalList } from '../components';

export const PopularTitles = () => {
  const activeTab = useSelector(getPopularActiveTab);
  const titles = useSelector(getPopularTitles);
  const horizontalListRef = useRef();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.fetchPopularTitles(activeTab.key));
  }, [activeTab]);

  const onTabPress = (activeTab) => {
    horizontalListRef.current.scrollToOffset({ offset: 0 });
    dispatch(Actions.setPopularActiveTab(activeTab));
  };

  const navigation = useNavigation();
  const onPosterPress = (params) => navigation.navigate('Details', params);

  const onEndReached = () => {
    dispatch(Actions.fetchPopularTitles(activeTab.key));
  };

  return (
    <HorizontalList
      horizontalListRef={horizontalListRef}
      onMomentumScrollBegin={() => setScroll(true)}
      title="What's popular"
      tabs={POPULAR_TABS}
      data={titles}
      activeTabId={activeTab.id}
      onTabPress={onTabPress}
      onPosterPress={onPosterPress}
      onEndReached={onEndReached}
    />
  );
};
