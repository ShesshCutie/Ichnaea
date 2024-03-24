import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

function SignUpPrompt({ navigation }) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
      fetch('http://localhost:3000/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              firstname: firstname,
              lastname: lastname,
              email: email,
              password: password,
          }),
          mode: 'no-cors', // Set no-cors mode
      })
      .then(response => {
          // Handle response
      })
      .catch(error => {
          console.error('Sign-up error:', error);
          alert('Sign-up failed. Please try again.');
      });
  };
  
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Sign Up</Text>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstname}
                onChangeText={text => setFirstname(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastname}
                onChangeText={text => setLastname(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignUpPrompt;