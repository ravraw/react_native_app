import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class PlaceInput extends Component {
  render(props) {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={this.props.placeName}
          onChangeText={val => this.props.placeNameChangedHandler(val)}
          placeholder="Enter Place Name"
        />
        <Button
          title="Add"
          color="#841584"
          style={styles.buttonInput}
          onPress={this.props.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

export default PlaceInput;
