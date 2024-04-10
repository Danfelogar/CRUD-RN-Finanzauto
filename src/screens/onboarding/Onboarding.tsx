import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {Button, HandlerImage, StandardWrapper} from '../../components';
import {setIsShowOnboarding} from '../../redux/slices/auth';
import {RootState, useAppDispatch} from '../../redux/store';
import {TypeImage} from '../../utils';

import {stylesOnboarding} from '.';

export const Onboarding = () => {
  const {theme} = useSelector((state: RootState) => state.settings);
  const dispatch = useAppDispatch();

  const {
    mainWrapper,
    containerBackgroundPoints,
    title,
    logoImg,
    btnStyles,
    textBtnStyles,
  } = stylesOnboarding({
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
        <Text style={title}>
          La mejor forma de gestionar tus usuarios a un tab solo en
        </Text>

        <HandlerImage
          typeFile={TypeImage.Local}
          imgStyle={logoImg}
          imageSource={require('../../assets/dietchGroupLogo.jpeg')}
        />
        <Button
          buttonStyle={btnStyles}
          activeOpacity={0.9}
          onPress={() => {
            dispatch(setIsShowOnboarding());
          }}
          textContent={<Text style={textBtnStyles}>Iniciar Sesión</Text>}
        />
      </View>
    </StandardWrapper>
  );
};
