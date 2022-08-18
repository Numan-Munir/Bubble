import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import color from '../color/color';
import CustomButton from '../components/buttons/CustomButton';

const ContactScreen = ({navigation}) => {
  const onBack = () => {
    navigation.navigate('Service');
  };
  const onEmailPress = () => {
    alert('Email is Here');
  };
  const onSend = () => {
    alert('Suggestions is send');
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text onPress={onBack} style={{top: 4}}>
          <Image source={require('../assets/icons/BackIcon.png')} />
        </Text>
        <Text style={styles.title}>Contact Support</Text>
      </View>

      <Text style={styles.issueTitle}>Any Issue? Suggestions?</Text>

      <View style={{flexDirection: 'row', marginTop: 30}}>
        <View style={styles.supportDiv}>
          <Text style={{color: '#fff', fontSize: 15}}>Support</Text>
        </View>

        <View>
          <Text style={{color: '#fff', fontSize: 15}}>Feedback</Text>
        </View>
      </View>

      <View style={styles.DecDiv}>
        <TextInput
          style={styles.decInput}
          placeholder={'Describe your problem or suggestion'}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.emailTitle}>Or email us at : </Text>
        <TouchableOpacity onPress={onEmailPress}>
          <Text style={styles.email}> info@getbubblesapp.com</Text>
        </TouchableOpacity>
      </View>
      <CustomButton title={'Send'} style={styles.btn} onPress={onSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    color: '#fff',
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 30,
  },
  issueTitle: {
    color: '#fff',
    fontSize: 17,
    fontStyle: 'italic',
    fontWeight: '400',
  },
  supportDiv: {
    width: '35%',
  },
  feedBackDiv: {
    width: '35%',
  },
  DecDiv: {
    backgroundColor: '#fff',
    height: '30%',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 15,
    justifyContent: 'flex-start',
  },
  decInput: {
    height: 60,
    paddingHorizontal: 15,
    fontSize: 17,
    fontStyle: 'italic',
  },
  emailTitle: {
    color: '#fff',
    fontSize: 16,
  },
  email: {
    color: '#fff',
    fontSize: 16,
  },
  btn: {
    bottom: -200,
  },
});
export default ContactScreen;
