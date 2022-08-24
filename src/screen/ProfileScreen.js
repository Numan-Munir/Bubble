import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import color from '../color/color';

const ProfileScreen = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/ProfileBack.png')}>
      <TouchableOpacity style={styles.navigationBtn}>
        <View style={styles.history}>
          <Text style={{color: '#fff', fontSize: 18}}>QR Code</Text>
        </View>
        <View style={styles.order}>
          <Text style={{color: '#fff', fontSize: 18}}>Profile</Text>
        </View>
        <View style={styles.support}>
          <Text style={{color: '#fff', fontSize: 18}}>Payment</Text>
        </View>
      </TouchableOpacity>

      <Image
        style={styles.qrImage}
        source={require('../assets/images/QRCode.png')}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
    alignItems: 'center',
  },
  ProfileText: {
    color: '#fff',
    fontSize: 25,
  },
  navigationBtn: {
    height: 55,
    width: 360,
    position: 'absolute',
    top: 15,
    borderWidth: 1,
    borderColor: '#65B4CE',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 10,
  },
  history: {
    height: '100%',
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: '#65B4CE',
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  order: {
    paddingHorizontal: 20,
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  support: {
    paddingHorizontal: 20,
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrImage: {
    position: 'absolute',
    top: 191,
    height: 315,
  },
});
export default ProfileScreen;
