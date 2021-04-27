import React from 'react';
import {View, Text} from 'react-native';
import BottomTab from './BottomTab';

import {NavigationContainer} from '@react-navigation/native';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}
