import React from 'react';
import { FlatList as RNFlatList } from 'react-native';

const keyExtractor = (item) => item?.id || item?.details?.id;

export const FlatList = React.forwardRef((props, ref) => {
  return <RNFlatList keyExtractor={keyExtractor} ref={ref} {...props} />;
});
