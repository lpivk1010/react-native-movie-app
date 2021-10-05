import React, { useEffect, useRef } from 'react';
import { LayoutAnimation } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { getTrendingTitles, getTrendingActiveTab, HomeActions } from '../redux';

import { TRENDING_TABS } from 'core/assets';
import { HorizontalList } from '../components';

export const TrendingTitles = () => {
  const activeTab = useSelector(getTrendingActiveTab);
  const titles = useSelector(getTrendingTitles);
  const horizontalListRef = useRef();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HomeActions.fetchTrendingTitles(activeTab.key));
  }, [activeTab]);

  const onTabPress = (activeTab) => {
    horizontalListRef.current.scrollToOffset({ offset: 0 });
    dispatch(HomeActions.setTrendingActiveTab(activeTab));
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
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
