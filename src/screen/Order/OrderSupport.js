import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import color from '../../color/color';
import DealerChat from '../../components/DealerChat/DealerChat';

const OrderSupport = ({navigation}) => {
  const onCommet = () => {
    navigation.navigate('SupportChat');
  };
  return (
    <ScrollView style={styles.container}>
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

      {/* Drop box  */}
      <DealerChat onPress={onCommet} />
      <DealerChat />
      <DealerChat />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
    paddingHorizontal: 15,
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
    width: '33.33%',
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
    backgroundColor: '#65B4CE',
    borderRadius: 50,
    height: '100%',
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 75,
    width: 87,
  },
});
export default OrderSupport;
