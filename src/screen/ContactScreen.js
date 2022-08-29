import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import color from '../color/color';
import CustomButton from '../components/buttons/CustomButton';

const ContactScreen = ({navigation}) => {
  //   Hooks

  const [show, setShow] = useState(false);
  const [check, setCheck] = useState(false);
  //   Functions

  const onBack = () => {
    navigation.navigate('Main');
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
        {/* Support */}

        <TouchableOpacity style={styles.supportDiv}>
          <Text style={styles.supportBtn}>Support</Text>
          <TouchableOpacity
            style={styles.outer}
            onPress={() => setShow(pre => !pre)}>
            {show ? <View style={styles.inner} /> : null}
          </TouchableOpacity>
        </TouchableOpacity>

        {/* FeedBack */}

        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Text style={styles.feedbackBtn}>Feedback</Text>
          <TouchableOpacity
            style={styles.outer}
            onPress={() => setCheck(pre => !pre)}>
            {check ? <View style={styles.inner} /> : null}
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <View style={styles.DecDiv}>
        <TextInput
          style={styles.decInput}
          multiline
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
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1,
    fontFamily: 'Comfortaa Light',
  },
  supportDiv: {
    width: '35%',
    flexDirection: 'row',
  },
  supportBtn: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: 1,
    fontFamily: 'Comfortaa Light',
  },
  feedbackBtn: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: 1,
    fontFamily: 'Comfortaa Light',
    marginLeft: 15,
  },
  feedBackRadio: {
    backgroundColor: '#fff',
  },
  feedBackDiv: {
    width: '35%',
    flexDirection: 'row',
  },
  DecDiv: {
    backgroundColor: '#fff',
    height: '30%',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 15,
    justifyContent: 'flex-start',
    paddingVertical: 15,
  },
  decInput: {
    height: 60,
    width: '100%',
    paddingHorizontal: 15,
    fontSize: 16,
    fontFamily: 'Comfortaa Light',
  },
  emailTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '400',
    fontFamily: 'Comfortaa Light',
  },
  email: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '400',
    marginLeft: 10,
    fontFamily: 'Comfortaa Light',
  },
  btn: {
    bottom: -200,
  },
  outer: {
    height: 15,
    width: 15,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#fff',
    marginLeft: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    backgroundColor: '#fff',
    height: '60%',
    width: '60%',
    borderRadius: 50,
  },
});
export default ContactScreen;
