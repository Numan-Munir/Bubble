import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const SocialButton = ({onPressFacebook, onPressGoogle}) => {
  return (
    <View style={styles.container}>
      {/* Facebook */}

      <TouchableOpacity style={styles.facebook} onPress={onPressFacebook}>
        <Image
          source={require('../../assets/icons/Facebook.png')}
          style={styles.facebookImg}
        />
      </TouchableOpacity>

      {/* Google */}
      <TouchableOpacity style={styles.google} onPress={onPressGoogle}>
        <Image
          source={require('../../assets/icons/Google.png')}
          style={styles.googleImg}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 15,
  },
  facebook: {
    backgroundColor: '#F3F5F9',
    borderRadius: 50,
    padding: 28,
    height: 30,
    width: 30,
    marginHorizontal: 7,
  },
  google: {
    backgroundColor: '#F3F5F9',
    borderRadius: 50,
    padding: 28,
    height: 30,
    width: 30,
    marginHorizontal: 7,
  },
  googleImg: {
    alignSelf: 'center',
    bottom: 10,
  },
  facebookImg: {
    alignSelf: 'center',
    bottom: 10,
  },
});
export default SocialButton;
