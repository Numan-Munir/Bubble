import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import color from '../color/color';

const RecurringScreen = ({navigation}) => {
  const onWeeklyPress = () => {};
  const onBiWeekPress = () => {
    navigation.navigate('BiWeekly');
  };
  const onThreeWeekPress = () => {};
  const onMonthlyPress = () => {};
  const onBack = () => {
    navigation.navigate('Service');
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text onPress={onBack} style={{top: 3}}>
          <Image source={require('../assets/icons/BackIcon.png')} />
        </Text>
        <Text style={styles.title}>Recurring Options</Text>
      </View>
      <TouchableOpacity style={styles.child}>
        <Text style={styles.text}>Weekly</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.childTwo} onPress={onBiWeekPress}>
        <View style={styles.grandChild}>
          <Text>Active</Text>
        </View>
        <Text style={styles.text}>Bi - Weekly</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.child}>
        <Text style={styles.text}>3 Weekes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.child}>
        <Text style={styles.text}>Monthly</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
    paddingHorizontal: 20,
    paddingTop: 45,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    marginBottom: 30,
  },
  child: {
    backgroundColor: '#08768B',
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  text: {
    color: '#fff',
    fontSize: 25,
  },
  childTwo: {
    backgroundColor: '#65B4CE',
    borderWidth: 2,
    borderColor: '#ABE9FE',
    borderRadius: 20,
    marginVertical: 15,
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  grandChild: {
    backgroundColor: '#ABE9FE',
    borderRadius: 6,
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -10,
    left: 20,
    color: '#08768B',
  },
});
export default RecurringScreen;
