import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Stores from '../components/Stores';
import color from '../color/color';

const PreferenceScreen = ({navigation}) => {
  const onBack = () => {
    navigation.navigate('Service');
  };
  const onStorePress = () => {
    navigation.navigate('Detail');
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text onPress={onBack} style={{left: -90}}>
          <Image source={require('../assets/icons/BackIcon.png')} />
        </Text>
        <Text style={styles.title}>Preference</Text>
      </View>

      <Text style={styles.savedText}>Tap to view saved Preferences</Text>
      <Stores
        onPress={onStorePress}
        adress={'1465 5th Avenue, New York, 10035, NY'}
        distance={'10 Miles'}
        time={'9am-9pm'}
        MobileNo={'646-879-09876'}
        dealerName={'Thiam’s Laundromat'}
        rate={'(4.5)'}
        store={require('../assets/images/storeImage.png')}
      />
      <Stores
        adress={'1465 5th Avenue, New York, 10035, NY'}
        distance={'10 Miles'}
        time={'9am-9pm'}
        MobileNo={'646-879-09876'}
        dealerName={'Alpha’s Laundromat'}
        rate={'(4.5)'}
        store={require('../assets/images/snazzy-image.png')}
      />
      <Stores
        adress={'1465 5th Avenue, New York, 10035, NY'}
        distance={'10 Miles'}
        time={'9am-9pm'}
        MobileNo={'646-879-09876'}
        dealerName={'Nanguy’s Laundromat'}
        rate={'(4.5)'}
        store={require('../assets/images/laundryRoom.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    left: -90,
  },
  savedText: {
    color: '#fff',
    fontSize: 17,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '400',
  },
});
export default PreferenceScreen;
