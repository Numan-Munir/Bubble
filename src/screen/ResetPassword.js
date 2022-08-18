import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/buttons/CustomButton';
import color from '../color/color';

const ResetPassword = ({navigation}) => {
  // Hooks

  const [newPassword, setNewPassword] = useState('');
  const [resetPassword, setResetPassword] = useState('');

  // Functions

  const onSignupPress = () => {
    navigation.navigate('SignUp');
  };
  const onBtnPress = () => {
    navigation.navigate('Home');
  };
  const onFacebookPress = () => {
    alert('Facebook is Pressed');
  };
  const onGooglePress = () => {
    alert('Google is Pressed');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.description}>
        After you’ve reset your password you will receive a code on your mobile
        number to confirm the account
      </Text>
      {/* Input Field   */}
      <CustomInput
        placeholder={'New Password'}
        value={newPassword}
        setValue={setResetPassword}
      />
      <CustomInput
        placeholder={'Confirm Password'}
        secureTextEntry={true}
        value={resetPassword}
        setValue={setResetPassword}
      />
      <CustomButton
        title={'Continue'}
        onPress={onBtnPress}
        style={{marginTop: 50}}
      />
    </ScrollView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: color.PRIMARY,
  },
  // titleText: {
  //   marginV: 40,
  //   marginTop: 30,
  //   marginLeft: 30,
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: '#fff',
  // },
  description: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 17,
    marginVertical: 45,
  },
  signupText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 17,
  },
  account: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 40,
  },
  signin: {
    color: '#65B4CE',
  },
  signinTitle: {
    marginBottom: 40,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 150,
    marginTop: 30,
  },
});
