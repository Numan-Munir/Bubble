import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import color from '../color/color';

const DetailPrefrenceScreen = ({navigation}) => {
  const [check, setCheck] = useState(false);
  const onBack = () => {
    navigation.navigate('Preferences');
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text onPress={onBack} style={{left: -90}}>
          <Image source={require('../assets/icons/BackIcon.png')} />
        </Text>
        <Text style={styles.title}>Preferences</Text>
      </View>
      <Text style={styles.dealerName}>Thiam’s Laundromat</Text>

      <View style={styles.detergent}>
        <Text style={styles.detergentTitle}>Detergent:</Text>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          <Text style={styles.item}>Tide</Text>
          <Text style={styles.item}>Gain</Text>
          <Text style={styles.item}>Hammer</Text>
          <Text style={styles.item}>Arm</Text>
          <Text style={styles.item}>Persil</Text>
          <Text style={styles.item}>Cheer</Text>
          <Text style={styles.item}>Purex</Text>
        </View>
      </View>

      <View style={styles.temperature}>
        <Text style={styles.temperatureTitle}>Temperature:</Text>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          <Text style={styles.item}>Hot / Cold</Text>
          <Text style={styles.item}>Warm / Cold</Text>
          <Text style={styles.item}>Cold / Cold</Text>
          <Text style={styles.item}>Permanent press </Text>
        </View>
      </View>

      <View style={styles.washCycle}>
        <Text style={styles.washCycleTitle}>Wash Cycle :</Text>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          <Text style={styles.item}>Normal</Text>
          <Text style={styles.item}>Delicates</Text>
          <Text style={styles.item}>Speed wash </Text>
          <Text style={styles.item}>Permanent Press </Text>
          <Text style={styles.item}>Rinse and Spin</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: color.PRIMARY,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    marginBottom: 8,
    left: -90,
  },
  dealerName: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 20,
    fontWeight: '400',
    fontFamily: 'Comfortaa Light',
  },
  detergent: {
    flex: 4,
    backgroundColor: '#08768B',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  temperature: {
    flex: 3,
    backgroundColor: '#08768B',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  washCycle: {
    flex: 4,
    backgroundColor: '#08768B',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  detergentTitle: {
    color: '#fff',
    fontSize: 18,
    fontStyle: 'italic',
  },
  detergentTitle: {
    color: '#fff',
    fontSize: 18,
    fontStyle: 'italic',
  },
  detergentTitle: {
    color: '#fff',
    fontSize: 17,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'Comfortaa Light',
  },
  checkBox: {
    backgroundColor: '#fff',
    height: 20,
    width: 20,
  },
  item: {
    color: '#fff',
    fontSize: 15,
    marginRight: 50,
    marginTop: 20,
    marginBottom: 15,
    fontFamily: 'Comfortaa Light',
  },
  temperatureTitle: {
    color: '#fff',
    fontSize: 17,
    fontStyle: 'italic',
    fontFamily: 'Comfortaa Light',
  },
  washCycleTitle: {
    color: '#fff',
    fontSize: 17,
    fontStyle: 'italic',
    fontFamily: 'Comfortaa Light',
  },
});
export default DetailPrefrenceScreen;
