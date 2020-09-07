import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import LogoHeader from '../screens/Home/LogoHeader';

export default function () {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator headerMode={false}>
      <HomeStack.Screen name="Home" component={Home}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}
