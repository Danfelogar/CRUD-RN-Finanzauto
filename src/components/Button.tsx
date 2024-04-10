import {ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native';

import {lightTheme} from '../redux/slices/settings';
import {CustomButton} from '../types/customComponents';

export const Button = ({
  buttonStyle,
  activeOpacity,
  onPress,
  firstIcon,
  textContent,
  lastIcon,
  isLoading = false,
  colorSpinierLoading,
}: CustomButton) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      activeOpacity={activeOpacity || 0.5}
      onPress={onPress}
      style={{...buttonStyle}}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={colorSpinierLoading ? colorSpinierLoading : lightTheme.orange}
        />
      ) : (
        <>
          {firstIcon && firstIcon}
          {textContent && textContent}
          {lastIcon && lastIcon}
        </>
      )}
    </TouchableOpacity>
  );
};
