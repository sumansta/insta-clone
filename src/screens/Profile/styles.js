import {StyleSheet} from 'react-native';

import appColors from '../../constants/colors';

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: appColors.DARK,
  },
  profileHeader: {
    backgroundColor: appColors.DARK,
  },
  profileHeaderText: {
    color: appColors.WHITE,
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
    color: appColors.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoName: {
    color: appColors.WHITE,
    fontSize: 12,
  },
  bio: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  bioText: {
    color: appColors.WHITE,
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
    borderColor: appColors.WHITE,
  },
  viewMoreBtn: {
    borderColor: appColors.WHITE,
    flex: 1,
    borderRadius: 4,
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    color: appColors.WHITE,
  },
  btnText: {
    color: appColors.WHITE,
    fontWeight: 'bold',
    fontSize: 14,
  },
  storyWrapper: {
    marginHorizontal: 10,
  },
  tabStyle: {
    backgroundColor: appColors.DARK,
  },
});

export default styles;
