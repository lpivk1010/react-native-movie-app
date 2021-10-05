import React, { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getTrendingTitles, getTrendingActiveTab, Actions } from '../redux';

import { useNavigation } from '@react-navigation/native';

import { TRENDING_TABS } from '../const';

import { HorizontalList } from '../components';

export const TrendingTitles = () => {
  const activeTab = useSelector(getTrendingActiveTab);
  const titles = useSelector(getTrendingTitles);
  const horizontalListRef = useRef();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.fetchTrendingTitles(activeTab.key));
  }, [activeTab]);

  const onTabPress = (activeTab) => {
    horizontalListRef.current.scrollToOffset({ offset: 0 });
    dispatch(Actions.setTrendingActiveTab(activeTab));
  };

  const navigation = useNavigation();
  const onPosterPress = (params) => navigation.navigate('Details', params);

  return (
    <HorizontalList
      horizontalListRef={horizontalListRef}
      title="Trending"
      tabs={TRENDING_TABS}
      data={titles}
      activeTabId={activeTab.id}
      onTabPress={onTabPress}
      onPosterPress={onPosterPress}
    />
  );
};
