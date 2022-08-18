import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ServiceScreen from '../../screen/ServiceScreen';
import OrderScreen from '../../screen/OrderScreen';
import ProfileScreen from '../../screen/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={ServiceScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
