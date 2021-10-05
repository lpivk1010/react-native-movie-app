import React, { useEffect, useRef } from 'react';
import { LayoutAnimation } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { getPopularTitles, getPopularActiveTab, HomeActions } from '../redux';

import { POPULAR_TABS } from 'core/assets';
import { HorizontalList } from '../components';

export const PopularTitles = () => {
  const activeTab = useSelector(getPopularActiveTab);
  const titles = useSelector(getPopularTitles);
  const horizontalListRef = useRef();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HomeActions.fetchPopularTitles(activeTab.key));
  }, [activeTab]);

  const onTabPress = (activeTab) => {
    horizontalListRef.current.scrollToOffset({ offset: 0 });
    dispatch(HomeActions.setPopularActiveTab(activeTab));
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  };

  const navigation = useNavigation();
  const onPosterPress = (params) => navigation.navigate('Details', params);

  const onEndReached = () => {
    dispatch(HomeActions.fetchPopularTitles(activeTab.key));
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
