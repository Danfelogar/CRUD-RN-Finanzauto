import {StyleSheet} from 'react-native';

import {ThemeState} from '../../types/settings';
import {heightFullScreen, widthFullScreen} from '../../utils';

export function stylesFormUser({theme}: {theme: ThemeState}) {
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
  });
}

export function stylesFormUpdateOrCreate({theme}: {theme: ThemeState}) {
  return StyleSheet.create({
    wrapperInput: {
      justifyContent: 'center',
      alignItems: 'center',
      width: widthFullScreen * 0.9,
      maxHeight: heightFullScreen * 0.5,
      marginBottom: 22,
    },
    btnAction: {
      width: widthFullScreen * 0.85,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: '10%',
      paddingVertical: '5%',
      marginBottom: 20,
      borderRadius: 75,

      backgroundColor: theme.purpleLight,
      borderWidth: 1,
      borderColor: theme.purpleLight,
    },
  });
}
