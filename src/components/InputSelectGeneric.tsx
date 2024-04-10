import {Controller} from 'react-hook-form';
import {View, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import {lightTheme} from '../redux/slices/settings';
import {CustomInputSelector} from '../types/customComponents';
import {isIOS, widthFullScreen} from '../utils';

import {styleInput} from '.';
const dummy = [{label: 'Esperando data...', value: null}];

const Triangle = ({colorIcon}: {colorIcon: string}) => {
  return (
    <View
      style={{
        ...{
          width: 0,
          height: 0,
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          borderLeftWidth: 6,
          borderRightWidth: 6,
          borderBottomWidth: 10,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          transform: [{rotate: '180deg'}],
        },
        borderBottomColor: colorIcon,
      }}
    />
  );
};

export function InputSelectGeneric({
  borderColor,
  colorValueSelected,
  placeholder,
  placeholderTextColor,
  itemArr,
  name,
  control,
}: CustomInputSelector) {
  const {WrapperStandard, contentInputGeneric, helperText} = styleInput();
  return (
    <Controller
      shouldUnregister
      control={control}
      name={name}
      render={({field: {onChange, value = ''}, formState: {errors}}) => {
        return (
          <View style={[WrapperStandard]}>
            <View
              style={{
                ...contentInputGeneric,
                paddingHorizontal: 4,
                borderColor: borderColor,
              }}>
              <RNPickerSelect
                fixAndroidTouchableBug={true}
                useNativeAndroidPickerStyle={false}
                placeholder={{
                  label: placeholder,
                  value: null,
                  color: placeholderTextColor,
                }}
                style={{
                  inputIOS: {
                    fontSize: 16,
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    width: widthFullScreen / 1.147,
                    borderColor: 'transparent',
                    borderRadius: 4,
                    color: colorValueSelected,
                    paddingRight: 30, // to ensure the text is never behind the icon
                  },
                  inputAndroid: {
                    fontSize: 16,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    borderWidth: 0.5,
                    width: widthFullScreen / 1.147,
                    borderColor: 'transparent',
                    borderRadius: 8,
                    color: colorValueSelected,
                    paddingRight: 30, // to ensure the text is never behind the icon
                  },
                  iconContainer: {
                    top: isIOS() ? 18 : 17,
                    right: 10,
                  },
                }}
                onValueChange={onChange}
                value={typeof value === 'number' ? value.toString() : value}
                items={itemArr || dummy}
                // textInputProps={{ underlineColorAndroid: 'cyan' }}
                Icon={() => {
                  return <Triangle colorIcon={borderColor} />;
                }}
              />
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
