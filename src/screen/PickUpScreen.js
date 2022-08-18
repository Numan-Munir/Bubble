import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import SwipperScreen from '../components/SwipperScreen/SwipperScreen';
import string from '../services/string/string';

const PickUpScreen = ({navigation}) => {
  const onSwipPress = () => {
    navigation.navigate('Delivery');
  };
  const onSkipPress = () => {
    navigation.navigate('SignUp');
  };
  return (
    <>
      <SwipperScreen
        ImagePath={require('../assets/images/PickUp.png')}
        title={string.Pick_Up}
        description={string.PickUp_Description}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <Text
          style={{
            position: 'absolute',
            fontSize: 18,
            color: '#fff',
            marginLeft: 30,
            left: 10,
            bottom: 40,
          }}
          onPress={onSkipPress}>
          Skip
        </Text>

        <TouchableOpacity onPress={onSwipPress}>
          <Image
            style={{
              height: 60,
              width: 60,
              bottom: 20,
              position: 'absolute',
              right: 20,
            }}
            source={require('../assets/icons/Skipper-Icon.png')}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PickUpScreen;
