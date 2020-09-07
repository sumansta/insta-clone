import React from 'react';
import {StyleSheet, Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import homeNavigator from '../navigation/home';
import SearchTab from './Tabs/Search';
import ExploreTab from './Tabs/Explore';
import LikesTab from './Tabs/Likes';
import Profile from '../navigation/profile';

import images from '../constants/images';

const styles = StyleSheet.create({
  tabIcon: {
    width: 25,
    height: 25,
    resizeMode: 'center',
  },
});

const TabIcon = ({iconName}) => {
  return <Image style={styles.tabIcon} source={iconName} />;
};

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        showIcon: true,
        style: {
          backgroundColor: '#121212',
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? images.homeIconActive : images.homeIcon;
          } else if (route.name === 'SearchTab') {
            iconName = focused ? images.searchIconActive : images.searchIcon;
          } else if (route.name === 'ExploreTab') {
            iconName = focused ? images.addIconActive : images.addIcon;
          } else if (route.name === 'LikesTab') {
            iconName = focused ? images.likeIconActive : images.likeIcon;
          } else if (route.name === 'Profile') {
            iconName = focused ? images.userIconActive : images.userIcon;
          }
          return <TabIcon iconName={iconName} />;
        },
      })}>
      <Tab.Screen name="Home" component={homeNavigator} />
      <Tab.Screen name="SearchTab" component={SearchTab} />
      <Tab.Screen name="ExploreTab" component={ExploreTab} />
      <Tab.Screen name="LikesTab" component={LikesTab} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
