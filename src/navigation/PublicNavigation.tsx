import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {RootState} from '../redux/store';
import {Login, Onboarding} from '../screens';
import {RootStackPublicParams} from '../types/RootStackMainParams';

const Stack = createStackNavigator<RootStackPublicParams>();

export const PublicNavigation = () => {
  const {isShowOnboarding} = useSelector((state: RootState) => state.auth);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isShowOnboarding ? (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};
