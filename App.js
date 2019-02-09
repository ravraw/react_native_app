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

export default class App extends Component {
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
  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  // handler to submit input
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.setState(prevState => {
      return {
        places: [
          {
            key: `${Math.random()}`,
            placeName: prevState.placeName,
            placeImage: {
              uri:
                'https://www.959chfm.com/wp-content/uploads/sites/12/2017/02/Tower-e1487706581799.png'
            }
          },
          ...prevState.places
        ],
        placeName: ''
      };
    });
  };

  // delete item handler
  deleteItemHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => place.key !== key)
      };
    });
  };

  // placeSelected Handler

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => place.key === key)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetails selectedPlace={this.state.selectedPlace} />
        <PlaceInput
          placeName={this.state.placeName}
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        <PlaceList
          places={this.state.places}
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
