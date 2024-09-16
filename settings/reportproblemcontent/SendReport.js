import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Linking } from 'react-native';

function SendReport({ route, navigation }) {
  const { problem } = route.params;
  const [description, setDescription] = useState('');

  const handleSendReport = () => {
    // Handle the report submission logic here
    alert(`Report for ${problem} with description "${description}" has been sent!`);
    navigation.goBack();
  };

  const handleUpload = () => {
    // Handle the file upload logic here
    alert("Upload functionality to be added.");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Describe the issue..."
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
        <Text style={styles.uploadButtonText}>Upload From Phone</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handleSendReport}>
        <Text style={styles.submitButtonText}>Submit Report</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://example.com/privacy-policy')}>
        <Text style={styles.privacyPolicy}>Learn more about our Privacy Policy.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlignVertical: 'top',
    marginBottom: 20,
    fontSize: 16,
  },
  uploadButton: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#000',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#00072D',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  privacyPolicy: {
    marginTop: 20,
    color: '#0000EE',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});

export default SendReport;
