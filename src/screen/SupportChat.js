import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import color from '../color/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SupportChat = ({navigation}) => {
  const onBack = () => {
    navigation.navigate('OrderSupport');
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text onPress={onBack} style={{left: -85}}>
          <Image source={require('../assets/icons/BackIcon.png')} />
        </Text>
        <Text style={styles.title}>Support Chat</Text>
      </View>

      <View style={{paddingHorizontal: 20, height: '14%', marginBottom: 70}}>
        <View style={styles.dealerContact}>
          <Text style={styles.Title}>Thiam’s Laundramat</Text>
          <Text style={{fontSize: 15, color: '#fff', marginTop: 10}}>
            Order #THI3465LA
          </Text>
          <Text style={{fontSize: 15, color: '#fff', marginTop: 10}}>
            Pick-up on 10.30 @ 4.45 pm
          </Text>
        </View>
      </View>
      {/* Chat View */}

      <View style={styles.chatView}>
        <View style={styles.imageView}>
          <Image
            style={{height: 35, width: 35}}
            source={require('../assets/icons/Dealer.png')}
          />
        </View>
        <View style={styles.Chatting}>
          <View
            style={{
              flexDirection: 'row',
              height: '20%',
              width: '100%',
              alignItems: 'center',
            }}>
            <View style={styles.firstMsg}>
              <Text style={{color: '#fff'}}>Hi, Alfie</Text>
            </View>
            <Text
              style={{
                marginLeft: 30,
                color: '#fff',
                opacity: 0.7,
                fontSize: 12,
              }}>
              8:30 AM
            </Text>
          </View>
          <View style={styles.secondMsg}>
            <Text style={styles.text}>
              I'm facing a issue with this order I need support to get solve
              this problem
            </Text>
          </View>
        </View>
      </View>
      {/* Customer Msg */}

      {/* Message Bar */}

      <View style={styles.msgMain}>
        <View style={styles.msgBar}>
          <AntDesign name="message1" size={25} style={{marginLeft: 13}} />
          <TextInput placeholder="Type message" style={styles.message} />
          <View style={styles.iconView}>
            <FontAwesome esign name="send" size={22} color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    marginBottom: 8,
    left: -90,
  },
  dealerContact: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#08768B',
    marginVertical: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  Title: {
    fontSize: 18,
    color: '#fff',
  },
  chatView: {
    height: '30%',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  imageView: {
    height: '100%',
    width: '20%',
  },
  Chatting: {
    height: '100%',
    width: '80%',
  },
  firstMsg: {
    height: '100%',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#65B4CE',
  },
  secondMsg: {
    height: '40%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#65B4CE',
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  text: {
    color: '#fff',
    lineHeight: 25,
  },
  msgMain: {
    height: '15%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#F2F3F60D',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  msgBar: {
    height: '60%',
    width: '90%',
    backgroundColor: '#fff',
    paddingVertical: 5,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    backgroundColor: '#08768B',
    borderRadius: 50,
    padding: 13,
  },
  message: {
    width: '65%',
    marginHorizontal: 10,
    paddingVertical: 20,
    fontSize: 16,
    letterSpacing: 1,
  },
});
export default SupportChat;
