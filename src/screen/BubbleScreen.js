import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import color from '../color/color';

const BubbleScreen = ({navigation}) => {
  useEffect(() => {
    timeOut;
  }, []);

  const timeOut = setTimeout(() => {
    navigation.replace('WellCome');
  }, 5000);

  return (
    <View style={styles.container}>
      <Image
        style={styles.BubblesIcon}
        source={require('../assets/icons/Bubbles-Icon.png')}
        resizeMode="contain"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
    paddingHorizontal: 20,
  },
  BubblesIcon: {
    alignSelf: 'center',
    marginBottom: 100,
    top: '15%',
    height: 300,
    width: 300,
  },
});

export default BubbleScreen;
