import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import color from '../../color/color';
import DealerDetail from '../../components/DealerDetail/DealerDetail';
import OrderSupport from './OrderSupport';
import {TouchableOpacity} from 'react-native-gesture-handler';

const OrderHistory = ({navigation}) => {
  const onHistory = () => {
    navigation.navigate('History');
  };
  const onOrder = () => {
    navigation.navigate('Order');
  };
  const onSupport = () => {
    navigation.navigate('Support');
  };
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.navigationBtn}>
        <View style={styles.history}>
          <Text style={styles.navBtn}>History</Text>
        </View>

        <View style={styles.order}>
          <Text style={styles.navBtn}>Order</Text>
        </View>

        <View style={styles.support}>
          <Text style={styles.navBtn}>Support</Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          marginVertical: 12,
          alignItems: 'center',
          marginRight: 15,
          alignSelf: 'flex-end',
        }}>
        <Image source={require('../../assets/icons/Settings-2.png')} />
        <Text
          style={{
            opacity: 0.6,
            color: '#fff',
            marginHorizontal: 10,
            fontFamily: 'Comfortaa Light',
          }}>
          Filter :
        </Text>
        <Text
          style={{
            color: '#fff',
            marginRight: 10,
            fontFamily: 'Comfortaa Light',
          }}>
          Sort by day
        </Text>
        <Image source={require('../../assets/icons/Vector.png')} />
      </View>
      <DealerDetail />
      <DealerDetail />
      <DealerDetail />
      <DealerDetail />
      <DealerDetail />
      <DealerDetail />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
    paddingHorizontal: 15,
  },
  OrderText: {
    color: '#fff',
    fontSize: 25,
  },
  navigationBtn: {
    height: 50,
    width: 360,
    borderWidth: 1,
    borderColor: '#65B4CE',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 10,
  },
  history: {
    height: '100%',
    width: '33.33%',
    borderRadius: 50,
    backgroundColor: '#65B4CE',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  order: {
    paddingHorizontal: 20,
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  support: {
    paddingHorizontal: 20,
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBtn: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1,
    fontFamily: 'Comfortaa Light',
  },
});
export default OrderHistory;
