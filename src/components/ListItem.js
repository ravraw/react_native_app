import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

function ListItem(props) {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <Image source={props.placeImage} style={styles.placeImage} />
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImage: {
    width: 30,
    height: 30,
    marginRight: 10
  }
});

export default ListItem;
