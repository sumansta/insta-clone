import React from 'react';
import {FlatList, View, Text, Image, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import appColors from '../../constants/colors';

const data = [
  {
    id: 1,
    imgUrl:
      'https://i.picsum.photos/id/992/200/300.jpg?hmac=TOD4LGE2HuM8Q68o5uzIoFvhlsBAiTJGRGHNMqeJTtI',
    caption: 'Sunrises',
  },
  {
    id: 2,
    imgUrl:
      'https://i.picsum.photos/id/619/200/300.jpg?hmac=WqBGwlGjuY9RCdpzRaG9G-rc9Fi7TGUINX_-klAL2kA',
    caption: 'Payphones',
  },
  {
    id: 3,
    imgUrl:
      'https://i.picsum.photos/id/877/200/200.jpg?hmac=_TafLl6WZhZyakFIYbCsHjkQbQ_aQreI80z-xcPFQIg',
    caption: 'Sunrises',
  },
  {
    id: 4,
    imgUrl:
      'https://i.picsum.photos/id/649/200/300.jpg?hmac=3hfKZ0fzc7Ie_jSDrRCLD-bO3e71sZ_5xyZmJQXyNFg',
    caption: 'Sunrises',
  },
  {
    id: 5,
    imgUrl:
      'https://i.picsum.photos/id/900/200/200.jpg?hmac=ZrAJ9H_K0TLi9qA-7h0aKGGzI3tLtlu1lx6ntCljBfc',
    caption: 'Sunsets in the west',
  },
  {
    id: 6,
    imgUrl:
      'https://i.picsum.photos/id/98/200/200.jpg?hmac=QiHfqn1VEz1-KB7Wpb5iUbtrmTV8s2e3DJFb4HEp-y0',
    caption: 'Sunrises',
  },
];

const {width} = Dimensions.get('window');

const storyGradientSize = width / 6;

const Story = ({uri, caption}) => {
  return (
    <View style={styles.storyContainer}>
      <LinearGradient
        colors={appColors.INSTAGRAM_GRADIENT}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.0}}
        style={{
          height: storyGradientSize,
          width: storyGradientSize,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: storyGradientSize / 2,
        }}>
        <Image style={styles.story} source={{uri: uri}} />
      </LinearGradient>
      <Text style={styles.storyCaption} numberOfLines={1}>
        {caption}
      </Text>
    </View>
  );
};

const Stories = () => {
  const renderItem = ({item, index}) => (
    <Story key={index} uri={item.imgUrl} caption={item.caption} />
  );
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
      renderItem={renderItem}
    />
  );
};

export default Stories;
