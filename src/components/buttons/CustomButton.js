import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({title, onPress, style}) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.container, {...style}]}
        onPress={onPress}>
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#65B4CE',
    padding: 16,
    borderRadius: 50,
    marginBottom: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 1,
    fontFamily: 'Comfortaa Light',
  },
});
