import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ProfileInfo = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navigationBtn}>
        <View style={styles.history}>
          <Text style={{color: '#fff', fontSize: 18}}>History</Text>
        </View>

        <View style={styles.order}>
          <Text style={{color: '#fff', fontSize: 18}}>Order</Text>
        </View>

        <View style={styles.support}>
          <Text style={{color: '#fff', fontSize: 18}}>Support</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#128197',
  },
  navigationBtn: {
    height: 50,
    width: 360,
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
    width: '33.33%',
    borderRadius: 50,
    backgroundColor: '#65B4CE',
    paddingHorizontal: 20,
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
});
export default ProfileInfo;
