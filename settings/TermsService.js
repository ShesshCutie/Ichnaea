import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function TermsService({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Terms of Service</Text>
          <ScrollView style={styles.scrollContainer}>
            <Text style={styles.text}>
              Welcome to our app. By accessing or using our service, you agree to be bound by these terms of service. If you disagree with any part of the terms, then you may not access the service.
            </Text>
            <Text style={styles.sectionTitle}>1. General</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={styles.sectionTitle}>2. User Responsibilities</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={styles.sectionTitle}>3. Prohibited Activities</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={styles.sectionTitle}>4. Termination</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={styles.sectionTitle}>5. Changes to Terms</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </ScrollView>
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
  scrollContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#00072D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default TermsService;
