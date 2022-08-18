import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import color from '../color/color';

const FAQScreen = ({navigation}) => {
  const onBack = () => {
    navigation.navigate('Service');
  };
  const onMinusPress = () => {
    alert('Minus Button is Pressed');
  };
  const onPlusPresss = () => {
    alert('New Tab is Added');
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text onPress={onBack} style={{top: 4}}>
          <Image source={require('../assets/icons/BackIcon.png')} />
        </Text>
        <Text style={styles.title}>FAQ</Text>
      </View>

      <View style={styles.instrustion}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.navigateTitle}>How to Navigate in Bubble?</Text>
          <TouchableOpacity onPress={onMinusPress}>
            <Image source={require('../assets/icons/Minus.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>
          Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci
          porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.
          Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi,
          pretium ut lacinia in, elementum id enim.
        </Text>
      </View>

      <View style={styles.services}>
        <Text style={styles.servicesTitle}>
          Can I add a new Courier to my team?
        </Text>
        <TouchableOpacity onPress={onPlusPresss}>
          <Image source={require('../assets/icons/Plus.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.services}>
        <Text style={styles.servicesTitle}>Where to change the language?</Text>
        <TouchableOpacity onPress={onPlusPresss}>
          <Image source={require('../assets/icons/Plus.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.services}>
        <Text style={styles.servicesTitle}>Can I add a new to my team? </Text>
        <TouchableOpacity onPress={onPlusPresss}>
          <Image source={require('../assets/icons/Plus.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.services}>
        <Text style={styles.servicesTitle}>Where to change the language?</Text>
        <TouchableOpacity onPress={onPlusPresss}>
          <Image source={require('../assets/icons/Plus.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    color: '#fff',
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 30,
  },
  instrustion: {
    backgroundColor: '#CFF6FF',
    height: '35%',
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 30,
    marginBottom: 25,
  },
  navigateTitle: {
    color: '#484848',
    fontSize: 21,
  },
  description: {
    marginTop: 20,
    fontSize: 17,
    color: '#484848CC',
  },
  services: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    height: '9%',
    backgroundColor: '#08768B',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ABE9FE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
  },
  servicesTitle: {
    color: '#fff',
    fontSize: 17,
    marginRight: 10,
  },
});
export default FAQScreen;
