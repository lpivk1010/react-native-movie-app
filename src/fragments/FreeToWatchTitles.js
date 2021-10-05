import React, { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getFreeTitles, getFreeActiveTab, Actions } from '../redux';

import { useNavigation } from '@react-navigation/native';

import { FREE_TABS } from '../const';

import { HorizontalList } from '../components';

export const FreeToWatchTitles = () => {
  const activeTab = useSelector(getFreeActiveTab);
  const titles = useSelector(getFreeTitles);
  const horizontalListRef = useRef();

  const dispatch = useDispatch();
  const onEndReached = () => dispatch(Actions.fetchFreeTitles(activeTab.key));
  useEffect(() => {
    dispatch(Actions.fetchFreeTitles(activeTab.key));
  }, [activeTab]);

  const onTabPress = (activeTab) => {
    horizontalListRef.current.scrollToOffset({ offset: 0 });
    dispatch(Actions.setFreeActiveTab(activeTab));
  };

  const navigation = useNavigation();
  const onPosterPress = (params) => navigation.navigate('Details', params);

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
