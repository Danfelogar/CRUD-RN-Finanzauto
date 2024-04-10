import {StackScreenProps} from '@react-navigation/stack';
import {FormProvider} from 'react-hook-form';
import {View, Text, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

import {HandlerImage, StandardWrapper} from '../../components';
import {setIsUpdateUserData} from '../../redux/slices/userData';
import {RootState} from '../../redux/store';
import {RootStackPrivateParams} from '../../types/RootStackMainParams';
import {TypeImage} from '../../utils';

import {FormUpdateOrCreate} from './components';
import {stylesFormUser} from './styles';

import {useFormUser} from '.';

type NavigationProp = StackScreenProps<RootStackPrivateParams, 'FormUser'>;

export const FormUser = ({route, navigation}: NavigationProp) => {
  const {id} = route.params;
  const {theme} = useSelector((state: RootState) => state.settings);
  const {isUpdate, initialValuesForUpdate, loading} = useSelector(
    (state: RootState) => state.userData,
  );
  const {
    //state
    //methods
    formMethodsCreate,
    formMethodsUpdate,
    dispatch,
    //functions
    createOrUpdateUser,
  } = useFormUser({id});
  const {mainWrapper, containerBackgroundPoints, headerWrapper, titleHeader} =
    stylesFormUser({theme});

  return (
    <StandardWrapper>
      <View style={mainWrapper}>
        <HandlerImage
          typeFile={TypeImage.Local}
          imgStyle={containerBackgroundPoints}
          imageSource={require('../../assets/backgroundPoint.png')}
        />
        <ScrollView
          contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
          pagingEnabled
          horizontal={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={{width: '100%', flexDirection: 'column'}}>
            <View style={headerWrapper}>
              <FontAwesome
                onPress={() => {
                  dispatch(setIsUpdateUserData(false));
                  navigation.goBack();
                }}
                name="arrow-circle-left"
                size={22}
                color={theme.textPrimary}
              />
              {!loading && (
                <Text style={titleHeader}>
                  {!isUpdate
                    ? 'Creando Usuario'
                    : `Actualizando usuario ${initialValuesForUpdate.firstName} ${initialValuesForUpdate.lastName}`}
                </Text>
              )}
            </View>
          </View>
          {!loading && (
            <>
              {!isUpdate && (
                <FormProvider {...formMethodsCreate}>
                  <FormUpdateOrCreate
                    isUpdate={isUpdate}
                    isLoading={loading}
                    onSubmitForUpdateOrCreate={createOrUpdateUser}
                  />
                </FormProvider>
              )}
              {isUpdate && (
                <FormProvider {...formMethodsUpdate}>
                  <FormUpdateOrCreate
                    isUpdate={isUpdate}
                    isLoading={loading}
                    onSubmitForUpdateOrCreate={createOrUpdateUser}
                  />
                </FormProvider>
              )}
            </>
          )}
        </ScrollView>
      </View>
    </StandardWrapper>
  );
};
