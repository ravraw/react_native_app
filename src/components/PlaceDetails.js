import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Modal,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function PlaceDetails(props) {
  let modalContent = null;
  if (props.selectedPlace !== null) {
    modalContent = (
      <View style={styles.modalContainer}>
        <View>
          <Image
            source={props.selectedPlace.placeImage}
            style={styles.placeImage}
          />
          <Text style={styles.placeName}>{props.selectedPlace.placeName}</Text>
        </View>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.closeModalHandler}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      {modalContent}
      <View>
        <TouchableOpacity>
          <View style={styles.deleteButton}>
            <Icon
              size={30}
              name="ios-trash"
              color="red"
              onPress={() =>
                props.deleteItemHandler(
                  props.selectedPlace ? props.selectedPlace.key : null
                )
              }
            />
          </View>
        </TouchableOpacity>
        <Button
          title="Delete"
          color="red"
          onPress={() =>
            props.deleteItemHandler(
              props.selectedPlace ? props.selectedPlace.key : null
            )
          }
        />
        <Button title="Close" color="green" onPress={props.closeModalHandler} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  placeImage: {
    width: 200,
    height: 300
  },
  placeName: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 28
  },
  deleteButton: {
    alignItems: 'center'
  }
});
export default PlaceDetails;
