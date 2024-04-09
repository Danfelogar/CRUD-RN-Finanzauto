import {Dimensions, Platform} from 'react-native';

export const {width: widthFullScreen, height: heightFullScreen} =
  Dimensions.get('screen');

export const isIOS = (): boolean => {
  return Platform.OS === 'ios' ? true : false;
};
