import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

function PrivacySecurity({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Privacy Settings</Text>
        <Text style={styles.sectionContent}>
          Here you can update your privacy settings to control what information you share with others.
        </Text>
        
        <Text style={styles.sectionTitle}>Security Settings</Text>
        <Text style={styles.sectionContent}>
          Here you can update your security settings to ensure your account is safe and secure.
        </Text>
        
        <Text style={styles.sectionTitle}>Data Protection</Text>
        <Text style={styles.sectionContent}>
          Learn how we protect your data and what measures we take to keep your information secure.
        </Text>
        
        <Text style={styles.sectionTitle}>Two-Factor Authentication</Text>
        <Text style={styles.sectionContent}>
          Enable two-factor authentication to add an extra layer of security to your account.
        </Text>
        
        <Text style={styles.sectionTitle}>Password Management</Text>
        <Text style={styles.sectionContent}>
          Change your password regularly and use a strong, unique password for your account.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    marginLeft: 10,
  },
  content: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default PrivacySecurity;
