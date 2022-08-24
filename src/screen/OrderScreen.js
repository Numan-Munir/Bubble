import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import color from '../color/color';
import DealerDetail from '../components/DealerDetail/DealerDetail';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DashedLine from 'react-native-dashed-line';

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navigationBtn}>
        <View style={styles.history}>
          <Text style={styles.navBtn}>History</Text>
        </View>
        <View style={styles.order}>
          <Text style={styles.navBtn}>Order</Text>
        </View>
        <View style={styles.support}>
          <Text style={styles.navBtn}>Support</Text>
        </View>
      </TouchableOpacity>

      {/* Main View */}

      <View style={styles.main}>
        <View style={styles.dealerDetail}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Image
              style={{height: 25, width: 20, top: 3, marginRight: 10}}
              source={require('../assets/icons/File-checked.png')}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontFamily: 'Comfortaa Light',
                fontWeight: '400',
                marginBottom: 10,
              }}>
              Order #THI3465LA
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Image
              style={styles.image}
              source={require('../assets/icons/House-2.png')}
            />
            <Text style={styles.same}>Thiam’s Laundramat</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 20,
            }}>
            <Image
              style={styles.image}
              source={require('../assets/icons/Location-point.png')}
            />
            <Text style={styles.same}>
              1465 5th Avenue, New York, 10035, NY
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 20,
            }}>
            <Image
              style={styles.image}
              source={require('../assets/icons/Call-2.png')}
            />
            <Text style={styles.same}>645-390-3456</Text>
          </View>
        </View>

        {/* Services Area */}

        <View style={styles.servicesDiv}>
          <View style={styles.services}>
            <Image source={require('../assets/icons/Bike-2.png')} />
            <Text style={styles.servicesTitle}>Pick-up on 10/30 @4.45 pm</Text>
          </View>
          <View style={styles.services}>
            <Image source={require('../assets/icons/Bike-2.png')} />
            <Text style={styles.servicesTitle}>Pick-up on 10/30 @4.45 pm</Text>
          </View>
          <View style={styles.services}>
            <Image source={require('../assets/icons/DollarIcon.png')} />
            <Text style={styles.servicesTitle}>
              Estimated Price 60$ (25 lb)
            </Text>
          </View>
        </View>

        {/* Footer Area */}

        <View style={styles.footer}>
          <View style={styles.Solid_Div}>
            <Text style={styles.num}>1</Text>
          </View>
          <Image source={require('../assets/icons/DottedLine.png')} />
          <View style={styles.Regular_Div}>
            <Text style={styles.num}>2</Text>
          </View>
          <Image source={require('../assets/icons/DottedLine.png')} />
          <View style={styles.Regular_Div}>
            <Text style={styles.num}>3</Text>
          </View>
          <Image source={require('../assets/icons/DottedLine.png')} />
          <View style={styles.Regular_Div}>
            <Text style={styles.num}>4</Text>
          </View>
          <Image source={require('../assets/icons/DottedLine.png')} />
          <View style={styles.Regular_Div}>
            <Text style={styles.num}>5</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  main: {
    height: '80%',
    width: '100%',
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
    height: '100%',
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: '#65B4CE',
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
  dealerDetail: {
    backgroundColor: '#08768B',
    height: '28%',
    width: '100%',
    marginTop: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  servicesDiv: {
    height: '15%',
    flexDirection: 'row',
    marginVertical: 50,
  },
  services: {
    flex: 1,
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#08768B',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  servicesTitle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 12.8,
    letterSpacing: 1,
    lineHeight: 20,
    marginTop: 5,
    opacity: 0.7,
    fontWeight: '400',
    fontFamily: 'Comfortaa Light',
  },
  same: {
    color: 'white',
    fontSize: 16,
    opacity: 0.7,
    fontFamily: 'Comfortaa Light',
  },
  image: {
    top: 3,
    marginRight: 10,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '10%',
    paddingHorizontal: 50,
  },
  Solid_Div: {
    paddingHorizontal: 11,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 28,
    borderRadius: 20,
    backgroundColor: '#65B4CE',
  },
  Regular_Div: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 28,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#65B4CE',
    fontFamily: 'Comfortaa Light',
  },
  navBtn: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1,
    fontFamily: 'Comfortaa Light',
  },
  num: {
    color: '#fff',
    fontSize: 15,
    opacity: 0.6,
    fontFamily: 'Comfortaa Light',
  },
  // dotted: {
  //   borderWidth: 1,
  //   borderStyle: 'dotted',
  //   fontSize: 100,
  //   zIndex: 1000,
  // },
  // dottedDiv: {
  //   height: 100,
  //   width: '100%',
  //   backgroundColor: '#08768B',
  // },
});
export default OrderScreen;

{
  /* <View style={{flex: 1, alignItems: 'center', paddingHorizontal: 20}}>
   {/* Header Content 

   <View style={styles.dealerDetail}>
     <View
       style={{
         flexDirection: 'row',
         justifyContent: 'flex-start',
         marginTop: 10,
       }}>
       <Image
         style={{height: 25, width: 20, top: 3, marginRight: 10}}
         source={require('../assets/icons/File-checked.png')}
       />
       <Text style={{color: 'white', fontSize: 21}}>Order #THI3465LA</Text>
     </View>

     <View
       style={{
         flexDirection: 'row',
         justifyContent: 'flex-start',
         marginTop: 10,
       }}>
       <Image
         style={styles.image}
         source={require('../assets/icons/House-2.png')}
       />
       <Text style={styles.same}>Thiam’s Laundramat</Text>
     </View>

     <View
       style={{
         flexDirection: 'row',
         justifyContent: 'flex-start',
         marginTop: 20,
       }}>
       <Image
         style={styles.image}
         source={require('../assets/icons/Location-point.png')}
       />
       <Text style={styles.same}>1465 5th Avenue, New York, 10035, NY</Text>
     </View>

     <View
       style={{
         flexDirection: 'row',
         justifyContent: 'flex-start',
         marginTop: 20,
       }}>
       <Image
         style={styles.image}
         source={require('../assets/icons/Call-2.png')}
       />
       <Text style={styles.same}>645-390-3456</Text>
     </View>
   </View>
   {/* Services Area 

   <View style={styles.servicesDiv}>
     <View style={styles.services}>
       <Image source={require('../assets/icons/Bike-2.png')} />
       <Text style={styles.servicesTitle}>Pick-up on 10/30 @4.45 pm</Text>
     </View>
     <View style={styles.services}>
       <Image source={require('../assets/icons/Bike-2.png')} />
       <Text style={styles.servicesTitle}>Pick-up on 10/30 @4.45 pm</Text>
     </View>
     <View style={styles.services}>
       <Image source={require('../assets/icons/DollarIcon.png')} />
       <Text style={styles.servicesTitle}>Estimated Price 60$ (25 lb)</Text>
     </View>
   </View>
   {/* Footer Content 

   <View style={styles.footer}>
     <Text>Text is here</Text>
   </View>
 </View>; */
}
