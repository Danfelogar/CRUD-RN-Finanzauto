import {ReactNode} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../redux/store';

import {stylesStandardWrapper} from '.';

export const StandardWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const {theme} = useSelector((state: RootState) => state.settings);

  const {childContainer, containerStandardWrapper, safeAreaContent} =
    stylesStandardWrapper();
  return (
    <View style={containerStandardWrapper}>
      <SafeAreaView
        style={{
          ...safeAreaContent,
          backgroundColor: theme.purple,
        }}>
        <StatusBar
          backgroundColor={theme.purple}
          showHideTransition="slide"
          barStyle={'light-content'}
        />
        <View style={childContainer}>{children}</View>
      </SafeAreaView>
    </View>
  );
};
