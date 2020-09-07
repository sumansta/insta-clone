import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/MainScreen';

const appStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      header: null,
      headerBackTitle: null,
    }),
  },
});
