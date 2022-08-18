import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import SwipperScreen from '../components/SwipperScreen/SwipperScreen';
import string from '../services/string/string';

const LaundryScreen = ({navigation}) => {
  const onSwipPress = () => {
    navigation.navigate('PickUp');
  };
  const onSkipPress = () => {
    navigation.navigate('SignUp');
  };
  return (
    <>
      <SwipperScreen
        ImagePath={require('../assets/images/Laundry-Icon.png')}
        title={string.Laundry}
        description={string.Laundry_Description}
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

export default LaundryScreen;
