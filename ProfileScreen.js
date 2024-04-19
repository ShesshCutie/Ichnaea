import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios'; 

function ProfileScreen({ route, navigation }) {
  const { user } = route.params || {};
  const [showSidebar, setShowSidebar] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [data, setData] = useState([]); 

  useEffect(() => {
    fetchData(); 
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.10.179:3000/api/data');
      setData(response.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!user) {
    return <View><Text>No user data found!</Text></View>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <View style={[styles.sidebar, { left: showSidebar ? 0 : -200 }]}>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Home')}>
            <AntDesign name="home" size={20} color="black" />
            <Text style={styles.sidebarText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Profile', { user: userData })}>
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

        <View style={styles.content}>
          <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
            <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
          </TouchableOpacity>

          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image source={{ uri: user.avatar }} style={styles.avatar} />
              <View style={styles.info}>
                <Text style={styles.name}>{user.firstname} {user.lastname}</Text>
                <Text style={styles.email}>{user.email}</Text>
                <Text style={styles.Username}>@{user.Username}</Text>
              </View>
            </View>
          </View>

               
        {/* Display fetched data */}
        <View style={styles.cardsContainer1}>
          {data.map((item) => (
            <TouchableOpacity key={item.id} style={styles.cardContainer1} onPress={() => {/* Handle card press */}}>
              <Text style={styles.cardTitle1}>{item.found_item}</Text>
              <View style={styles.cardDetails1}>
                <Text style={styles.cardText1}>{`Name: ${item.firstname} ${item.lastname}`}</Text>
                <Text style={styles.cardText1}>{`Location: ${item.location}`}</Text>
                <Text style={styles.cardText1}>{`Email: ${item.email}`}</Text>
                <Text style={styles.cardText1}>{`Description: ${item.description}`}</Text>
                {/* Additional details */}
              </View>
            </TouchableOpacity>
          ))}
        </View>

          {/* Filter Options Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={showFilterOptions}
            onRequestClose={() => setShowFilterOptions(false)}
          >
          </Modal>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navigation: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 200,
    backgroundColor: '#f0f0f0',
    paddingTop: 40,
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 2,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  sidebarText: {
    marginLeft: 10,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sidebarToggle: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 3,
  },
  cardContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop:33,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  info: {
    marginLeft: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  Username: {
    fontSize: 16,
    color: '#666',
  },
  cardsContainer1: {
    marginBottom: 20,
  },
  cardContainer1: {
    backgroundColor: '#f9f9f9',
    borderRadius: 2,
    padding: 5,
    marginBottom: 5,
    elevation: 3,
    width: 200,
    marginLeft: 65,
    
  },
  cardTitle1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDetails1: {},
  cardText: {
    marginBottom: 5,
  },
});

export default ProfileScreen;
