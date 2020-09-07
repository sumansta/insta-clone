import React, {Component} from 'react';
import {Text, View, ScrollView, Image, Animated} from 'react-native';

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;
const PROFILE_IMAGE_MAX_HEIGHT = 80;
const PROFILE_IMAGE_MIN_HEIGHT = 40;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    return (
      <View style={{flex: 1}}>
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: 'lightskyblue',
            height: headerHeight,
          }}></Animated.View>
        <ScrollView
          style={{flex: 1}}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {contentOffset: {y: this.state.scrollY}},
              },
            ],
            {
              useNativeDriver: true,
            },
          )}>
          <View
            style={{
              height: PROFILE_IMAGE_MAX_HEIGHT,
              width: PROFILE_IMAGE_MAX_HEIGHT,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
              overflow: 'hidden',
              borderColor: '#fff',
              borderWidth: 2,
              marginTop: HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
              marginLeft: 10,
            }}>
            <Image
              style={{flex: 1, height: null, width: null}}
              source={require('../../assets/images/profile.jpeg')}
            />
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 26, paddingLeft: 10}}>
              Suman
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
