import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import color from '../color/color';
import Slider from '@react-native-community/slider';

const SettingScreen = ({navigation}) => {
  //    Hooks

  const [isEnabled, setIsEnabled] = useState();
  const [defaultStyle, setDefaultStyle] = useState();
  const [english, setEnglish] = useState(false);
  const [spanish, setSpanish] = useState(false);

  // Functions

  const onBack = () => {
    navigation.navigate('Main');
  };
  const toggleSwitch = () => {
    setDefaultStyle(!defaultStyle);
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text onPress={onBack} style={{top: 4}}>
          <Image source={require('../assets/icons/BackIcon.png')} />
        </Text>

        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.language}>
        <Text style={styles.languageTitle}>Language</Text>
        <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
          {/* English */}

          <TouchableOpacity style={styles.english}>
            <Text style={styles.englishTitle}>English</Text>

            <TouchableOpacity
              style={styles.outer}
              onPress={() => {
                setEnglish(true);
                setSpanish(false);
              }}>
              {english ? <View style={styles.inner} /> : null}
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Spanish */}

          <TouchableOpacity style={styles.english}>
            <Text style={styles.englishTitle}>Spanish</Text>

            <TouchableOpacity
              style={styles.outer}
              onPress={() => {
                setSpanish(true);
                setEnglish(false);
              }}>
              {spanish ? <View style={styles.inner} /> : null}
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>

      {/* Notification */}

      <View style={defaultStyle ? styles.afterStyle : styles.beforeStyle}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.notifTitle}>Notifications</Text>
          <Switch
            trackColor={{false: '#08768B', true: '#40DD7F'}}
            thumbColor={isEnabled ? '#fff' : '#08768B'}
            ios_backgroundColor="#CFF6FF"
            value={isEnabled}
            onValueChange={toggleSwitch}
          />
        </View>
        {isEnabled && (
          <View>
            <Text style={styles.recurStyle}>Recurring Options Reminder </Text>
            <Text style={styles.recurStyle}> 6 Hours</Text>
            <Text style={styles.recurStyle}>12 Hours</Text>
            <Text style={styles.recurStyle}>24 Hours</Text>
          </View>
        )}
      </View>

      {/* MileRadius */}

      <View style={styles.mileRadius}>
        <Text style={styles.mileTitle}>Mile Radius</Text>
        <Slider
          style={{width: '100%', height: 60}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#CFF6FF"
          maximumTrackTintColor="#65B4CE">
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 40,
            }}>
            <Text
              style={{
                color: '#fff',
                marginTop: 5,
                fontFamily: 'Comfortaa Light',
              }}>
              1 mi
            </Text>
            <Text
              style={{
                color: '#fff',
                marginTop: 5,
                fontFamily: 'Comfortaa Light',
              }}>
              5 mi
            </Text>
          </View>
        </Slider>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: '100%',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 30,
  },
  languageTitle: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 30,
    fontWeight: '500',
    letterSpacing: 1,
    fontFamily: 'Comfortaa Light',
  },
  notifTitle: {
    color: '#fff',
    fontSize: 21,
    fontWeight: '500',
    letterSpacing: 1,
    fontFamily: 'Comfortaa Light',
  },
  mileTitle: {
    color: '#fff',
    fontSize: 21,
    fontWeight: '500',
    letterSpacing: 1,
    fontFamily: 'Comfortaa Light',
  },
  language: {
    height: '20%',
    backgroundColor: '#08768B',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 6,
  },
  beforeStyle: {
    height: '10%',
    backgroundColor: '#08768B',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 6,
  },
  afterStyle: {
    height: '33%',
    backgroundColor: '#08768B',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 6,
  },
  mileRadius: {
    height: '15%',
    backgroundColor: '#08768B',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 6,
  },
  english: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#128197',
    borderRadius: 8,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  spanish: {
    flex: 1,
    backgroundColor: '#128197',
    borderRadius: 8,
    marginLeft: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  englishTitle: {
    color: '#fff',
    fontSize: 16,
  },
  recurStyle: {
    color: '#fff',
    fontFamily: 'Comfortaa Light',
    marginTop: 25,
  },
  outer: {
    height: 15,
    width: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    height: '60%',
    width: '60%',
    borderRadius: 50,
    backgroundColor: '#fff',
  },
});
export default SettingScreen;
