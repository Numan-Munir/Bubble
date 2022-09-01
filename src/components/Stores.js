import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../ui';

const {height, width} = Dimensions.get('window');

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
  // alert();
  return (
    <TouchableOpacity style={styles.rateStore} onPress={onPress}>
      <View>
        <Image style={styles.storeImage} source={{uri: store}} />
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
          <Text
            style={{
              marginTop: 4,
              marginHorizontal: 7,
              color: '#fff',
              fontWeight: '300',
              fontFamily: 'Comfortaa Light',
            }}>
            {time}
          </Text>
          <Image source={require('../assets/icons/locationSolid.png')} />
          <Text
            style={{
              marginHorizontal: 7,
              marginTop: 4,
              color: '#fff',
              fontWeight: '300',
              fontFamily: 'Comfortaa Light',
            }}>
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
    width: width / 1.07,
    // width: wp(95),
    height: height / 4.8,
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 12,
  },
  storeImage: {
    height: 148.13,
    width: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  dealerName: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 1,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: '500',
    fontFamily: 'Comfortaa Light',
  },
  callNo: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: '300',
    fontFamily: 'Comfortaa Light',
  },
  adress: {
    marginLeft: 5,
    color: '#fff',
    fontWeight: '300',
    lineHeight: 20,
    letterSpacing: 1,
    fontFamily: 'Comfortaa Light',
  },
});
export default Stores;
