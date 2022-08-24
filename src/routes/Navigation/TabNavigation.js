import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ServiceScreen from '../../screen/ServiceScreen';
import ProfileScreen from '../../screen/ProfileScreen';
import OrderNavigation from './OrderScreenNav/OrderNavigation';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#128197',
        tabBarActiveBackgroundColor: '#E4FBFF',
        tabBarLabelStyle: {
          fontSize: 13,
          opacity: 0.5,
          marginBottom: 20,
        },
        tabBarItemStyle: {
          borderRadius: 25,
          marginHorizontal: 30,
          marginBottom: 20,
          marginTop: 10,
          paddingTop: 10,
        },
        tabBarStyle: {
          position: 'absolute',
          height: '15%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={ServiceScreen}
        options={
          {
            // tabBarIcon: ({focused}) => (
            //   <AntDesign
            //     name="home"
            //     size={30}
            //     color={focused ? '#128197' : '#000'}
            //   />
            // ),
          }
        }
      />
      <Tab.Screen
        name="Order"
        component={OrderNavigation}
        options={
          {
            // tabBarIcon: ({focused}) => (
            //   <AntDesign
            //     name="menuunfold"
            //     size={30}
            //     color={focused ? '#128197' : '#000'}
            //   />
            // ),
          }
        }
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={
          {
            // tabBarIcon: ({focused}) => (
            //   <AntDesign
            //     name="user"
            //     size={30}
            //     color={focused ? '#128197' : '#000'}
            //   />
            // ),
          }
        }
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
