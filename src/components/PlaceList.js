import React from 'react';
import ListItem from './ListItem';
import { StyleSheet, FlatList } from 'react-native';

function PlaceList(props) {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.placeName}
          placeImage={info.item.placeImage}
          onItemPressed={() => props.placeSelectedHandler(info.item.key)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 50
  },
  listContainer: {
    width: '100%'
  }
});

export default PlaceList;
