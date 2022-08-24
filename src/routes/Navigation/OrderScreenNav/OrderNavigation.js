import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import OrderHistory from '../../../screen/Order/OrderHistory';
import OrderScreen from '../../../screen/OrderScreen';
import OrderSupport from '../../../screen/Order/OrderSupport';
import Swiper from 'react-native-swiper';

const Stack = createNativeStackNavigator();
const OrderNavigation = () => {
  return (
    <Swiper>
      <OrderHistory />
      <OrderScreen />
      <OrderSupport />
      {/* <Stack.Navigator
        initialRouteName="OrderScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="History" component={OrderHistory} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
      </Stack.Navigator> */}
    </Swiper>
  );
};

export default OrderNavigation;
