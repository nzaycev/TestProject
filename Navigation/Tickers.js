/* eslint-disable react-native/no-inline-styles */
import {useIsFocused} from '@react-navigation/core';
import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import TickerList from '../components/TickerList';

const Tickers = ({navigation}) => {
  const focused = useIsFocused();

  return (
    <TickerList
      active={focused}
      onFirstLoading={_ => {
        navigation.setOptions({
          headerLeft: _ => (
            <ActivityIndicator style={{paddingHorizontal: 12}} color="black" />
          ),
        });
      }}
      onSuccess={_ => {
        navigation.setOptions({
          headerLeft: _ => null,
        });
      }}
      onError={message => {
        console.warn(message);
        navigation.setOptions({
          headerLeft: _ => (
            <Text style={{color: 'orange', paddingHorizontal: 12}}>Ошибка</Text>
          ),
        });
      }}
    />
  );
};

export default Tickers;
