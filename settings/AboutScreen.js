import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>About Us</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoContent}>
              Welcome to our app! We are dedicated to providing you with the best service and user experience possible.
              Our team works hard to continuously improve and update the app to meet your needs.
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Version</Text>
            <Text style={styles.infoContent}>1.0.0</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Developed by</Text>
            <Text style={styles.infoContent}>Your Company Name</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Contact</Text>
            <Text style={styles.infoContent}>contact@example.com</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContactUs')}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    marginTop: 25,
    paddingHorizontal: 20,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'left',
    marginBottom: 10,
  },
  sidebarText: {
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 15,
  },
  infoTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoContent: {
    marginBottom: 10,
    color: '#555',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#00072D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AboutScreen;
