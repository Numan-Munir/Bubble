import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import color from '../../color/color';
import DeliveryScreen from '../../screen/DeliveryScreen';

const SwipperScreen = ({description, title, ImagePath}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.PRIMARY,
        paddingVertical: 50,
        paddingHorizontal: 20,
      }}>
      {/* Images */}

      <View style={styles.imageContainer}>
        <Image style={styles.images} source={ImagePath} resizeMode="contain" />
      </View>

      <View style={{flex: 1}}>
        <View style={styles.titleScreen}>
          {/* Title */}

          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          {/* Bottom Swipper */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginTop: 20,
  },
  titleScreen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    color: '#fff',
    fontWeight: '500',
    marginVertical: 30,
    fontFamily: 'Comfortaa Light',
    letterSpacing: 1,
  },
  description: {
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Comfortaa Light',
  },
  Skipper: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  skip: {
    position: 'absolute',
    bottom: 19,
    left: 0,
    fontSize: 18,
    color: '#fff',
  },
  skipIcon: {
    height: 60,
    width: 60,
    bottom: 0,
    position: 'absolute',
    right: 0,
  },
});

export default SwipperScreen;
