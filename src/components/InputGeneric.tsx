import {Controller} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';

import {lightTheme} from '../redux/slices/settings';
import {CustomInputGeneric} from '../types/customComponents';

import {styleInput} from '.';

export function InputGeneric({
  keyboardType,
  borderColor,
  firstIcon,
  placeholder,
  placeholderTextColor,
  autoCorrect,
  isSecretText,
  inputColor,
  inputStyle,
  lastIcon,
  multiline = false,
  multilineStyle,
  heightMultiline,
  name,
  control,
}: CustomInputGeneric) {
  const {WrapperStandard, contentInput, contentInputGeneric, helperText} =
    styleInput();
  return (
    <Controller
      shouldUnregister
      control={control}
      name={name}
      render={({field: {onChange, value = ''}, formState: {errors}}) => {
        return (
          <View
            style={[WrapperStandard, multilineStyle ? multilineStyle : null]}>
            <View
              style={{
                ...contentInputGeneric,
                borderColor: borderColor ? borderColor : 'transparent',
                height: heightMultiline ? heightMultiline : 'auto',
                ...(inputStyle ? inputStyle : {}),
              }}>
              {firstIcon && firstIcon}
              <TextInput
                style={{
                  ...contentInput,
                  color: inputColor,
                  maxWidth:
                    firstIcon && lastIcon
                      ? '85%'
                      : firstIcon || lastIcon
                      ? '92%'
                      : '100%',
                }}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                autoCorrect={autoCorrect}
                secureTextEntry={isSecretText || false}
                keyboardType={keyboardType || 'default'}
                onChangeText={onChange}
                value={value}
                multiline={multiline}
              />
              {lastIcon && lastIcon}
            </View>
            {!!errors[name] && (
              <Text style={{...helperText, color: lightTheme.red}}>
                {errors[name]?.message as string}
              </Text>
            )}
          </View>
        );
      }}
    />
  );
}
