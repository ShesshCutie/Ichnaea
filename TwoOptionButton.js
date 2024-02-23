// TwoOptionButton.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TwoOptionButton = ({ option1Label, option2Label, onOption1Press, onOption2Press }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onOption1Press}>
        <Text style={styles.buttonText}>{option1Label}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onOption2Press}>
        <Text style={styles.buttonText}>{option2Label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Align items in the center horizontally
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '70%', // Set width to 70% of the container width
    marginBottom: 10, // Add margin between the buttons
    alignItems: 'center', // Align items in the center horizontally
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TwoOptionButton;
