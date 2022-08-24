import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const DealerChat = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.contanier} onPress={onPress}>
      <Text style={styles.dealerName}>Thiam’s Laundramat</Text>
      <Text style={styles.orderName}>Order #THI3465LA</Text>
      <Text style={styles.pickDetail}>Pick-up on 10.30 @ 4.45 pm</Text>
      <View style={styles.Line} />
      <Text style={styles.CommentTitle}>Comment:</Text>
      <Text style={styles.comment}>
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
        Vestibulum ante ipsum primis
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contanier: {
    height: '30%',
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#08768B',
    marginVertical: 10,
  },
  dealerName: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 1,
  },
  orderName: {
    color: '#fff',
    fontSize: 16,
    marginTop: 8,
  },
  pickDetail: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
  },
  CommentTitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
    letterSpacing: 1,
  },
  Line: {
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 20,
  },
  comment: {
    color: '#fff',
    letterSpacing: 1,
    lineHeight: 18,
    marginTop: 15,
    fontSize: 11,
    opacity: 0.8,
  },
});
export default DealerChat;
