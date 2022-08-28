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
          }}>
          <TouchableOpacity style={styles.DropOff}>
            <Image source={require('../assets/icons/Location.png')} />

            <Text style={styles.ServiceText}>Drop off</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.pickUp}>
            <Image
              style={styles.Bike}
              source={require('../assets/icons/Bike.png')}
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
  image: {
    flex: 1,
    height: 450,
    width: 400,
    left: 0,
    top: -5,
  },
  main: {
    flex: 1,
    backgroundColor: color.PRIMARY,
    height: 200,
    bottom: -35,
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
    // fontFamily: theme.fontFamilies.heading,
    fontFamily: 'Comfortaa Light',
    fontSize: 18,
    top: 15,
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
    // paddingHorizontal: 25,
    // paddingVertical: 20,
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
    marginLeft: 10,
    fontFamily: 'Comfortaa Light',
  },
  Bike: {
    height: 18,
    width: 20,
  },
  searchLoc: {
    paddingVertical: 14,
    paddingHorizontal: 15,
    fontFamily: 'Comfortaa Light',
  },
  mapImage: {
    flex: 1,
    height: 450,
    width: 400,
    left: 0,
    top: -5,
  },
});
export default ServiceScreen;
