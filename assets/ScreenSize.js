import {Dimensions} from 'react-native';

const ScreenSize = {
  height: Math.floor(Dimensions.get('window').height),
  width: Math.floor(Dimensions.get('window').width),
};

export default ScreenSize;
