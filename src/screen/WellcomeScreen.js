import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import color from '../color/color';

const WellcomeScreen = ({navigation}) => {
  const onSignIn = () => {
    navigation.navigate('SignIn');
  };
  const onUserPress = () => {
    navigation.navigate('Laundry');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Wellcome !</Text>
        <Text style={styles.discreption}>
          Please sign up and tell us a bit more about who you are and what
          services you are looking for
        </Text>
      </View>

      <TouchableOpacity style={styles.userContainer} onPress={onUserPress}>
        <View style={styles.userIconContainer}>
          <Image
            style={styles.userIcon}
            source={require('../assets/icons/User_Icon.png')}
            resizeMode="cover"
          />
        </View>
        <View style={styles.user}>
          <Text style={[styles.titleText, {marginBottom: 8}]}>User</Text>
          <Text style={styles.userDescription}>
            I am here for laundry & dry cleaning services.
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.SignIn}>
        <Text style={styles.userDescription}>Registered Courier? </Text>
        <Text style={styles.SignInBtn} onPress={onSignIn}>
          SIGN IN
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: color.PRIMARY,
  },
  titleContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
    letterSpacing: 2,
  },
  discreption: {
    color: '#fff',
  },

  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: color.containerBG,
    borderRadius: 15,
    padding: 25,
  },
  userIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIcon: {
    maxHeight: 40,
    maxWidth: 40,
  },
  user: {
    marginLeft: 20,
    paddingVertical: 10,
  },
  userDescription: {
    color: '#fff',
    fontSize: 15,
  },
  SignIn: {
    flex: 2,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 20,
  },
  SignInBtn: {
    color: color.PRIMARY_LIGHT,
  },
});
export default WellcomeScreen;
