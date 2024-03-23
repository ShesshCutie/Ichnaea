// WelcomeScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TwoOptionButton from './TwoOptionButton'; // Import the TwoOptionButton component

const WelcomeScreen = ({ navigation }) => {
  const handleOption1Press = () => {
    navigation.navigate('homefinder'); 
  };

  const handleOption2Press = () => {
    navigation.navigate('homefounder'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to My App</Text>
      <TwoOptionButton
        option1Label="  Finder  "
        option2Label="Founder"
        onOption1Press={handleOption1Press}
        onOption2Press={handleOption2Press}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default WelcomeScreen;
