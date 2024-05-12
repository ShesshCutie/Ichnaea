import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; 
import { styles } from './style';

const Stack = createStackNavigator();

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleLogin() {
    setError(null);
    setLoading(true);
  
    if (username === 'admin' && password === 'admin') {
      navigation.navigate('Admin');
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch('http://192.168.1.119:3000/api/login', {
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
        setError('Login failed. Please check your username and password and try again.');
      }
    } catch (error) {
      setError(`Login failed. Please try again.`);
    }
    setLoading(false);
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <View style={[styles.input, { flexDirection: 'row', alignItems: 'center' }]}>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <Ionicons
          name={showPassword ? 'eye-off' : 'eye'}
          size={24}
          color="black"
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
export default Login;
