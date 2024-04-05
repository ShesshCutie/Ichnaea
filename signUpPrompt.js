import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';


function SignUpPrompt({ navigation }) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Username, setUsername] = useState('');


    const handleSignUp = (e) => {
        // e.preventDefault(); // Remove this line
      
        fetch('http://localhost:3000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            password,
            Username,
          }),
          mode: 'cors',
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Received non-ok status: ${response.status}`);
            }
            return response.text();
          })
          .then((responseText) => {
            if (responseText.startsWith('<!DOCTYPE')) {
              // Handle error message in the response HTML
              const errorStart = responseText.indexOf('<body>');
              const errorEnd = responseText.indexOf('</body>', errorStart);
              const errorMessage = responseText.slice(errorStart + 6, errorEnd);
              const jsonError = JSON.parse(`{"message": "${errorMessage}"}`);
              throw new Error(jsonError.message);
            }
      
            // Parse JSON with additional tweaks to remove invalid control characters
            const cleanResponseText = responseText.replace(/[\u0000-\u001F\u007F-\u009F]/g, '');
            return JSON.parse(cleanResponseText);
          })
          .then((responseData) => {
            // Store the token in the local storage or use it to make authenticated requests
            console.log(JSON.stringify(responseData));
            // Navigate the user to the next page
            navigation.navigate('Login');
          })
          .catch((error) => {
            console.error('Sign-up error:', error);
            alert('Sign-up failed. Please try again. (Error: ' + error.message + ')');
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
                placeholder="Username"
                value={Username}
                onChangeText={text => setUsername(text)}
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