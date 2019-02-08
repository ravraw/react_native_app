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
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

// type Props = {};
export default class App extends Component {
  state = {
    placeName: '',
    places: ['Calgary']
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.setState(prevState => {
      return {
        places: [...prevState.places, prevState.placeName],
        placeName: ''
      };
    });
  };

  renderPlaces = () => {
    return this.state.places.map((place, i) => <Text key={i}>{place}</Text>);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            placeholder="Enter Place Name"
          />
          <Button
            title="Add"
            color="#841584"
            style={styles.buttonInput}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View>{this.renderPlaces()}</View>
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
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textInput: {
    borderColor: 'green',
    borderBottomWidth: 1.5,
    width: '80%'
  },
  buttonInput: {
    width: '10%'
  }
});
