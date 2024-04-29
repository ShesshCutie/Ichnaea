import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons

const AdminScreen = ({ navigation }) => {
  const handleManageUsers = () => {
    // Navigate to user management screen
    navigation.navigate('Archives');
  };

  const handleManageContent = () => {
    // Navigate to content management screen
    navigation.navigate('MatchingResults');
  };

  const handleLogout = () => {
    // Navigate to the Home screen or any other screen where you want to redirect after logout
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuItem} onPress={handleManageUsers}>
        <FontAwesome name="archive" size={18} color="white" style={styles.icon} />
        <Text style={styles.menuText}>       Archives         </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={handleManageContent}>
        <FontAwesome name="list-alt" size={18} color="white" style={styles.icon} />
        <Text style={styles.menuText}>Matching Results</Text>
      </TouchableOpacity>
      {/* Logout button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#4e67eb',
    borderRadius: 10,
    marginBottom: 20,
  },
  menuText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#ff6b6b',
    borderRadius: 10,
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AdminScreen;
