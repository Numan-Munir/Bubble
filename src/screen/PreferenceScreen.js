import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import Stores from '../components/Stores';
import color from '../color/color';
import {Preferences} from '../services/data';

const PreferenceScreen = ({navigation}) => {
  const onBack = () => {
    navigation.navigate('Main');
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

      <FlatList
        data={Preferences.performances}
        renderItem={({item}) => (
          <Stores
            onPress={onStorePress}
            adress={item.adress}
            distance={item.distance}
            time={item.time}
            MobileNo={item.MobileNo}
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
