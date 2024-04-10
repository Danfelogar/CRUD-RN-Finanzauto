import {useFormContext} from 'react-hook-form';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

import {styleLoginForm} from '..';
import {Button, InputGeneric} from '../../../components';
import {RootState} from '../../../redux/store';
import {LoginCredentials} from '../../../types/auth';
import {heightFullScreen} from '../../../utils';

export const LoginForm = ({
  isLoading,
  isPasswordSecret,
  changePasswordSecret,
  validateCredentialsLogin,
  loginUserWithGoogle,
}: {
  isLoading: boolean;
  isPasswordSecret: boolean;
  changePasswordSecret: () => void;
  validateCredentialsLogin: (data: LoginCredentials) => void;
  loginUserWithGoogle: () => void;
}) => {
  const {theme} = useSelector((state: RootState) => state.settings);

  const {
    inputStyles,
    inputWrapper,
    labelInput,
    mainWrapper,
    dividerStyle,
    btnStyles,
    textBtnStyles,
    btnAction,
    textSocialMedia,
  } = styleLoginForm({theme});
  const {control, handleSubmit: onSubmit} = useFormContext<LoginCredentials>();
  return (
    <View style={mainWrapper}>
      <View style={inputWrapper}>
        <Text style={labelInput}>Correo electrónico</Text>
        <InputGeneric
          control={control}
          name={'email'}
          inputStyle={inputStyles}
          placeholder="example@example.com"
          keyboardType="email-address"
          placeholderTextColor={theme.gray}
          inputColor={theme.black}
          autoCorrect={false}
        />
      </View>
      <View style={inputWrapper}>
        <Text style={labelInput}>Contraseña</Text>
        <InputGeneric
          control={control}
          name={'password'}
          inputStyle={inputStyles}
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          lastIcon={
            <Entypo
              onPress={changePasswordSecret}
              name={isPasswordSecret ? 'eye-with-line' : 'eye'}
              size={heightFullScreen / 38}
              color={theme.black}
            />
          }
          isSecretText={isPasswordSecret}
          placeholderTextColor={theme.gray}
          inputColor={theme.black}
          autoCorrect={false}
        />
      </View>
      <Text style={labelInput}>Olvidé mi contraseña</Text>
      <View style={dividerStyle} />
      <Button
        buttonStyle={{
          ...btnAction,
          backgroundColor: theme.orange,
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        firstIcon={
          <FontAwesome name="google-plus" color={theme.purpleDark} size={34} />
        }
        isLoading={isLoading}
        onPress={loginUserWithGoogle}
        activeOpacity={0.85}
        textContent={
          <Text style={textSocialMedia}>Iniciar sesión con Google</Text>
        }
      />
      <Button
        buttonStyle={btnStyles}
        isLoading={isLoading}
        colorSpinierLoading={theme.white}
        activeOpacity={0.85}
        onPress={onSubmit(validateCredentialsLogin)}
        textContent={<Text style={textBtnStyles}>Iniciar sesión</Text>}
      />
    </View>
  );
};
