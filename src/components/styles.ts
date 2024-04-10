import {StyleSheet} from 'react-native';

import {ThemeState} from '../types/settings';
import {heightFullScreen, widthFullScreen} from '../utils';

export function stylesStandardWrapper() {
  return StyleSheet.create({
    containerStandardWrapper: {
      flex: 1,
      flexDirection: 'column',
    },
    safeAreaContent: {
      flex: 1,
    },
    childContainer: {
      width: '100%',
      height: '100%',
    },
  });
}

export function styleInput() {
  return StyleSheet.create({
    WrapperStandard: {
      display: 'flex',
      flexDirection: 'column',
      // backgroundColor: 'orange',
    },
    contentInputGeneric: {
      display: 'flex',
      borderRadius: 10,
      paddingVertical: 6,
      paddingHorizontal: 10,
      width: '100%',
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentInput: {
      display: 'flex',
      fontSize: 16.5,
      fontWeight: '400',
      flexGrow: 1,
      height: '100%',
      padding: 10,
    },
    helperText: {
      fontSize: 15.2,
      paddingLeft: 10,
      // fontWeight: '400',
    },
  });
}
modalConfirmStyles;

export function modalConfirmStyles({theme}: {theme: ThemeState}) {
  return StyleSheet.create({
    containerModal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalContent: {
      height: heightFullScreen * 0.3,
      width: widthFullScreen * 0.86,
      paddingTop: 30,
      paddingHorizontal: 30,
      backgroundColor: theme.background,
    },
    btnStyle: {
      marginTop: 16,
      backgroundColor: theme.red,
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 17,
    },
    backBtn: {
      width: '100%',
      position: 'absolute',
      zIndex: -1,
      height: '100%',
    },
  });
}
