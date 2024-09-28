import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

function Settingscreen({ navigation }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={[styles.sidebar, { left: showSidebar ? 0 : -200 }]}>
        <View style={styles.ICHNAEA}>
        <Text style={styles.Text}>Ichnaea</Text>
        <Image
            source={require("./assets/logo.png")}
            style={{
                height: 80,
                width: 80,
                borderRadius: 20,
                position: "absolute",
                top: 10,
                marginTop: -6,
                marginLeft: 10,
            }}
          />
          </View>
        <View style={styles.SIDEBARALL}>
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
      </View>
      <View>
        <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
          <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
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
  navigation: {
    flex: 1,
    flexDirection: 'row',
  },
  SIDEBARALL: {
    marginTop: 90,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingLeft: 20,
    zIndex: 2,
    transition: 'left 0.3s',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
    marginTop: 35,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: -15,
  },
  sidebarText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#181818',
    fontWeight: '600',
  },
  Text: {
    fontSize: 24,
    marginLeft: 90,
    marginTop: 25,
  },
  ICHNAEA: {
    backgroundColor: '#FAA500',
    width: 200,
    height: 90,
    position: 'absolute',
  },
  content: {
    flex: 1,
    marginLeft: 5,
    paddingHorizontal: 20,
  },
  sidebarToggle: {
    position: 'absolute',
    top: -43,
    left: 20,
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

export default Settingscreen;
