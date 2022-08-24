import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import SwipperScreen from '../components/SwipperScreen/SwipperScreen';
import string from '../services/string/string';

const DeliveryScreen = ({navigation}) => {
  // Functions

  const onSwipPress = () => {
    navigation.navigate('SignUp');
  };
  const onSkipPress = () => {
    navigation.navigate('SignUp');
  };
  return (
    <>
      <SwipperScreen
        ImagePath={require('../assets/images/Delivery.png')}
        title={string.Delivery}
        description={string.Delivery_Description}
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
            fontSize: 15,
            color: '#fff',
            marginLeft: 30,
            left: 10,
            bottom: 40,
            fontFamily: 'Comfortaa Light',
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

export default DeliveryScreen;
