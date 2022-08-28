import {StyleSheet, Text, View, ScrollView, Linking} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/buttons/CustomButton';
import SocialButton from '../components/SocialButton/SocialButton';
import color from '../color/color';

const SignupScreen = ({navigation}) => {
  // Hooks

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Functions

  const onSgninPress = () => {
    navigation.navigate('SignIn');
  };
  const onBtnPress = () => {
    navigation.navigate('Verification');
  };
  const onFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/');
  };
  const onGooglePress = () => {
    Linking.openURL('https://www.google.com/');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.description}>
        Make sure to enter your mobile number to enable 2-step verification
      </Text>
      {/* Input Field   */}

      <CustomInput
        placeholder={'First Name'}
        value={fname}
        setValue={setFname}
      />
      <CustomInput
        placeholder={'Last Name'}
        value={lname}
        setValue={setLname}
      />
      <CustomInput
        placeholder={'Mobile Number'}
        value={mobile}
        setValue={setMobile}
      />
      <CustomInput placeholder={'Email'} value={email} setValue={setEmail} />
      <CustomInput
        placeholder={'Password'}
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
      />

      <CustomButton title={'Continue'} onPress={onBtnPress} />

      <Text style={styles.signupText}>Or, Sign up with social</Text>

      <SocialButton
        onPressFacebook={onFacebookPress}
        onPressGoogle={onGooglePress}
      />

      <Text style={styles.account}>
        Have an account?{' '}
        <Text style={styles.signin} onPress={onSgninPress}>
          SIGN IN
        </Text>
      </Text>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
    paddingHorizontal: 20,
  },
  titleText: {
    marginBottom: 40,
    marginTop: 10,
    marginLeft: 30,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    color: '#fff',
    fontSize: 15,
    marginVertical: 25,
    lineHeight: 25,
    fontFamily: 'Comfortaa Light',
  },
  signupText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Comfortaa Light',
  },
  account: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 15,
    fontFamily: 'Comfortaa Light',
  },
  signin: {
    color: '#65B4CE',
  },
});
