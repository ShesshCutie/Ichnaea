import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

function Settingscreen({ navigation }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.sidebar, { left: showSidebar ? 0 : -200 }]}>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => handleNavigate('Home')}>
          <AntDesign name="home" size={20} color="black" />
          <Text style={styles.sidebarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => handleNavigate('Profile')}>
          <AntDesign name="user" size={20} color="black" />
          <Text style={styles.sidebarText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => handleNavigate('Post')}>
          <AntDesign name="plus" size={20} color="black" />
          <Text style={styles.sidebarText}>Post Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => handleNavigate('Settings')}>
          <AntDesign name="setting" size={20} color="black" />
          <Text style={styles.sidebarText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => handleNavigate('front')}>
          <AntDesign name="logout" size={20} color="black" />
          <Text style={styles.sidebarText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
          <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton} onPress={() => handleNavigate('Account')}>
            <FontAwesome name="user" size={24} color="black" />
            <Text style={styles.optionText}>Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton} onPress={() => handleNavigate('Feedback')}>
            <FontAwesome name="comment" size={24} color="black" />
            <Text style={styles.optionText}>Feedback</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton} onPress={() => handleNavigate('Privacy & Security')}>
            <FontAwesome name="lock" size={24} color="black" />
            <Text style={styles.optionText}>Privacy & Security</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton} onPress={() => handleNavigate('Help and Support')}>
            <FontAwesome name="question-circle" size={24} color="black" />
            <Text style={styles.optionText}>Help and Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton} onPress={() => handleNavigate('Terms of Service')}>
            <FontAwesome name="file-text-o" size={24} color="black" />
            <Text style={styles.optionText}>Terms of Service</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton} onPress={() => handleNavigate('About')}>
            <FontAwesome name="info-circle" size={24} color="black" />
            <Text style={styles.optionText}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  sidebar: {
    width: 200,
    backgroundColor: '#FFFFFF',
    paddingTop: 40,
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sidebarText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  content: {
    flex: 1,
    marginLeft: 5,
    paddingHorizontal: 20,
  },
  sidebarToggle: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 3,
  },
  optionsContainer: {
    marginTop: 60,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  optionText: {
    marginLeft: 15,
    fontSize: 18,
    color: '#00072D',
  },
});

export default Settingscreen;
