import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../screens/Profile';

export default function () {
  const ProfileStack = createStackNavigator();
  return (
    <ProfileStack.Navigator headerMode={false}>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}
