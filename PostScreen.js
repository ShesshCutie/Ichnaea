// WelcomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const PostScreen = () => { // Rename PostScreen to WelcomeScreen
  const [showSidebar, setShowSidebar] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  
  const handlefinder = () => {

    navigation.navigate('Finder');
  };

  const handlefounder = () => {

    navigation.navigate('Founder');
  };
  

  useEffect(() => {
    fetchData(); 
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/data');
      setData(response.data); // Set the data received from the server
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <View style={[styles.sidebar, { left: showSidebar ? 0 : -200 }]}>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Home')}>
          <AntDesign name="home" size={20} color="black" />
          <Text style={styles.sidebarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Profile')}>
          <AntDesign name="user" size={20} color="black" />
          <Text style={styles.sidebarText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Post')}>
          <AntDesign name="plus" size={20} color="black" />
          <Text style={styles.sidebarText}>Post Item</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarItem} >
          <AntDesign name="setting" size={20} color="black" />
          <Text style={styles.sidebarText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Welcome')}>
          <AntDesign name="logout" size={20} color="black" />
          <Text style={styles.sidebarText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'blue', borderRadius: 5, marginBottom: 10 }} onPress={handlefinder}>
            <AntDesign name="search1" size={52} color="black" style={{ marginRight: 10 }} />   
            <Text style={styles.post}>Finder</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'blue', borderRadius: 5, marginBottom: 10 }} onPress={handlefounder}>
            <AntDesign name="search1" size={52} color="black" style={{ marginRight: 10 }} />  
            <Text style={styles.post}>Founder</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Sidebar Toggle Button */}
      <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
        <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
      </TouchableOpacity>

      {/* Filter Options Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showFilterOptions}
        onRequestClose={() => setShowFilterOptions(false)}
      >
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row', // Display sidebar and content side by side
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sidebar: {
    width: 200,
    backgroundColor: '#f0f0f0',
    paddingTop: 20,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    marginLeft: 200, // Adjust content to make space for sidebar
    paddingHorizontal: 20,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sidebarText: {
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  sidebarToggle: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    marginBottom: 10,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    backgroundColor: '#f0f0f0',
  },
  modalButtonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  post: {
    color: 'Black',
    fontSize: 52 
  }
});

export default PostScreen;
