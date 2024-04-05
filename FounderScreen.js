import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';


function FounderScreen({ navigation }) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [found_item, setFoundItem] = useState('');
    const [location, setLocation] = useState('');



    const handleFounderUpload = (e) => {
        fetch('http://localhost:3000/founder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            description,
            found_item,
            location,
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
            navigation.navigate('Profile');
          })
          .catch((error) => {
            console.error('Upload error:', error);
            alert('Upload failed. Please try again. (Error: ' + error.message + ')');
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
                placeholder="Found Item"
                value={found_item}
                onChangeText={text => setFoundItem(text)}
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
                placeholder="Description"
                value={description}
                onChangeText={text => setDescription(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Location"
                value={location}
                onChangeText={text => setLocation(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleFounderUpload}>
                <Text style={styles.buttonText}>Upload</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FounderScreen;