import React, {Component} from 'react';
import Animated, {Easing} from 'react-native-reanimated';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
} = Animated;

const loginBackground = require('../assets/images/login.jpg');

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position,
  ]);
}

export default class Login extends Component {
  constructor() {
    super();

    this.buttonOpacity = new Value(1);

    this.onStateChange = event([
      {
        nativeEvent: ({state}) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0)),
            ),
          ]),
      },
    ]);

    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP,
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 3, 0],
      extrapolate: Extrapolate.CLAMP,
    });
  }

  render() {
    return (
      <View style={styles.loginContainer}>
        <View style={{...StyleSheet.absoluteFill}}>
          <Image style={styles.backgroundImage} source={loginBackground} />
        </View>
        <View style={styles.buttonContainer}>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: this.buttonOpacity,
                transform: [{translateY: this.buttonY}],
              }}>
              <Text style={styles.buttonTextStyle}>Sign In</Text>
            </Animated.View>
          </TapGestureHandler>
          <View style={{...styles.button, backgroundColor: '#2E71DC'}}>
            <Text style={{...styles.buttonTextStyle, color: 'white'}}>
              Sign In with Facebook
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    flex: 1,
    height: null,
    width: null,
  },
  buttonContainer: {
    height: height / 3,
    width: width,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 24,
    height: 48,
    marginHorizontal: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
