import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';

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
    </View>
  );
};

const styles = StyleSheet.create({});
export default IconTesting;
