import {StackScreenProps} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

import {HandlerImage, StandardWrapper} from '../../components';
import {RootState} from '../../redux/store';
import {RootStackPrivateParams} from '../../types/RootStackMainParams';
import {TypeImage} from '../../utils';
import {convertPrefixesToSpanish} from '../../utils/parsingTitle';

import {stylesDetails} from './styles';
import {useDetails} from './useDetails';
type NavigationProp = StackScreenProps<RootStackPrivateParams, 'Details'>;

export const Details = ({route, navigation}: NavigationProp) => {
  const {id} = route.params;
  const {theme} = useSelector((state: RootState) => state.settings);

  const {
    //state
    initialValuesForUpdate,
    loading,
    //methods
    //functions
  } = useDetails({id});
  const {
    mainWrapper,
    containerBackgroundPoints,
    headerWrapper,
    titleHeader,
    circlePhoto,
    textInformation,
  } = stylesDetails({theme});
  return (
    <StandardWrapper>
      <View style={mainWrapper}>
        <HandlerImage
          typeFile={TypeImage.Local}
          imgStyle={containerBackgroundPoints}
          imageSource={require('../../assets/backgroundPoint.png')}
        />
        <View style={{width: '100%', flexDirection: 'column'}}>
          <View style={headerWrapper}>
            <FontAwesome
              onPress={() => {
                navigation.goBack();
              }}
              name="arrow-circle-left"
              size={22}
              color={theme.textPrimary}
            />
            {!loading && (
              <Text style={titleHeader}>
                {` ${convertPrefixesToSpanish(
                  `${initialValuesForUpdate.title} ${initialValuesForUpdate.firstName} ${initialValuesForUpdate.lastName}`,
                )} `}
              </Text>
            )}
          </View>
        </View>
        {initialValuesForUpdate?.picture && !loading && (
          <HandlerImage
            typeFile={TypeImage.Remote}
            imgStyle={circlePhoto}
            imageSource={{uri: initialValuesForUpdate?.picture}}
          />
        )}
        {initialValuesForUpdate && (
          <View style={{width: '100%'}}>
            <Text style={textInformation}>
              genero: {initialValuesForUpdate?.gender}
            </Text>
            <Text style={textInformation}>
              Fecha de nacimiento:{initialValuesForUpdate?.dateOfBirth}
            </Text>
            <Text style={textInformation}>
              Correo: {initialValuesForUpdate?.email}
            </Text>
            <Text style={textInformation}>
              Teléfono: {initialValuesForUpdate?.phone}
            </Text>
          </View>
        )}
      </View>
    </StandardWrapper>
  );
};
