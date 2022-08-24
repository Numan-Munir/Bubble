import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import AntDesign from 'react-native-vector-icons/AntDesign';

const IconTesting = () => {
  return (
    <View>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#CFF6FF"
        maximumTrackTintColor="#65B4CE"
      />
      <AntDesign name="home" size={20} color={'red'} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default IconTesting;
