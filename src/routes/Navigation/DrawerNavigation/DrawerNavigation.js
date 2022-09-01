import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import PreferenceScreen from '../../../screen/PreferenceScreen';
import RecurringScreen from '../../../screen/RecurringScreen';
import SettingScreen from '../../../screen/SettingScreen';
import CustomDrawer from '../../../components/CustomDrawer';
import FAQScreen from '../../../screen/FAQScreen';
import ContactScreen from '../../../screen/ContactScreen';
import Signout from '../../../screen/Signout';
import TabNavigation from '../TabNavigation';
import color from '../../../color/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {color: '#fff'},
        drawerType: 'front',
        drawerActiveTintColor: color.PRIMARY,
        drawerItemStyle: {
          borderBottomColor: 'rgba(255, 255, 255, 0.1)',
          borderBottomWidth: 0.5,
        },
        drawerLabelStyle: {
          fontFamily: 'Comfortaa Light',
          fontSize: 15,
          color: '#fff',
          fontWeight: '300',
          marginLeft: -25,
        },
      }}
      initialRouteName="Main"
      backBehavior="order">
      <Drawer.Screen
        name="Recurring options"
        component={RecurringScreen}
        options={{
          drawerIcon: () => {
            return (
              <>
                <Ionicons
                  name="ios-options"
                  style={{fontSize: 24, color: '#fff'}}
                />
                <AntDesign
                  name="right"
                  style={{
                    fontSize: 13,
                    color: '#fff',
                    right: -196,
                  }}
                />
              </>
            );
          },
        }}
      />
      <Drawer.Screen
        name="Preferences"
        component={PreferenceScreen}
        options={{
          drawerIcon: () => {
            return (
              <>
                <Ionicons
                  name="ios-person-outline"
                  style={{fontSize: 22, color: '#fff'}}
                />
                <AntDesign
                  name="right"
                  style={{
                    fontSize: 13,
                    color: '#fff',
                    right: -198,
                  }}
                />
              </>
            );
          },
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          drawerIcon: () => {
            return (
              <>
                <AntDesign
                  name="setting"
                  style={{fontSize: 22, color: '#fff'}}
                />
                <AntDesign
                  name="right"
                  style={{
                    fontSize: 13,
                    color: '#fff',
                    right: -198,
                  }}
                />
              </>
            );
          },
        }}
      />

      <Drawer.Screen
        name="Contact Support"
        component={ContactScreen}
        options={{
          drawerIcon: () => {
            return (
              <>
                <AntDesign
                  name="message1"
                  style={{fontSize: 20, color: '#fff'}}
                />
                <AntDesign
                  name="right"
                  style={{
                    fontSize: 13,
                    color: '#fff',
                    right: -200,
                  }}
                />
              </>
            );
          },
        }}
      />

      <Drawer.Screen
        name="FAQ"
        component={FAQScreen}
        options={{
          drawerIcon: () => {
            return (
              <>
                <AntDesign
                  name="questioncircleo"
                  style={{fontSize: 20, color: '#fff'}}
                />
                <AntDesign
                  name="right"
                  style={{
                    fontSize: 13,
                    color: '#fff',
                    right: -200,
                  }}
                />
              </>
            );
          },
        }}
      />

      <Drawer.Screen
        name="Sign Out"
        component={Signout}
        options={{
          drawerIcon: () => {
            return (
              <>
                <AntDesign
                  name="poweroff"
                  style={{fontSize: 20, color: '#fff'}}
                />
                <AntDesign
                  name="right"
                  style={{
                    fontSize: 13,
                    color: '#fff',
                    right: -200,
                  }}
                />
              </>
            );
          },
        }}
      />

      <Drawer.Screen
        name="Main"
        component={TabNavigation}
        options={{
          drawerIcon: () => {
            return (
              <>
                <AntDesign name="home" style={{fontSize: 21, color: '#fff'}} />
                <AntDesign
                  name="right"
                  style={{
                    fontSize: 13,
                    color: '#fff',
                    right: -200,
                  }}
                />
              </>
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
