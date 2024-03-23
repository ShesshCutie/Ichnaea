import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios'; // Import axios for making HTTP requests

const HomeFounderScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [sortByItem, setSortByItem] = useState(null);
  const [sortByDate, setSortByDate] = useState(null);
  const [data, setData] = useState([]); // State to store database content

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/data');
      setData(response.data); // Set the data received from the server
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleOption1Press = () => {
    // Logic for option 1 press
  };

  const handleOption2Press = () => {
    // Logic for option 2 press
  };

  const handleSortByItem = (item) => {
    setSortByItem(item);
    setShowFilterOptions(false);
  };

  const handleSortByDate = (date) => {
    setSortByDate(date);
    setShowFilterOptions(false);
  };

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <View style={[styles.sidebar, { left: showSidebar ? 0 : -200 }]}>
        <TouchableOpacity style={styles.sidebarItem}>
          <AntDesign name="home" size={20} color="black" />
          <Text style={styles.sidebarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
          <AntDesign name="user" size={20} color="black" />
          <Text style={styles.sidebarText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
          <AntDesign name="plus" size={20} color="black" />
          <Text style={styles.sidebarText}>Post Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
          <AntDesign name="setting" size={20} color="black" />
          <Text style={styles.sidebarText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
          <AntDesign name="logout" size={20} color="black" />
          <Text style={styles.sidebarText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <TouchableOpacity onPress={() => setShowFilterOptions(true)}>
            <AntDesign name="filter" size={24} color="black" />
          </TouchableOpacity>
        </View>
        
        {/* Display fetched data */}
        <View>
          {data.map(item => (
            <Text key={item.idfounder}>{item.firstname}</Text> // Assuming you have a 'name' field in your database
          ))}
        </View>

        {/* Other components and logic */}
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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* Sort by Item */}
            <Text style={styles.modalHeading}>Sort by Item:</Text>
            <TouchableOpacity onPress={() => handleSortByItem('phone')} style={styles.modalButton}>
              <Text>Phone</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSortByItem('jewelry')} style={styles.modalButton}>
              <Text>Jewelry</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSortByItem('money')} style={styles.modalButton}>
              <Text>Money</Text>
            </TouchableOpacity>

            {/* Sort by Date */}
            <Text style={styles.modalHeading}>Sort by Date:</Text>
            <TouchableOpacity onPress={() => handleSortByDate('week')} style={styles.modalButton}>
              <Text>This Week</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSortByDate('month')} style={styles.modalButton}>
              <Text>This Month</Text>
            </TouchableOpacity>

            {/* Close Button */}
            <TouchableOpacity onPress={() => setShowFilterOptions(false)} style={[styles.modalButton, styles.modalButtonClose]}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
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
});

export default HomeFounderScreen;
