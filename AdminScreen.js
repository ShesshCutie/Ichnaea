
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const AdminScreen = ({ navigation }) => {
  const handleManageUsers = () => {
    navigation.navigate('Archives');
  };

  const handleManageContent = () => {
    navigation.navigate('MatchingResults');
  };

  const handleAccounts = () => {
    navigation.navigate('Accounts');
  };
  

  const handleLogout = () => {
    navigation.navigate('front');
  };

  return (
    <View style={styles.container}>
      {/* Background Image for Sidebar */}
      <View style={styles.picture}>
      <ImageBackground
        source={require("./assets/back.png")} // Add your background image here
        style={{
          width: '100%',
          height: 210,
          resizeMode: 'cover',
          alignItems: "absolute",
          zIndex: 1,
          transform: [
              { translateX: 0 },
              { translateY: 35 },
          ]
      }}
      >
        <Image
          source={require("./assets/logo1.png")}
          style={styles.logo1}
        />
      </ImageBackground>
      <Image
          source={require("./assets/shapess.png")}
          style={styles.logo}
        />
      <View style={styles.Admin}>
          <Text style={styles.Text}>Admin</Text>
        </View>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.menuItem} onPress={handleManageUsers}>
          <FontAwesome name="archive" size={24} color="black" />
          <Text style={styles.menuText}>Archives</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleManageContent}>
          <FontAwesome name="list-alt" size={24} color="black" />
          <Text style={styles.menuText}>Matched Items</Text>
        </TouchableOpacity>

         {/* Navigate to Accounts Screen */}
        <TouchableOpacity style={styles.menuItem} onPress={handleAccounts}>
          <FontAwesome name="user" size={24} color="black" />
          <Text style={styles.menuText}>Accounts</Text>
        </TouchableOpacity>


      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>LOG OUT</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  content: {
    flex: 1,
    backgroundColor: '#ffff',
    marginTop: -250,
    zIndex: 3,
  },
  picture:{
    alignContent: 'absolute',
  },
  sidebar: {
    width: '90%',
    marginLeft: 20,
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden', // To ensure content stays within rounded borders
  },
  logo: {
    height: 260,
    width: '100%',
    marginTop: -20,
    zIndex: 2,
  },
  logo1: {
    height: 100,
    width: 100,
    marginTop: 25,
    zIndex: 2,
    marginLeft: 120,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '70%',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    elevation: 3,
    marginLeft: 55,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#ff6b6b',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    position: 'absolute',
    bottom: 30,
    right: 20,
    elevation: 4,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  Admin: {
    width: 200,
    height: 90,
    position: 'Center',
    zIndex: 3,
  },
  Text: {
    fontSize: 24,
    marginLeft: 130,
    marginTop: -230, 
  },
});

export default AdminScreen;
