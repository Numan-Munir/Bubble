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
      }}
      initialRouteName="Main"
      backBehavior="order">
      <Drawer.Screen name="Recurring options" component={RecurringScreen} />
      <Drawer.Screen name="Preferences" component={PreferenceScreen} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
      <Drawer.Screen name="Contact Support" component={ContactScreen} />
      <Drawer.Screen name="FAQ" component={FAQScreen} />
      <Drawer.Screen name="Sign Out" component={Signout} />
      <Drawer.Screen name="Main" component={TabNavigation} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
