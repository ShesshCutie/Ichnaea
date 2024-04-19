import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style'; 

import WelcomeScreen from './WelcomeScreen';
import SignUpPrompt from './signUpPrompt'; 
import ProfileScreen from './ProfileScreen';
import PostScreen from './PostScreen';
import AdminScreen from './AdminScreen';
import Archives from './Archives';
import FinderScreen from './FinderScreen';
import FounderScreen from './FounderScreen';
import Login from './Login';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  
  const handleSignUp = () => {
    // Navigate to the sign-up prompt screen
    navigation.navigate('SignUpPrompt');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Inchnaea</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {/* Sign-up button */}
      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={HomeScreen} />
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SignUpPrompt" component={SignUpPrompt} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Archives" component={Archives} />
        <Stack.Screen name="Finder" component={FinderScreen} />
        <Stack.Screen name="Founder" component={FounderScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

