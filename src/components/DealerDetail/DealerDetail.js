import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import color from '../../color/color';
import {fonts} from 'react-native-elements/dist/config';

const DealerDetail = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.title}>Thiam’s Laundromat</Text>

        <Image source={require('../../assets/icons/rattingStar.png')} />
        <Text
          style={{
            color: '#fff',
            fontSize: 15,
            fontFamily: 'Comfortaa Light',
            fontWeight: '500',
            letterSpacing: 1,
          }}>
          (4.5)
        </Text>
      </View>
      <Text style={styles.order}>Order #THI3465LA</Text>
      <Text style={styles.PickUp}>Pick-up on 10.30 @ 4.45 pm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: '15%',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#08768B',
    marginVertical: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    letterSpacing: 1,
    fontFamily: 'Comfortaa Light',
  },
  order: {
    color: '#fff',
    marginTop: 10,
    fontSize: 15,
    letterSpacing: 1,
    fontFamily: 'Comfortaa Light',
  },
  PickUp: {
    color: '#fff',
    marginTop: 10,
    fontSize: 15,
    letterSpacing: 1,
    fontFamily: 'Comfortaa Light',
  },
});
export default DealerDetail;
