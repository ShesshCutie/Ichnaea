<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> origin/master
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style'; // Import styles from './style'
<<<<<<< HEAD
import mysql from 'mysql'; // Import the mysql package

const Stack = createStackNavigator();

// Database connection configuration
const connection = mysql.createConnection({
  host: 'your_host',
  user: 'your_user',
  password: 'your_password',
  database: 'your_database'
});

const DatabaseConnection = () => {
  useEffect(() => {
    // Connect to the database
    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to database:', err);
        return;
      }
      console.log('Connected to database.');
    });

    // Close the connection when component unmounts
    return () => {
      connection.end((err) => {
        if (err) {
          console.error('Error closing database connection:', err);
          return;
        }
        console.log('Connection closed.');
      });
    };
  }, []);

  return null; // No UI component for database connection
};

=======

import WelcomeScreen from './WelcomeScreen';
import SignUpPrompt from './signUpPrompt'; 
import ProfileScreen from './ProfileScreen';
import PostScreen from './PostScreen';

const Stack = createStackNavigator();

>>>>>>> origin/master
function HomeScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
<<<<<<< HEAD
    // Handle login logic here
=======
    if (username === 'admin' && password === 'password') {
      navigation.navigate('Welcome');
    } else {
      alert('Invalid username or password.');
    }
>>>>>>> origin/master
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = () => {
    // Navigate to the sign-up prompt screen
    navigation.navigate('SignUpPrompt');
  };
<<<<<<< HEAD

=======
>>>>>>> origin/master
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
<<<<<<< HEAD
        {/* Other screen components */}
      </Stack.Navigator>
      <DatabaseConnection /> {/* Include DatabaseConnection component */}
=======
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SignUpPrompt" component={SignUpPrompt} />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
>>>>>>> origin/master
    </NavigationContainer>
  );
}
