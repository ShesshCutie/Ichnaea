import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

function Settingscreen({ navigation }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const openContentModal = (content) => {
    setSelectedContent(content);
    setShowFilterOptions(true);
  };
  const handlefeedback = () => {
    navigation.navigate('Feedback');
  };
  const handleaccount = () => {
    navigation.navigate('Account');
  };
  const handleprivacy = () => {
    navigation.navigate('Privacy');
  };
  const handleHelpSupport = () => {
    navigation.navigate('HelpSupport');
  };
  const handleAbout = () => {
    navigation.navigate('About');
  };

  const handleTermsService = () => {
    navigation.navigate('Terms');
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
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
        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Login')}>
          <AntDesign name="logout" size={20} color="black" />
          <Text style={styles.sidebarText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
          <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
        </TouchableOpacity>

          <View style={styles.content}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.buton} onPress={handleaccount}>
              <FontAwesome name="user" size={32} color="#00072D" style={{ marginRight: 10 }} /> 
              <View style={{ flex: 1 }}>
                <Text style={styles.post1}>Account</Text>
                <View style={{ }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buton} onPress={handlefeedback}>
              <FontAwesome name="comment" size={32} color="#00072D" style={{ marginRight: 10 }} /> 
              <View style={{ flex: 1 }}>
                <Text style={styles.post1}>Feedback</Text>
                <View style={{ }} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buton} onPress={handleprivacy}>
              <FontAwesome name="lock" size={32} color="#00072D" style={{ marginRight: 10 }} /> 
              <View style={{ flex: 1 }}>
                <Text style={styles.post1}>Privacy & Security</Text>
                <View style={{ }} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buton} onPress={handleHelpSupport}>
              <FontAwesome name="question-circle" size={32} color="#00072D" style={{ marginRight: 10 }} /> 
              <View style={{ flex: 1 }}>
                <Text style={styles.post1}>Help and Support</Text>
                <View style={{ }} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buton} onPress={handleTermsService}>
              <FontAwesome name="file-text-o" size={32} color="#00072D" style={{ marginRight: 10 }} /> 
              <View style={{ flex: 1 }}>
                <Text style={styles.post1}>Terms of Service</Text>
                <View style={{ }} />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buton} onPress={handleAbout}>
              <FontAwesome name="info-circle" size={32} color="#00072D" style={{ marginRight: 10 }} /> 
              <View style={{ flex: 1 }}>
                <Text style={styles.post1}>About</Text>
                <View style={{ }} />
              </View>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const iconNameForItem = (item) => {
  switch (item) {
    case 'Notifications':
      return 'notification';
    case 'Feedback':
      return 'feedback';
    case 'Privacy & Security':
      return 'lock';
    case 'Help and Support':
      return 'questioncircleo';
    case 'About':
      return 'infocirlceo';
    default:
      return 'questioncircleo';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  navigation: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    marginLeft: 200,
    paddingHorizontal: 20,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  sidebarText: {
    marginLeft: 10,
  },
  settingButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
    marginLeft: -150,
    alignItems: 'center',
    flexDirection: 'row',
  },
  settingButtonText: {
    fontSize: 16,
    marginLeft: 10, 
  },
  sidebarToggle: {
    position: 'absolute',
    top: 20,
    left: -180,
    zIndex: 3,
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
  buton: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10, 
    backgroundColor: '#F7FCFE', 
    borderRadius: 8, 
    marginBottom: 15, 
    width: 330,
    borderBottomWidth: 2,
    marginLeft: -520,
    borderBottomColor: 'black'
  }

});

export default Settingscreen;
