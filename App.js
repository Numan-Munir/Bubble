import 'react-native-gesture-handler';
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import React from 'react';
import color from './src/color/color';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/routes/Navigation/StackNavigation/StackNavigation';
import TestingScreen from './src/screen/TestingScreen';
import CheckBox from './src/screen/TestingScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      {/* <CheckBox /> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.PRIMARY,
    flex: 1,
  },
});
export default App;
