import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/buttons/CustomButton';
import color from '../color/color';

const VerificationScreen = ({navigation}) => {
  // Hooks

  const [code, setCode] = useState('');

  // Functions

  const onResend = () => {
    alert('Code Resend');
  };
  const onBtnPress = () => {
    navigation.navigate('Drawer');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}> Verification</Text>
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
        <TextInput style={styles.code} />
        <TextInput style={styles.code} />
        <TextInput style={styles.code} />
        <TextInput style={styles.code} />
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
    fontSize: 17,
    marginVertical: 25,
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
    marginTop: 10,
  },
  signin: {
    color: '#ABE9FE',
    alignSelf: 'center',
    marginTop: 20,
  },
  code: {
    padding: 30,
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#08758B',
    marginHorizontal: 17,
  },
});
