import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style'; // Import styles from './style'

import WelcomeScreen from './WelcomeScreen';
import SignUpPrompt from './signUpPrompt'; 
import ProfileScreen from './ProfileScreen';
import PostScreen from './PostScreen';
import AdminScreen from './AdminScreen';
import Archives from './Archives';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (username === 'username' && password === 'password') {
      navigation.navigate('Welcome');
    } else if (username === 'admin' && password === 'password') {
      navigation.navigate('Admin'); // Navigate to the admin page upon successful login
    } else {
      alert('Invalid username or password.');
    }
  };
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = () => {
    // Navigate to the sign-up prompt screen
    navigation.navigate('SignUpPrompt');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Mama's Find</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.toggleButton} onPress={handleTogglePassword}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
        </TouchableOpacity>
      </View>
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SignUpPrompt" component={SignUpPrompt} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Archives" component={Archives} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
