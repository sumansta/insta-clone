import {StyleSheet} from 'react-native';

import appColors from '../../constants/colors';
import {colors} from 'react-native-elements';

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: appColors.WHITE,
  },
  header: {
    marginTop: 16,
    paddingHorizontal: 6,
    backgroundColor: appColors.WHITE,
  },
  headerIcon: {height: 24, width: 24, resizeMode: 'center'},
  leftIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  instaIcon: {
    height: 24,
    width: '100%',
    resizeMode: 'center',
    marginTop: 8,
  },

  profileHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileImageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    alignSelf: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  storyWrapper: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80 / 2,
  },
  profileInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  singleInfo: {
    width: '25%',
    alignItems: 'center',
  },
  infoHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoName: {
    fontSize: 12,
  },
  bio: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  bioText: {
    fontSize: 14,
    textAlign: 'justify',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 6,
    marginVertical: 6,
  },
  commonBtn: {
    flex: 1,
    borderRadius: 4,
    justifyContent: 'center',
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
  followBtn: {
    backgroundColor: appColors.PRIMARY_BLUE,
  },
  messageBtn: {
    borderColor: appColors.PRIMARY_BLUE,
  },
  viewMoreBtn: {
    borderColor: appColors.PRIMARY_BLUE,
    flex: 1,
    borderRadius: 4,
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    color: appColors.PRIMARY_BLUE,
  },
  btnText: {
    color: appColors.PRIMARY_BLUE,
    fontWeight: 'bold',
    fontSize: 14,
  },
  storyWrapper: {
    marginHorizontal: 10,
  },
});

export default styles;
