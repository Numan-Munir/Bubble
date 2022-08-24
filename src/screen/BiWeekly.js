import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import color from '../color/color';
import CustomButton from '../components/buttons/CustomButton';
import Stores from '../components/Stores';

const BiWeekly = ({navigation}) => {
  const onRecurringPress = () => {
    alert('Cancel Recurring Options');
  };

  const onNextPress = () => {
    alert('Cancel Next Schedule');
  };
  const onBack = () => {
    navigation.navigate('Recurring');
  };

  return (
    <View style={styles.contaier}>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text onPress={onBack} style={{left: -60}}>
          <Image source={require('../assets/icons/BackIcon.png')} />
        </Text>
        <Text style={styles.title}>Recurring Options</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Text style={styles.BiStyle}>Bi - Weekly</Text>
        <Image
          style={styles.penStyle}
          source={require('../assets/icons/penIcon.png')}
        />
      </View>
      <Stores
        adress={'1465 5th Avenue, New York, 10035, NY'}
        distance={'10 Miles'}
        time={'9am-9pm'}
        MobileNo={'646-879-09876'}
        dealerName={'Thiam’s Laundromat'}
        rate={'(4.5)'}
        store={require('../assets/images/storeImage.png')}
      />
      <Text style={styles.schedule}>Your next upcoming schedule:</Text>

      <View style={styles.scheduleView}>
        <View style={styles.PickDate}>
          <Text style={styles.pickTitle}>Pick Up Date</Text>
          <Text style={styles.pickD}>Date: 13 April 2021</Text>
          <Text style={styles.pickD}>Day : Thusday</Text>
          <Text style={styles.pickD}>Time : 11am - 12pm</Text>
        </View>

        <View style={styles.PickDate}>
          <Text style={styles.pickTitle}>Delivery Date</Text>
          <Text style={styles.pickD}>Date: 14 April 2021</Text>
          <Text style={styles.pickD}>Day : Friday</Text>
          <Text style={styles.pickD}>Time : 11am - 12pm</Text>
        </View>
      </View>
      <CustomButton
        onPress={onNextPress}
        style={styles.cancelBtn}
        title={'Cancel next schedule'}
      />
      <CustomButton
        onPress={onRecurringPress}
        style={styles.recurringBtn}
        title={'Cancel Recurring options'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: color.PRIMARY,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    marginBottom: 8,
    left: -65,
  },
  BiStyle: {
    fontSize: 23,
    color: '#fff',
    marginRight: 4,
    fontFamily: 'Comfortaa Light',
    fontWeight: '400',
  },

  schedule: {
    fontSize: 20,
    marginTop: 30,
    alignSelf: 'flex-start',
    color: '#fff',
    fontFamily: 'Comfortaa Light',
  },
  scheduleView: {
    flexDirection: 'row',
    width: '100%',
    height: '20%',
    marginTop: 30,
  },
  PickDate: {
    justifyContent: 'center',
    backgroundColor: '#08768B',
    width: '50%',
    borderRadius: 20,
    marginRight: 10,
    paddingHorizontal: 20,
  },
  pickTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 5,
    fontFamily: 'Comfortaa Light',
  },
  pickD: {
    color: '#fff',
    fontWeight: '300',
    marginVertical: 6,
    fontSize: 15,
    alignSelf: 'flex-start',
    fontFamily: 'Comfortaa Light',
  },
  cancelBtn: {
    width: 350,
    marginTop: 50,
  },
  recurringBtn: {
    backgroundColor: '#08768B',
    borderWidth: 1,
    borderColor: '#ABE9FE',
    width: 350,
    marginTop: 8,
  },
});
export default BiWeekly;
