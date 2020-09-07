import React from 'react';
import {View, Image} from 'react-native';

import styles from './styles';
import images from '../../constants/images';

export default LogoHeader = () => {
  return (
    <View style={styles.leftIconWrapper}>
      <Image source={images.cameraIcon} style={styles.headerIcon} />
      <Image source={images.instaIcon} style={styles.instaIcon} />
    </View>
  );
};
