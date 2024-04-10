import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';

import {Button, HandlerImage, StandardWrapper} from '../../components';
import {setLogout} from '../../redux/slices/auth';
import {RootState} from '../../redux/store';
import {RootStackPrivateParams} from '../../types/RootStackMainParams';
import {TypeImage} from '../../utils';

import {FlatListCardUsers} from './components';

import {stylesDashboard, useDashboard} from '.';

type NavigationProp = StackScreenProps<RootStackPrivateParams, 'FormUser'>;

export const Dashboard = () => {
  const {theme} = useSelector((state: RootState) => state.settings);

  const {credentials} = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation<NavigationProp['navigation']>();

  const {
    mainWrapper,
    containerBackgroundPoints,
    headerWrapper,
    userInfoWrapper,
    circlePhoto,
    wrapperLetter,
    emailTitle,
    emailLetter,
    createBtn,
  } = stylesDashboard({
    theme,
  });
  const {dispatch} = useDashboard();
  return (
    <StandardWrapper>
      <View style={mainWrapper}>
        <HandlerImage
          typeFile={TypeImage.Local}
          imgStyle={containerBackgroundPoints}
          imageSource={require('../../assets/backgroundPoint.png')}
        />
        <View style={headerWrapper}>
          <View style={userInfoWrapper}>
            {credentials.photo ? (
              <HandlerImage
                typeFile={TypeImage.Remote}
                imgStyle={circlePhoto}
                imageSource={{uri: credentials.photo}}
              />
            ) : (
              <View
                style={{
                  ...circlePhoto,
                  ...wrapperLetter,
                }}>
                <Text style={emailLetter}>
                  {credentials.email.charAt(0).toUpperCase()}
                </Text>
              </View>
            )}
            <Text style={emailTitle}>{credentials.email}</Text>
          </View>
          <Entypo
            onPress={() => {
              dispatch(setLogout());
            }}
            name="log-out"
            size={22}
            color={theme.white}
          />
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingHorizontal: 5,
            marginTop: 10,
            backgroundColor: theme.background,
          }}>
          <Button
            buttonStyle={createBtn}
            colorSpinierLoading={theme.black}
            activeOpacity={0.85}
            onPress={() => {
              navigation.navigate('FormUser', {id: '0'});
            }}
            textContent={
              <Text style={{color: theme.black}}>Crear usuario</Text>
            }
          />
        </View>
        <FlatListCardUsers />
      </View>
    </StandardWrapper>
  );
};
