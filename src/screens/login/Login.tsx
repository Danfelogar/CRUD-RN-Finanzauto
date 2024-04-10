import {FormProvider} from 'react-hook-form';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {HandlerImage, StandardWrapper} from '../../components';
import {RootState} from '../../redux/store';
import {TypeImage} from '../../utils';

import {useLogin} from './useLogin';

import {LoginForm, stylesLogin} from '.';

export const Login = () => {
  const {theme} = useSelector((state: RootState) => state.settings);
  const {
    //state
    showPassword,
    loading,
    //methods
    formMethodsLogin,
    //functions
    handleOnChangeShowPassword,
    loginUser,
    loginUserWithGoogle,
  } = useLogin();
  const {mainWrapper, containerBackgroundPoints, logoImg, mainTitle} =
    stylesLogin({
      theme,
    });
  return (
    <StandardWrapper>
      <View style={mainWrapper}>
        <HandlerImage
          typeFile={TypeImage.Local}
          imgStyle={containerBackgroundPoints}
          imageSource={require('../../assets/backgroundPoint.png')}
        />
        <HandlerImage
          typeFile={TypeImage.Local}
          imgStyle={logoImg}
          imageSource={require('../../assets/dietchGroupLogo.jpeg')}
        />
        <Text style={mainTitle}>Ingresa tus datos</Text>
        <FormProvider {...formMethodsLogin}>
          <LoginForm
            isLoading={loading}
            isPasswordSecret={showPassword}
            changePasswordSecret={handleOnChangeShowPassword}
            validateCredentialsLogin={loginUser}
            loginUserWithGoogle={loginUserWithGoogle}
          />
        </FormProvider>
      </View>
    </StandardWrapper>
  );
};
