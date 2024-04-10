import {StyleSheet} from 'react-native';

import {ThemeState} from '../../types/settings';
import {heightFullScreen, isIOS, widthFullScreen} from '../../utils';

export function stylesLogin({theme}: {theme: ThemeState}) {
  return StyleSheet.create({
    mainWrapper: {
      flex: 1,
      position: 'relative',
      backgroundColor: theme.background,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 20,
    },
    containerBackgroundPoints: {
      position: 'absolute',
      width: widthFullScreen,
      height: heightFullScreen * 0.9,
      resizeMode: 'cover',
    },
    logoImg: {
      width: widthFullScreen * 0.35,
      height: widthFullScreen * 0.35,
      marginBottom: 15,
    },
    mainTitle: {
      fontSize: 22,
      color: theme.textPrimary,
      fontWeight: 'normal',
      marginBottom: 20,
    },
  });
}

export function styleLoginForm({theme}: {theme: ThemeState}) {
  return StyleSheet.create({
    mainWrapper: {
      width: '95%',
      flexDirection: 'column',
      alignItems: 'center',
    },
    inputWrapper: {
      width: '100%',
      flexDirection: 'column',
      marginBottom: 25,
    },
    labelInput: {
      marginLeft: 8,
      marginBottom: 15,
      fontWeight: 'normal',
      fontSize: 16,
      color: theme.textPrimary,
    },
    inputStyles: {
      backgroundColor: theme.white,
      borderRadius: 90,
      height: heightFullScreen * 0.07,

      shadowColor: theme.textPrimary,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    dividerStyle: {
      height: '8%',
      width: '100%',
    },
    btnStyles: {
      width: widthFullScreen * 0.85,
      backgroundColor: theme.purple,
      borderRadius: 75,
      paddingVertical: isIOS() ? 20 : 15,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textBtnStyles: {
      color: theme.white,
      fontSize: 18,
    },
    btnAction: {
      width: widthFullScreen * 0.85,
      justifyContent: 'center',
      paddingHorizontal: '10%',
      paddingVertical: '5%',
      marginBottom: 20,
      borderRadius: 75,
      backgroundColor: theme.grayLight4,
      borderWidth: 1,
      borderColor: theme.grayLight5,
    },
    textSocialMedia: {
      color: theme.purpleDark,
      textAlign: 'center',
      fontSize: 20,
      marginLeft: 10,
    },
  });
}
