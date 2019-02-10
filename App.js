/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from 'react-native';

import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList';
import Calgary from './src/assets/calgary.jpeg';
import PlaceDetails from './src/components/PlaceDetails';
import { connect } from 'react-recdux';
import * as actions from './src/store/actions';

class App extends Component {
  state = {
    placeName: '',
    selectedPlace: null,
    places: [
      {
        key: `${Math.random()}`,
        placeName: 'Calgary',
        placeImage: Calgary
      }
    ]
  };

  // handler to keep track of input change
  placeNameChangedHandler = placeName => {
    this.props.onPlaceNameChange(placeName);
  };

  // handler to submit input
  placeSubmitHandler = () => {
    this.props.addPlace(placeName);
  };

  // delete item handler
  deleteItemHandler = key => {
    this.props.onDeletePlace(key);
  };

  // placeSelected Handler
  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  // close modal handler
  closeModalHandler = () => {
    this.props.onDeselectPlace();
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetails
          selectedPlace={this.props.selectedPlace}
          closeModalHandler={this.closeModalHandler}
          deleteItemHandler={this.deleteItemHandler}
        />
        <PlaceInput
          placeName={this.props.placeName}
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        <PlaceList
          places={this.props.places}
          deleteItemHandler={this.deleteItemHandler}
          placeSelectedHandler={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 50
  }
});

const mapStateToProps = state => {
  return {
    placeName: state.placeName.placeName,
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPlaceNameChange: placeName => dispatch(actions.inputChange(placeName)),
    onAddPlace: placeName => dispatch(actions.addPlace(placeName)),
    onDeletePlace: key => dispatch(actions.deletePlace(key)),
    onSelectPlace: key => dispatch(action.selectPlace(key)),
    onDeselectPlace: () => dispatch(action.deselectplace())
  };
};

export default connect(
  mapstateToProps,
  mapDispatchToProps
)(App);
