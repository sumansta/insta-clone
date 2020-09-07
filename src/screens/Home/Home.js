import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {
  Container,
  Header,
  Left,
  Right,
  Content,
  Button,
  Text,
} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

import Stories from '../../components/Stories';
import PostsSection from './PostsSection';

import styles from './styles';
import images from '../../constants/images';
import appColors from '../../constants/colors';

export default class Home extends Component {
  render() {
    return (
      <Container style={styles.mainWrapper}>
        <Header style={styles.header}>
          <Left>
            <View style={styles.leftIconWrapper}>
              <Image source={images.cameraIcon} style={styles.headerIcon} />
              <Image source={images.instaIcon} style={styles.instaIcon} />
            </View>
          </Left>
          <Right>
            <Image
              source={images.directMessageIcon}
              style={styles.headerIcon}
            />
          </Right>
        </Header>
        <Content>
          <Stories />
        </Content>
      </Container>
    );
  }
}
