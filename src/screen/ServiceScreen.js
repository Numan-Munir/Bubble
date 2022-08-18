import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import color from '../color/color';
import {Icon} from 'react-native-elements/dist/icons/Icon';

const ServiceScreen = ({navigation}) => {
  const onMenuPress = () => {
    navigation.openDrawer();
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/icons/Map.png')}
        resizeMode="contain">
        <View
          style={{
            flexDirection: 'row',
            top: 50,
            left: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={onMenuPress}>
            <Image
              style={{marginRight: 10}}
              source={require('../assets/icons/MenuIcon.png')}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 330,
              backgroundColor: '#fff',
              borderRadius: 10,
            }}>
            <TextInput
              style={styles.searchLoc}
              placeholder="1465 5th Avenue APt 5C"
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
        <View style={styles.model}></View>

        <Text style={styles.chooseText}>Choose your service</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.DropOff}>
            <Image source={require('../assets/icons/Location.png')} />

            <Text style={styles.ServiceText}>Drop off</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.pickUp}>
            {/* <Image
              style={styles.Bike}
              source={require('../assets/icons/Bike.png')}
            /> */}
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
  image: {
    height: 450,
    width: 400,
    left: 0,
    top: -5,
  },
  main: {
    backgroundColor: color.PRIMARY,
    height: 400,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  model: {
    backgroundColor: color.PRIMARY,
    height: 70,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  chooseText: {
    color: '#fff',
    fontSize: 18,
    position: 'absolute',
    top: 30,
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
    paddingHorizontal: 25,
    paddingVertical: 20,
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
    fontSize: 17,
    marginLeft: 10,
  },
  Bike: {
    height: 18,
    width: 20,
  },
  searchLoc: {
    paddingVertical: 14,
    paddingHorizontal: 15,
  },
});
export default ServiceScreen;
