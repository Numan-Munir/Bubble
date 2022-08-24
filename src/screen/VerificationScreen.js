import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/buttons/CustomButton';
import color from '../color/color';

const VerificationScreen = ({navigation}) => {
  // Hooks

  const [code, setCode] = useState('');

  // Functions

  // const onFocus = focused => {
  //   {
  //     focused ? {borderColor: '#ABE9FE'} : null;
  //   }
  // };

  const onResend = () => {
    alert('Code Resend');
  };
  const onBtnPress = () => {
    navigation.navigate('Drawer');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.description}>
        We’ve texted you with a code to verify your phone number
      </Text>
      {/* Input Field   */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 40,
        }}>
        <TextInput style={styles.code} placeholder="_" maxLength={1} />
        <TextInput style={styles.code} placeholder="_" maxLength={1} />
        <TextInput style={styles.code} placeholder="_" maxLength={1} />
        <TextInput style={styles.code} placeholder="_" maxLength={1} />
      </View>

      <CustomButton title={'Continue'} onPress={onBtnPress} />

      <Text style={styles.account}>Didn’t receive a code?</Text>
      <Text style={styles.signin} onPress={onResend}>
        RESEND
      </Text>
    </ScrollView>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
    paddingHorizontal: 20,
  },
  description: {
    color: '#fff',
    fontSize: 17,
    marginVertical: 25,
    marginTop: 45,
    fontFamily: 'Comfortaa Light',
  },
  account: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'Comfortaa Light',
  },
  signin: {
    color: '#ABE9FE',
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: 'Comfortaa Light',
  },
  code: {
    paddingHorizontal: 31,
    paddingVertical: 23,
    borderRadius: 50,
    fontSize: 20,
    backgroundColor: '#08758B',
    marginHorizontal: 5,
    fontFamily: 'Comfortaa Light',
    color: '#fff',
  },
});
