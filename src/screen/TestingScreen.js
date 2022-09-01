import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CheckBox = () => {
  const [check, setCheck] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkBox}
        onPress={() => setCheck(pre => !pre)}>
        {check ? <AntDesign name="check" style={styles.icon} /> : null}
      </TouchableOpacity>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  checkBox: {
    height: 17,
    width: 17,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 18,
    color: '#fff',
  },
});
