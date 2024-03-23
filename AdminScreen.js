// AdminScreen.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'blue', borderRadius: 5, marginBottom: 10 }} onPress={handleManageUsers}>
        <FontAwesome name="archive" size={18} color="white" style={{ marginRight: 10 }} />
        <Text style={{ color: 'white', fontSize: 18 }}>Archives</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'blue', borderRadius: 5, marginBottom: 10 }} onPress={handleManageContent}>
        <FontAwesome name="list-alt" size={18} color="white" style={{ marginRight: 10 }} />
        <Text style={{ color: 'white', fontSize: 18 }}>Matching Results</Text>
      </TouchableOpacity>
      {/* Logout button */}
      <TouchableOpacity style={{ position: 'absolute', bottom: 20, right: 20, padding: 10, backgroundColor: 'red', borderRadius: 5 }} onPress={handleLogout}>
        <Text style={{ color: 'white', fontSize: 18 }}>Logout</Text>
      </TouchableOpacity>

    </View>
  );
};

export default AdminScreen;
