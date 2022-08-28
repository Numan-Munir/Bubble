import {StyleSheet, Text, View, ScrollView, Linking} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/buttons/CustomButton';
import SocialButton from '../components/SocialButton/SocialButton';
import color from '../color/color';
import {theme} from '../ui';

const SigninScreen = ({navigation}) => {
  // Hooks

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Functions

  const onSignupPress = () => {
    navigation.navigate('SignUp');
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
  const forgotPassword = () => {
    navigation.navigate('ResetPassword');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}> Experience Laundry, Differently</Text>
      <Text style={styles.description}>Sign in to your account</Text>
      {/* Input Field   */}
      <CustomInput
        placeholder={'Mobile Number'}
        value={mobile}
        setValue={setMobile}
      />
      <CustomInput
        placeholder={'Password'}
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
      />
      <Text style={styles.forgot} onPress={forgotPassword}>
        Forgot Password?
      </Text>

      <CustomButton title={'Sign In'} onPress={onBtnPress} />

      <Text style={styles.signupText}>Or, Sign in with social</Text>

      <SocialButton
        onPressFacebook={onFacebookPress}
        onPressGoogle={onGooglePress}
      />
      <Text style={styles.account}>
        Don't have an account?{' '}
        <Text style={styles.signin} onPress={onSignupPress}>
          SIGN UP
        </Text>
      </Text>
    </ScrollView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: color.PRIMARY,
  },
  titleText: {
    marginVertical: 40,
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
    // fontFamily: 'Comfortaa Light',
  },
  description: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 17,
    marginBottom: 45,
    // fontFamily: 'Comfortaa Light',
  },
  signupText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    // fontFamily: 'Comfortaa Light',
  },
  account: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 40,
    // fontFamily: 'Comfortaa Light',
  },
  signin: {
    color: '#65B4CE',
    // fontFamily: 'Comfortaa Light',
  },
  signinTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 100,
    marginTop: 30,
  },
  forgot: {
    color: '#fff',
    opacity: 0.8,
    marginBottom: 20,
    fontSize: 12,
    alignSelf: 'flex-end',
    // fontFamily: 'Comfortaa Light',
  },
});
