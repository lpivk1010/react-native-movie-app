import React, { useEffect, useRef } from 'react';
import { LayoutAnimation } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { getFreeTitles, getFreeActiveTab, HomeActions } from '../redux';

import { FREE_TABS } from 'core/assets';
import { HorizontalList } from '../components';

export const FreeToWatchTitles = () => {
  const activeTab = useSelector(getFreeActiveTab);
  const titles = useSelector(getFreeTitles);
  const horizontalListRef = useRef();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HomeActions.fetchFreeTitles(activeTab.key));
  }, [activeTab]);

  const onTabPress = (activeTab) => {
    horizontalListRef.current.scrollToOffset({ offset: 0 });
    dispatch(HomeActions.setFreeActiveTab(activeTab));
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  };

  const navigation = useNavigation();
  const onPosterPress = (params) => navigation.navigate('Details', params);

  const onEndReached = () =>
    dispatch(HomeActions.fetchFreeTitles(activeTab.key));

  return (
    <HorizontalList
      horizontalListRef={horizontalListRef}
      title="Free To Watch"
      tabs={FREE_TABS}
      data={titles}
      activeTabId={activeTab.id}
      onTabPress={onTabPress}
      onPosterPress={onPosterPress}
      onEndReached={onEndReached}
    />
  );
};
