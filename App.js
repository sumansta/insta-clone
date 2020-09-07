import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Login from './src/screens/MainScreen';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    );o
  }
}
