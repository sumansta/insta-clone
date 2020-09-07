import {StyleSheet, Dimensions} from 'react-native';


const {width} = Dimensions.get('window');

const storyGradientSize = width / 6;
const storySize = width / 6 - 3;

const styles = StyleSheet.create({
  storyContainer: {
    width: storyGradientSize + 10,
    marginVertical: 16,
    alignItems: 'center',
  },
  story: {
    width: storySize,
    height: storySize,
    borderRadius: storySize / 2,
    alignSelf: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  storyCaption: {
    marginTop: 4,
    marginHorizontal: 2,
    fontSize: 11,
    flex: 1,
  },
});

export default styles;
