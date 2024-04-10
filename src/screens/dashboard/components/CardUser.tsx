import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

import {stylesCardUserData, useCardUser} from '..';
import {HandlerImage, ModalConfirm} from '../../../components';
import {deleteSingleDataUser} from '../../../redux/slices/userData';
import {RootState, useAppDispatch} from '../../../redux/store';
import {RootStackPrivateParams} from '../../../types/RootStackMainParams';
import {SingleUserData} from '../../../types/userData';
import {TypeImage} from '../../../utils';
import {convertPrefixesToSpanish} from '../../../utils/parsingTitle';

type NavigationProp = StackScreenProps<RootStackPrivateParams>;

export const CardUser = ({user}: {user: SingleUserData}) => {
  const {theme} = useSelector((state: RootState) => state.settings);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp['navigation']>();
  const {
    mainWrapper,
    imgUser,
    dataUserWrapper,
    textName,
    textId,
    wrapperActions,
    wrapperButton,
  } = stylesCardUserData({
    theme,
  });

  const {
    //state
    isOpenModalDeleteUser,
    //methods
    //functions
    changeStateModalWarningForDelete,
  } = useCardUser();
  return (
    <View style={mainWrapper}>
      <HandlerImage
        typeFile={TypeImage.Remote}
        imgStyle={imgUser}
        imageSource={user.picture}
      />
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={dataUserWrapper}>
            <Text style={textName} numberOfLines={1} ellipsizeMode="tail">
              {convertPrefixesToSpanish(
                `${user.title} ${user.firstName} ${user.lastName}`,
              )}
            </Text>
            <Text style={textId} numberOfLines={1} ellipsizeMode="tail">
              {user.id}
            </Text>
          </View>
          <View style={wrapperActions}>
            <View style={{marginBottom: 5}}>
              <Text
                style={{
                  fontSize: 19,
                  color: theme.textPrimary,
                }}>
                Acciones
              </Text>
            </View>
            <View style={wrapperButton}>
              <Feather
                onPress={() => {
                  navigation.navigate('FormUser', {id: user.id});
                }}
                name="edit"
                size={22}
                color={theme.purpleLight}
              />
              <MaterialCommunityIcons
                onPress={() => {
                  navigation.navigate('Details', {id: user.id});
                }}
                name="account-details"
                size={22}
                color={theme.grayDark}
              />
              <AntDesign
                onPress={changeStateModalWarningForDelete}
                name="delete"
                size={22}
                color={theme.red}
              />
            </View>
          </View>
        </View>
        <ModalConfirm
          serviceDelete={() => {
            dispatch(deleteSingleDataUser(user.id));
          }}
          changeStateModalWarningForDelete={changeStateModalWarningForDelete}
          isOpenModalWarningForDelete={isOpenModalDeleteUser}
          id={user.id}
        />
      </View>
    </View>
  );
};
