import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function HelpAndSupportScreen({ navigation }) {
  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>FAQs</Text>
            <Text style={styles.infoContent}>Find answers to frequently asked questions.</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Contact Us</Text>
            <Text style={styles.infoContent}>Get in touch with our support team for assistance.</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Report a Problem</Text>
            <Text style={styles.infoContent}>Let us know if you're experiencing any issues.</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContactUs')}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNavigate('Report Problem')}>
            <Text style={styles.buttonText}>Report Problem</Text>
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

export default HelpAndSupportScreen;
