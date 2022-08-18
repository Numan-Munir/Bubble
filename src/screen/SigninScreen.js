import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/buttons/CustomButton';
import SocialButton from '../components/SocialButton/SocialButton';
import color from '../color/color';

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
    alert('Facebook is Pressed');
  };
  const onGooglePress = () => {
    alert('Google is Pressed');
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
    backgroundColor: color.PRIMARY,
  },
  titleText: {
    marginVertical: 40,
    fontSize: 25,
    color: '#fff',
    alignSelf: 'center',
  },
  description: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 17,
    marginBottom: 45,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 100,
    marginTop: 30,
  },
  forgot: {
    color: '#fff',
    opacity: 0.8,
    marginBottom: 20,
    alignSelf: 'flex-end',
  },
});
