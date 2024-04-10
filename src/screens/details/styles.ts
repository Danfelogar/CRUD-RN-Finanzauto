import {StyleSheet} from 'react-native';

import {ThemeState} from '../../types/settings';
import {heightFullScreen, widthFullScreen} from '../../utils';

export function stylesDetails({theme}: {theme: ThemeState}) {
  return StyleSheet.create({
    mainWrapper: {
      flex: 1,
      position: 'relative',
      backgroundColor: theme.background,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    containerBackgroundPoints: {
      position: 'absolute',
      width: widthFullScreen,
      height: heightFullScreen * 0.9,
      resizeMode: 'cover',
    },
    headerWrapper: {
      width: widthFullScreen * 0.97,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 10,
      paddingHorizontal: 10,
      marginBottom: 13,
      alignItems: 'center',
    },
    titleHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 5,
      color: theme.textPrimary,
    },
    circlePhoto: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
    textInformation: {
      color: theme.textPrimary,
      fontSize: 15,
      marginBottom: 5,
    },
  });
}
