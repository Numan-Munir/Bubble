import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import color from '../../color/color';

const clickHere = () => {
  alert('Button Clicked');
};
const Button = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={clickHere}>
        <Text style={styles.buttonText}>Click here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.PRIMARY_LIGHT,
    height: 50,
    width: 120,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default Button;
