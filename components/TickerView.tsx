import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface TickerProps {
  key: string;
  last: number;
  highestBid: number;
  percentChange: number;
}

interface TickerViewInterface {
  ticker: TickerProps;
}

function makeColor(char) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const place = alphabet.indexOf(char) || 0;
  return "hsl(" + place / alphabet.length * 360 + ", 50%, 50%)"
}

const TickerView = ({ ticker }: TickerViewInterface) => {
  return (
    <View key={ticker.key} style={styles.container}>
      <View style={styles.leftBlock}>
        <View style={[styles.logo, { backgroundColor: makeColor(ticker.key[0]) }]}>
          <Text style={styles.logoKey}>{ticker.key[0]}</Text>
        </View>
        <Text>{ticker.key} </Text>
        <Text style={[styles.cost, { color: ticker.percentChange < 0 ? 'red' : 'green' }]}>{ticker.last}$</Text>
      </View>
      <View style={styles.rightBlock}>
        <Text style={styles.changes}>{ticker.percentChange}%</Text>
        <Text style={styles.changes}>{ticker.highestBid}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 30,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 20,
    marginEnd: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoKey: {
    color: 'white',
  },
  leftBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightBlock: {
    alignItems: 'flex-end'
  },
  cost: {
    fontSize: 14,
  },
  changes: {
    fontSize: 11,
    color: 'gray',
  }
});

export { TickerView }