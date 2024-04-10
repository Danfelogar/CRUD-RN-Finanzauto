import {useFormContext} from 'react-hook-form';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector} from 'react-redux';

import {stylesFormUpdateOrCreate} from '..';
import {Button, InputGeneric, InputSelectGeneric} from '../../../components';
import {RootState} from '../../../redux/store';
import {UserFormCreate, UserFormUpdate} from '../../../types/userData';
import {isIOS} from '../../../utils';

export const FormUpdateOrCreate = ({
  isLoading,
  isUpdate,
  onSubmitForUpdateOrCreate,
}: {
  isLoading: boolean;
  isUpdate: boolean;
  onSubmitForUpdateOrCreate: (
    formData: UserFormUpdate | UserFormCreate,
  ) => void;
}) => {
  const {theme} = useSelector((state: RootState) => state.settings);
  const {control, handleSubmit: onSubmit} = useFormContext<
    UserFormUpdate | UserFormCreate
  >();

  const {btnAction, wrapperInput} = stylesFormUpdateOrCreate({theme});
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={!isIOS() ? 10 : 140}
      extraHeight={!isIOS() ? 20 : 40}
      enableAutomaticScroll={true}>
      <View style={wrapperInput}>
        <InputGeneric
          control={control}
          name={'firstName'}
          borderColor={theme.textPrimary}
          placeholder="Primer nombre"
          keyboardType="default"
          placeholderTextColor={theme.textSecondary}
          inputColor={theme.textPrimary}
          autoCorrect={false}
        />
      </View>
      <View style={wrapperInput}>
        <InputGeneric
          control={control}
          name={'lastName'}
          borderColor={theme.textPrimary}
          placeholder="Apellido"
          keyboardType="default"
          placeholderTextColor={theme.textSecondary}
          inputColor={theme.textPrimary}
          autoCorrect={false}
        />
      </View>
      {!isUpdate && (
        <View style={wrapperInput}>
          <InputGeneric
            control={control}
            name={'email'}
            borderColor={theme.textPrimary}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            placeholderTextColor={theme.textSecondary}
            inputColor={theme.textPrimary}
            autoCorrect={false}
          />
        </View>
      )}

      {isUpdate && (
        <>
          <View style={wrapperInput}>
            <InputSelectGeneric
              backgroundColor={theme.background}
              colorValueSelected={theme.textPrimary}
              itemArr={[
                {value: 'male', label: 'Masculino'},
                {value: 'female', label: 'Femenino'},
                {value: 'other', label: 'Otro'},
              ]}
              control={control}
              name={'gender'}
              borderColor={theme.textPrimary}
              placeholder="Género"
              placeholderTextColor={theme.textSecondary}
            />
          </View>
          <View style={wrapperInput}>
            <InputGeneric
              control={control}
              name={'phone'}
              borderColor={theme.textPrimary}
              placeholder="teléfono"
              keyboardType="phone-pad"
              placeholderTextColor={theme.textSecondary}
              inputColor={theme.textPrimary}
              autoCorrect={false}
            />
          </View>
          <View style={wrapperInput}>
            <InputSelectGeneric
              backgroundColor={theme.background}
              colorValueSelected={theme.textPrimary}
              itemArr={[
                {value: 'mr', label: 'Sr.'},
                {value: 'ms', label: 'Sra.'},
                {value: 'mrs', label: 'Sra.'},
                {value: 'miss', label: 'Srta.'},
                {value: 'dr', label: 'Dr.'},
              ]}
              control={control}
              name={'title'}
              borderColor={theme.textPrimary}
              placeholder="Titulo"
              placeholderTextColor={theme.textSecondary}
            />
          </View>
        </>
      )}
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          buttonStyle={btnAction}
          isLoading={isLoading}
          onPress={onSubmit(onSubmitForUpdateOrCreate)}
          activeOpacity={0.9}
          textContent={
            <Text
              style={{fontSize: 17, fontWeight: 'bold', color: theme.white}}>
              {!isUpdate ? 'Crear Usuario' : 'Actualizar Usuario'}
            </Text>
          }
        />
      </View>
    </KeyboardAwareScrollView>
  );
};
