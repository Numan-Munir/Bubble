import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Stores = ({
  adress,
  distance,
  time,
  MobileNo,
  dealerName,
  rate,
  store,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.rateStore} onPress={onPress}>
      <View>
        <Image style={styles.storeImage} source={store} />
      </View>

      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/icons/rattingStar.png')} />
          <Text style={{color: '#fff'}}>{rate}</Text>
        </View>

        <Text style={styles.dealerName}>{dealerName}</Text>

        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Image
            style={styles.call}
            source={require('../assets/icons/Call.png')}
          />
          <Text style={styles.callNo}>{MobileNo}</Text>
        </View>

        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Image source={require('../assets/icons/Clock.png')} />
          <Text style={{marginHorizontal: 7, color: '#fff', fontWeight: '300'}}>
            {time}
          </Text>
          <Image source={require('../assets/icons/locationSolid.png')} />
          <Text style={{marginHorizontal: 7, color: '#fff', fontWeight: '300'}}>
            {distance}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/icons/House.png')} />
          <Text style={styles.adress}>{adress}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rateStore: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#08768B',
    width: '100%',
    height: '25%',
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 12,
  },
  storeImage: {
    marginRight: 10,
  },
  dealerName: {
    color: '#fff',
    fontSize: 17,
    letterSpacing: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  callNo: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: '300',
  },
  adress: {
    flexShrink: 1,
    marginLeft: 5,
    color: '#fff',
    fontWeight: '300',
  },
});
export default Stores;
