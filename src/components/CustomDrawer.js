import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import color from '../color/color';
// import AntDesign from 'react-native-vector-icons/AntDesign';

const CustomDrawer = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            marginTop: 50,
          }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#128197',
  },
});
export default CustomDrawer;
