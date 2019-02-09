/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList';

export default class App extends Component {
  state = {
    placeName: '',
    places: ['Calgary']
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
        places: [prevState.placeName, ...prevState.places],
        placeName: ''
      };
    });
  };

  // delete item
  deleteItemHandler = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((places, i) => i !== index)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          placeName={this.state.placeName}
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        <PlaceList
          places={this.state.places}
          deleteItemHandler={this.deleteItemHandler}
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
