import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const CustomInput = ({
  placeholder,
  secureTextEntry = false,
  value,
  setValue,
  input,
}) => {
  return (
    <View>
      <TextInput
        style={[styles.input, {...input}]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={'#fff'}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 17,
    color: '#fff',
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: '#08768B',
    opacity: 0.6,
    marginBottom: 20,
  },
});
export default CustomInput;
