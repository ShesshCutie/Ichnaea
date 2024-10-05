import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';

const AccountsScreen = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await axios.get('http://192.168.1.66:3000/api/accounts'); // Replace with your actual API
      setAccounts(response.data); // Assuming the API returns an array of accounts
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accounts</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {accounts.map((account, index) => (
          <TouchableOpacity
            key={index}
            style={styles.accountItem}
            onPress={() => console.log(`Selected: ${account.name}`)} // Add your navigation or actions here
          >
            <Text style={styles.accountName}>{account.name}</Text>
            <Text style={styles.accountDetails}>Email: {account.email}</Text>
            <Text style={styles.accountDetails}>Phone: {account.phone}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  accountItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2, // Adds subtle shadow for Android
    shadowColor: '#000', // Adds subtle shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  accountName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  accountDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default AccountsScreen;