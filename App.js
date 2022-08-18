import 'react-native-gesture-handler';
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import React from 'react';
import color from './src/color/color';
import BubbleScreen from './src/screen/BubbleScreen';
import WellcomeScreen from './src/screen/WellcomeScreen';
import LaundryScreen from './src/screen/LaundryScreen';
import PickUpScreen from './src/screen/PickUpScreen';
import DeliveryScreen from './src/screen/DeliveryScreen';
import Swiper from 'react-native-swiper';
import SignupScreen from './src/screen/SignupScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SigninScreen from './src/screen/SigninScreen';
import ResetPassword from './src/screen/ResetPassword';
import VerificationScreen from './src/screen/VerificationScreen';
import ServiceScreen from './src/screen/ServiceScreen';
import RecurringScreen from './src/screen/RecurringScreen';
import BiWeekly from './src/screen/BiWeekly';
import PreferenceScreen from './src/screen/PreferenceScreen';
import DetailPrefrenceScreen from './src/screen/DetailPrefrenceScreen';
import SettingScreen from './src/screen/SettingScreen';
import ContactScreen from './src/screen/ContactScreen';
import FAQScreen from './src/screen/FAQScreen';
import DrawerNavigation from './src/routes/Navigation/DrawerNavigation/DrawerNavigation';
import IconTesting from './src/screen/IconTesting';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
  },
});
export default App;

// const Drawer = createDrawerNavigator();

// const DrawerNavigation = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen
//         name="Preference"
//         component={PreferenceScreen}></Drawer.Screen>
//       <Drawer.Screen name="Home" component={ServiceScreen}></Drawer.Screen>
//       <Drawer.Screen
//         name="Recurring"
//         component={RecurringScreen}></Drawer.Screen>
//     </Drawer.Navigator>
//   );
// };

// // <Swiper dotColor={'black'} activeDotColor={'white'}>
// //   <LaundryScreen />
// //   <PickUpScreen />
// //   <DeliveryScreen />
// // </Swiper>
// // ? Its Working Code?
// // import React from 'react';
// // import {SafeAreaView, StyleSheet, View} from 'react-native';
// // import color from './src/color/color';
// // import {createStackNavigator} from '@react-navigation/stack';
// // import {NavigationContainer} from '@react-navigation/native';
// // import BubbleScreen from './src/screen/BubbleScreen';
// // import SignupScreen from './src/screen/SignupScreen';
// // import WellcomeScreen from './src/screen/WellcomeScreen';
// // import LaundryScreen from './src/screen/LaundryScreen';

// // const Stack = createStackNavigator();
// // export default function App() {
// //   return (
// //     // <View style={styles.contzainer}>
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName="BubbleScreen">
// //         <Stack.Screen
// //           name="BubbleScreen"
// //           component={BubbleScreen}
// //           options={{headerShown: false}}
// //         />
// //         <Stack.Screen
// //           name="SignupScreen"
// //           component={SignupScreen}
// //           options={{headerShown: false}}
// //         />
// //         <Stack.Screen
// //           name="WellcomeScreen"
// //           component={WellcomeScreen}
// //           options={{headerShown: false}}
// //         />
// //         <Stack.Screen
// //           name="LaundryScreen"
// //           component={LaundryScreen}
// //           options={{headerShown: false}}
// //         />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //     // </View>
// //   );
// // }
// // // const styles = StyleSheet.create({
// // //   contzainer: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     // alignItems: 'center',
// // //     backgroundColor: color.PRIMARY,
// // //     paddingVertical: 50,
// // //     paddingHorizontal: 20,
// // //   },
// // // });
