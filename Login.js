import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error(`Received non-ok status: ${response.status}`);
      }

      const responseData = await response.json();

      if (responseData.user) {
        navigation.navigate('Profile', { user: responseData.user });
      } else {
        alert('Login failed. Please check your username and password and try again.');
      }

    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your username and password and try again. (Error: ' + error.message + ')');
    }
  }

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
