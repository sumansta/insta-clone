import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Left,
  Right,
  Content,
  Button,
  Text,
  Tabs,
  Tab,
  TabHeading,
} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import {SwipeablePanel} from 'rn-swipeable-panel';

import StorySection from './StorySection';
import PostsSection from './PostsSection';
import TaggedPostsSection from './TaggedPostsSection';

import styles from './styles';
import images from '../../constants/images';
import appColors from '../../constants/colors';

const Info = ({name, number}) => {
  return (
    <View style={styles.singleInfo}>
      <Text style={styles.infoHeader}>{number}</Text>
      <Text style={styles.infoName}>{name}</Text>
    </View>
  );
};

const Profile = () => {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    onlySmall: true,
    onClose: () => closePanel(),
    closeOnTouchOutside: true,
  });
  const [bottomPanel, setBottomPanel] = useState(false);

  const openPanel = () => {
    setBottomPanel(true);
  };

  const closePanel = () => {
    setBottomPanel(false);
  };

  return (
    <Container style={styles.mainWrapper}>
      <Header transparent style={styles.profileHeader}>
        <Left>
          <TouchableOpacity onPress={openPanel}>
            <Text style={styles.profileHeaderText}>
              suman_sta
              <Icon name="chevron-down" size={14} />
            </Text>
          </TouchableOpacity>
        </Left>
        <Right>
          <Icon name="menu" size={20} style={{color: appColors.WHITE}} />
        </Right>
      </Header>
      <Content showsVerticalScrollIndicator={false}>
        <View style={styles.profileImageWrapper}>
          <LinearGradient
            colors={appColors.INSTAGRAM_GRADIENT}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 1.0}}
            style={{
              height: 80,
              width: 80,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 80 / 2,
            }}>
            <Image source={images.profileImage} style={styles.profileImage} />
          </LinearGradient>
        </View>
        <View style={styles.profileInfo}>
          <Info name="Posts" number="6,339" />
          <Info name="Followers" number="164M" />
          <Info name="Following" number="139" />
        </View>
        <View style={styles.bio}>
          <Text style={styles.bioText}>Suman Shrestha</Text>
          <Text style={styles.bioText}>
            Software Engineer | Travel | Photography
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <View style={{flex: 9, flexDirection: 'row'}}>
            <Button primary small style={[styles.commonBtn, styles.followBtn]}>
              <Text
                uppercase={false}
                style={{...styles.btnText, color: appColors.WHITE}}>
                Follow
              </Text>
            </Button>
            <Button
              bordered
              small
              style={[styles.commonBtn, styles.messageBtn]}>
              <Text uppercase={false} style={styles.btnText}>
                Message
              </Text>
            </Button>
            <Button
              bordered
              small
              style={[styles.commonBtn, styles.messageBtn]}>
              <Text uppercase={false} style={styles.btnText}>
                Email
              </Text>
            </Button>
          </View>
          <Button bordered small style={styles.viewMoreBtn}>
            <Icon
              name="chevron-down"
              size={14}
              style={{color: appColors.PRIMARY_BLUE}}
            />
          </Button>
        </View>
        <View style={styles.storyWrapper}>
          <StorySection />
        </View>
        <Tabs tabBarUnderlineStyle={{backgroundColor: '#fff'}}>
          <Tab
            heading={
              <TabHeading style={styles.tabStyle}>
                <Icon name="image" color="#fff" size={24} />
              </TabHeading>
            }>
            <PostsSection />
          </Tab>
          <Tab
            heading={
              <TabHeading style={styles.tabStyle}>
                <Icon name="tv" color="#fff" size={24} />
              </TabHeading>
            }>
            <TaggedPostsSection />
          </Tab>
        </Tabs>
      </Content>
      <SwipeablePanel {...panelProps} isActive={bottomPanel}></SwipeablePanel>
    </Container>
  );
};

export default Profile;
