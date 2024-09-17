// WelcomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PostScreen = () => { 
  const [showSidebar, setShowSidebar] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  
  const handlefinder = () => {

    navigation.navigate('Finder');
  };

  const handlefounder = () => {

    navigation.navigate('Founder');
  };

  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Post Item</Text>
      </View>
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
        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Settings')}>
            <AntDesign name="setting" size={20} color="black" />
            <Text style={styles.sidebarText}>Settings</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('front')}>
          <AntDesign name="logout" size={20} color="black" />
          <Text style={styles.sidebarText}>Logout</Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
        <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
      </TouchableOpacity> */}

      <View style={styles.content}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#ECECEC', borderRadius: 8, marginBottom: 10, borderColor: 'black', borderWidth: 3, marginBottom: 25,}} onPress={handlefinder}>
            <AntDesign name="questioncircleo" size={52} color="#00072D" style={{ marginRight: 10 }} /> 
            <Text style={styles.post1}> Seeker </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#00072D', borderRadius: 5, marginBottom: 10 }} onPress={handlefounder}>
            <AntDesign name="search1" size={52} color="white" style={{ marginRight: 10 }} />  
            <Text style={styles.post}>Founder</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
        <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
      </TouchableOpacity>

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
    backgroundColor: '#ECECEC',
  },
  navigation: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingLeft: 10,
    zIndex: 2,
    transition: 'left 0.3s',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: -10,
    marginLeft: 10,
  },
  sidebarText: {
    fontSize: 18,
    marginLeft: 8,
    color: '#000',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sidebarToggle: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 3,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  post: {
    color: 'white',
    fontSize: 42,
  },
  post1: {
    color: 'black',
    fontSize: 42,
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#3E4A59',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },
});

export default PostScreen;



