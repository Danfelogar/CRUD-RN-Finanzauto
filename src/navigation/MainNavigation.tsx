import {createStackNavigator} from '@react-navigation/stack';
import {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';

import {
  changeThemeDarkMode,
  changeThemeLightMode,
} from '../redux/slices/settings';
import {RootState, useAppDispatch} from '../redux/store';
import {RootStackMainParams} from '../types/RootStackMainParams';
import {TypeStateAuth} from '../utils';

import {PrivateNavigation, PublicNavigation} from '.';

const Stack = createStackNavigator<RootStackMainParams>();

export const MainNavigation = () => {
  const {isLogin} = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    if (isDarkMode) {
      dispatch(changeThemeDarkMode());
    } else {
      dispatch(changeThemeLightMode());
    }
  }, []);

  if (isLogin === null) {
    return <></>;
  }
  return (
    <Stack.Navigator
      // initialRouteName="PublicNavigation"
      screenOptions={{
        headerShown: false,
      }}>
      {isLogin === TypeStateAuth.Login ? (
        <>
          <Stack.Screen
            name="PrivateNavigation"
            component={PrivateNavigation}
          />
        </>
      ) : (
        isLogin === TypeStateAuth.Logout && (
          <Stack.Screen name="PublicNavigation" component={PublicNavigation} />
        )
      )}
    </Stack.Navigator>
  );
};
