import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/buttons/CustomButton';
import color from '../color/color';
import OTPTextInput from 'react-native-otp-textinput';
import AntDesign from 'react-native-vector-icons/AntDesign';

const VerificationScreen = ({navigation}) => {
  // Hooks

  const [otp, setOtp] = useState('');

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
      <OTPTextInput
        textInputStyle={styles.textStyle}
        offTintColor="#08758B"
        tintColor="#08758B"
        containerStyle={styles.containerStyle}
        handleTextChange={code => setOtp(code)}
      />

      <CustomButton title={'Continue'} onPress={onBtnPress} />

      <Text style={styles.account}>Didn’t receive a code?</Text>
      <Text style={styles.signin} onPress={onResend}>
        RESEND
      </Text>
      <AntDesign name="home" />
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
    marginVertical: 30,
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
  textStyle: {
    backgroundColor: '#08758B',
    borderRadius: 50,
    color: '#fff',
    marginHorizontal: 7,
    height: 70,
    width: 70,
  },
  containerStyle: {
    marginVertical: 40,
  },
});
