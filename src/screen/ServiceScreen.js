import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import color from '../color/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
// import {Spacer} from '../components';

const ServiceScreen = ({navigation}) => {
  const onMenuPress = () => {
    navigation.openDrawer();
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.mapImage}
        source={require('../assets/icons/Map.png')}
        resizeMode="cover">
        <View
          style={{
            flexDirection: 'row',
            top: 50,
            left: 15,
            alignItems: 'center',
          }}>
          <Feather
            name="menu"
            size={22}
            style={{marginRight: 10}}
            onPress={onMenuPress}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 330,
              backgroundColor: '#fff',
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {width: -3, height: 3},
              shadowOpacity: 0.1,
              shadowRadius: 5,
            }}>
            <TextInput
              style={styles.searchLoc}
              placeholder={'1465 5th Avenue APt 5C'}
            />
            <TouchableOpacity>
              <Image
                style={{right: 20, marginLeft: 20}}
                source={require('../assets/icons/PicIcon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.main}>
        {/* <Spacer.Column numberOfSpaces={5} /> */}
        <Text style={styles.chooseText}>Choose your service</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            paddingBottom: 25,
          }}>
          <TouchableOpacity style={styles.DropOff}>
            {/* <Image source={require('../assets/icons/Location.png')} /> */}
            <EvilIcons name="location" style={{fontSize: 25, color: '#fff'}} />

            <Text style={styles.ServiceText}>Drop off</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.pickUp}>
            <MaterialIcons
              name="electric-scooter"
              style={{fontSize: 23, color: '#fff'}}
            />
            <Text style={styles.ServiceText}>Pick up / Delivery</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
    width: '100%',
    height: '100%',
  },
  main: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: color.PRIMARY,
    height: 180,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  model: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  chooseText: {
    color: '#fff',
    fontFamily: 'Comfortaa Light',
    fontSize: 18,
    alignSelf: 'center',
  },
  DropOff: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 60,
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal: 5,
    borderRadius: 10,
    flexDirection: 'row',
  },
  pickUp: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 60,
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal: 5,
    borderRadius: 10,
    flexDirection: 'row',
  },
  ServiceText: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 5,
    fontFamily: 'Comfortaa Light',
  },
  searchLoc: {
    paddingVertical: 14,
    paddingHorizontal: 15,
    fontFamily: 'Comfortaa Light',
  },
  mapImage: {
    height: 500,
  },
});
export default ServiceScreen;
