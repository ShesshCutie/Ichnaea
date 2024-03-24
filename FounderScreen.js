import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const FounderScreen = () => {
  const [name, setName] = useState('');
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = () => {
    // Implement logic to submit form data (name, itemName, description, photo)
    console.log('Form submitted:', { name, itemName, description, photo });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Description"
        multiline
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.uploadButton}>
        <AntDesign name="upload" size={24} color="black" />
        <Text style={styles.uploadButtonText}>Upload Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Post Found Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  uploadButtonText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default FounderScreen;
