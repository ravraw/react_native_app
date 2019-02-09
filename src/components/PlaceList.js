import React from 'react';
import ListItem from './ListItem';

function PlaceList(props) {
  return props.places.map((place, index) => {
    return (
      <ListItem
        placeName={place}
        onItemPressed={() => props.deleteItemHandler(index)}
      />
    );
  });
}

export default PlaceList;
