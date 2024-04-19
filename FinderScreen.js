import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

function FinderScreen({ navigation, route }) {
    const [description, setDescription] = useState('');
    const [lost_item, setFindItem] = useState('');
    const [location, setLocation] = useState('');

    const handleFinderUpload = async () => {
        try {
            const response = await fetch('http://localhost:3000/finder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: route.params.user.firstname,
                    lastname: route.params.user.lastname,
                    email: route.params.user.email,
                    description,
                    lost_item,
                    location,
                    // id: route.params.users.id, 
                }),
                mode: 'cors',
            });

            if (!response.ok) {
                throw new Error(`Received non-ok status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log(JSON.stringify(responseData));
            // Navigate the user to the next page and pass some identifier
            navigation.navigate('Home', { user: responseData.user });
        } catch (error) {
            console.error('Upload error:', error);
            alert('Upload failed. Please try again. (Error: ' + error.message + ')');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Upload Find Item</Text>
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={text => setDescription(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Find Item"
                value={lost_item}
                onChangeText={text => setFindItem(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Location"
                value={location}
                onChangeText={text => setLocation(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleFinderUpload}>
                <Text style={styles.buttonText}>Upload</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FinderScreen;
