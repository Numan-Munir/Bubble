import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import Stores from '../components/Stores';
import color from '../color/color';

const PreferenceScreen = ({navigation}) => {
  const onBack = () => {
    navigation.navigate('Main');
  };
  const onStorePress = () => {
    navigation.navigate('Detail');
  };

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      dealerName: 'Cagiso Rabada',
      adress: '1465 5th Avenue, South Africa, 10035, Cape Town',
      mobileNo: '783-198-83273',
      distance: '170 Miles',
      time: '9am-9pm',
      storeImage: require('../assets/images/storeImage.png'),
      rate: '(4.3)',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      dealerName: 'A.B de Viller',
      adress: '1465 5th Avenue, South Africa, 10035, Cape Town',
      mobileNo: '236-178-02086',
      distance: '50 Miles',
      time: '6am-6pm',
      storeImage: require('../assets/images/snazzy-image.png'),
      rate: '(4.9)',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      dealerName: 'Babar Azam',
      adress: '1465 5th Avenue, Pakistan, 10035, Lahore',
      mobileNo: '0335-4509782',
      distance: '110 Miles',
      time: '1am-9pm',
      storeImage: require('../assets/images/laundryRoom.png'),
      rate: '(4.0)',
    },
  ];

  const store = () => {
    <Stores />;
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

      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Stores
            onPress={onStorePress}
            adress={item.adress}
            distance={item.distance}
            time={item.time}
            MobileNo={item.mobileNo}
            dealerName={item.dealerName}
            rate={item.rate}
            store={item.storeImage}
          />
        )}
        keyExtractor={item => item.id}
        style={{
          flex: 1,
          width: '100%',
          paddingHorizontal: 10,
        }}
      />
      {/* <Stores
        onPress={onStorePress}
        adress={'1465 5th Avenue, New York, 10035, NY'}
        distance={'10 Miles'}
        time={'9am-9pm'}
        MobileNo={'646-879-09876'}
        dealerName={'Thiam’s Laundromat'}
        rate={'(4.5)'}
        store={require('../assets/images/storeImage.png')}
      /> */}
      {/* <Stores
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
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: color.PRIMARY,
    // paddingHorizontal: 20,
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
    fontFamily: 'Comfortaa Light',
  },
});
export default PreferenceScreen;
