import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function AccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Account Information</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Name:</Text>
            <Text style={styles.infoContent}>John Doe</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Email:</Text>
            <Text style={styles.infoContent}>johndoe@example.com</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Phone:</Text>
            <Text style={styles.infoContent}>+1 123 456 7890</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditAccount')}>
            <Text style={styles.buttonText}>Edit Account</Text>
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
    zIndex: 1,
    marginTop: 55
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
    marginBottom: 40,
    marginTop: -15,
    marginLeft: 60
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoTitle: {
    fontWeight: 'bold',
    width: 100,
  },
  infoContent: {
    flex: 1,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#00072D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AccountScreen;
