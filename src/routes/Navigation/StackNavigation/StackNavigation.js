import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SigninScreen from '../../../screen/SigninScreen';
import ResetPassword from '../../../screen/SigninScreen';
import VerificationScreen from '../../../screen/SigninScreen';
import ServiceScreen from '../../../screen/ServiceScreen';
import RecurringScreen from '../../../screen/RecurringScreen';
import BiWeekly from '../../../screen/BiWeekly';
import PreferenceScreen from '../../../screen/PreferenceScreen';
import DetailPrefrenceScreen from '../../../screen/DetailPrefrenceScreen';
import SettingScreen from '../../../screen/SettingScreen';
import ContactScreen from '../../../screen/ContactScreen';
import FAQScreen from '../../../screen/FAQScreen';
import DrawerNavigation from '../../Navigation/DrawerNavigation/DrawerNavigation';
import IconTesting from '../../../screen/IconTesting';
import SupportChat from '../../../screen/SupportChat';
import OrderSupport from '../../../screen/Order/OrderSupport';
import ProfileInfo from '../../../screen/Profile/ProfileInfo';
import BubbleScreen from '../../../screen/BubbleScreen';
import WellcomeScreen from '../../../screen/WellcomeScreen';
import LaundryScreen from '../../../screen/LaundryScreen';
import PickUpScreen from '../../../screen/PickUpScreen';
import DeliveryScreen from '../../../screen/DeliveryScreen';
import Swiper from 'react-native-swiper';
import SignupScreen from '../../../screen/SignupScreen';
import color from '../../../color/color';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Drawer">
      <Stack.Screen
        name="Bubble"
        component={BubbleScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Drawer"
        component={DrawerNavigation}
      />
      <Stack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{
          title: `Let's Get Started`,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="WellCome"
        component={WellcomeScreen}
        options={{
          headerTintColor: '#fff',
          title: ` `,
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{
          headerTintColor: '#fff',
          title: ` `,
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Laundry"
        component={LaundryScreen}
        options={{
          headerTintColor: '#fff',
          title: ` `,
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="PickUp"
        component={PickUpScreen}
        options={{
          headerTintColor: '#fff',
          title: ` `,
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SigninScreen}
        options={{
          title: `Sign In`,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          title: `Reset Password`,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Verification"
        component={VerificationScreen}
        options={{
          title: `Verification`,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Home"
        component={ServiceScreen}
        options={{
          headerTintColor: '#fff',
          title: ` `,
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Recurring"
        component={RecurringScreen}
        options={{
          headerShown: false,
          title: `Recurring Options`,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="BiWeekly"
        component={BiWeekly}
        options={{
          headerShown: false,
          title: `Recurring Options`,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Preferences"
        component={PreferenceScreen}
        options={{
          headerShown: false,
          title: ``,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailPrefrenceScreen}
        options={{
          headerShown: false,
          title: ``,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerShown: false,
          title: ``,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          headerShown: false,
          title: ``,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="FAQ"
        component={FAQScreen}
        options={{
          headerShown: false,
          title: ``,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Icon"
        component={IconTesting}
        options={{
          headerShown: false,
          title: ``,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="SupportChat"
        component={SupportChat}
        options={{
          headerShown: false,
          title: ``,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="OrderSupport"
        component={OrderSupport}
        options={{
          headerShown: false,
          title: ``,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="ProfileInfo"
        component={ProfileInfo}
        options={{
          headerShown: false,
          title: ``,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: color.PRIMARY,
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
