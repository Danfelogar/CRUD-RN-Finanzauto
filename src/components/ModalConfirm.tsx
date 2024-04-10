import {
  Modal,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../redux/store';

import {Button, modalConfirmStyles} from '.';

export function ModalConfirm({
  id,
  serviceDelete,
  isOpenModalWarningForDelete,
  changeStateModalWarningForDelete,
}: {
  id: number | string;
  //   serviceDelete: () => Promise<void>;
  serviceDelete: () => void;
  isOpenModalWarningForDelete: boolean;
  changeStateModalWarningForDelete: () => void;
}) {
  const {theme} = useSelector((state: RootState) => state.settings);

  const {containerModal, modalContent, btnStyle, backBtn} = modalConfirmStyles({
    theme,
  });
  return (
    <SafeAreaView style={{backgroundColor: theme.purpleLight}}>
      <StatusBar
        backgroundColor={theme.purpleLight}
        showHideTransition={'slide'}
        barStyle={'light-content'}
      />
      <Modal
        visible={isOpenModalWarningForDelete}
        transparent
        onRequestClose={changeStateModalWarningForDelete}
        animationType="fade">
        <View style={containerModal}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={changeStateModalWarningForDelete}
            style={backBtn}
          />
          <View style={modalContent}>
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 20,
                  color: theme.textPrimary,
                }}>
                Confirmación para borrar
              </Text>
            </View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '400',
                marginBottom: 0,
                color: theme.textSecondary,
              }}>
              {` Estas por borrar el usuario con ${id} de la lista si estas seguro de lo
              que haces dale en "Borrar" de lo contrario dale en "Regresar".`}
            </Text>
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Button
                buttonStyle={{...btnStyle, backgroundColor: theme.purple}}
                activeOpacity={0.9}
                onPress={changeStateModalWarningForDelete}
                textContent={
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      marginBottom: 0,
                      color: theme.white,
                    }}>
                    Regresar
                  </Text>
                }
              />
              <Button
                buttonStyle={btnStyle}
                activeOpacity={0.9}
                // isLoading={isLoading}
                onPress={serviceDelete}
                textContent={
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: 'bold',
                      marginBottom: 0,
                      color: theme.white,
                    }}>
                    Borrar
                  </Text>
                }
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
