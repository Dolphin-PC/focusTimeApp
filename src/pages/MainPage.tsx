import {Tab, TabView, Text} from '@rneui/base';
import React, {ReactElement, useState} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomTab from '../layout/BottomTab';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import Header from '../layout/Header';

const MainPage = (): ReactElement => {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text>Hello</Text>
      </View>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  navBar: {
    height: 60,
    backgroundColor: '#B0B0B0',
  },
  user: {
    height: 200,
    backgroundColor: '#81D4FA',
  },
  buttonGroup: {
    height: 200,
    backgroundColor: '#C5E1A5',
  },
  taps: {
    height: 100,
    backgroundColor: '#FFD54F',
  },
});
