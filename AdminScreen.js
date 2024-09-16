import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; 

const AdminScreen = ({ navigation }) => {
  const handleManageUsers = () => {
    navigation.navigate('Archives');
  };

  const handleManageContent = () => {
    navigation.navigate('MatchingResults');
  };

  const handleLogout = () => {
    navigation.navigate('front');
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={handleManageUsers}>
          <LinearGradient
            colors={['#4e67eb', '#6a9cfb']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <FontAwesome name="archive" size={24} color="white" style={styles.icon} />
            <Text style={styles.menuText}>Archives</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleManageContent}>
          <LinearGradient
            colors={['#34eb83', '#58eb95']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <FontAwesome name="list-alt" size={24} color="white" style={styles.icon} />
            <Text style={styles.menuText}>Matching Results</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.topLeftIcon}>
        <TouchableOpacity onPress={handleLogout}>
          <FontAwesome name="envelope" size={28} color="#FAA500" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  menuContainer: {
    width: '100%',
    alignItems: 'center',
  },
  menuItem: {
    width: '90%',
    marginBottom: 20,
    borderRadius: 15,
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  menuText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 15,
    fontWeight: '500',
  },
  icon: {
    marginRight: 10,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: '#ff6b6b',
    borderRadius: 30,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  topLeftIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
  },
});

export default AdminScreen;
