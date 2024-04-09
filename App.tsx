/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <Icon name="rocket" size={30} color="#900" />
      <Text>Hello world with react native vector icons!</Text>
    </View>
  );
}

export default App;
