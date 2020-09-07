import React from 'react';
import {Image, View, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const POST_SIZE = 3.1;
const data = [
  {
    id: 1,
    imgUrl:
      'https://i.picsum.photos/id/787/200/300.jpg?hmac=XItcL1ki66gQzP2FwRZjLbruiohUmaOYs9mmlDZe9KE',
  },
  {
    id: 2,
    imgUrl:
      'https://i.picsum.photos/id/1011/200/200.jpg?hmac=ISwJXaLKDOtBGE_n3myoHUev_P_OH3zpWqLx0yHp0pY',
  },
  {
    id: 3,
    imgUrl:
      'https://i.picsum.photos/id/877/200/200.jpg?hmac=_TafLl6WZhZyakFIYbCsHjkQbQ_aQreI80z-xcPFQIg',
  },
  {
    id: 4,
    imgUrl:
      'https://i.picsum.photos/id/469/200/200.jpg?hmac=r_nEPJ5ExnhVEQSrNc19WUPConxJzBC929FJHl_Y5N4',
  },
  {
    id: 5,
    imgUrl:
      'https://i.picsum.photos/id/900/200/200.jpg?hmac=ZrAJ9H_K0TLi9qA-7h0aKGGzI3tLtlu1lx6ntCljBfc',
  },
  {
    id: 6,
    imgUrl:
      'https://i.picsum.photos/id/98/200/200.jpg?hmac=QiHfqn1VEz1-KB7Wpb5iUbtrmTV8s2e3DJFb4HEp-y0',
  },
];

const Post = ({img}) => {
  return (
    <View style={styles.postWrapper}>
      <Image
        source={{uri: img}}
        style={styles.imageWrapper}
        resizeMode="contain"
      />
    </View>
  );
};

const PostsSection = () => {
  return (
    <View style={styles.mainWrapper}>
      {data.map((d, i) => (
        <Post key={i} img={d.imgUrl} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  postWrapper: {width: width / POST_SIZE, height: width / POST_SIZE, margin: 1},
  imageWrapper: {
    flex: 1,
    width: width / POST_SIZE,
    height: width / POST_SIZE,
    resizeMode: 'cover',
  },
});

export default PostsSection;
