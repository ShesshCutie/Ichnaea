// SignUpPrompt.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { signUpPromptStyles } from './signUpPromptStyle'; // Import the signUpPromptStyles

const SignUpPrompt = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    // Handle sign-up logic
    
  };

  return (
    <View style={signUpPromptStyles.container}>
      <Text style={signUpPromptStyles.title}>Sign Up</Text>
      <TextInput
        style={signUpPromptStyles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={signUpPromptStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={signUpPromptStyles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={signUpPromptStyles.button} onPress={handleSignUp}>
        <Text style={signUpPromptStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpPrompt;
