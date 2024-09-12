import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

function FeedbackScreen({ navigation }) {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    // Handle feedback submission (e.g., send to a server or save locally)
    console.log(feedback);
    // Reset the feedback input
    setFeedback('');
    // Provide user feedback (e.g., a toast notification)
    alert('Thank you for your feedback!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Your Feedback</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={4}
          onChangeText={setFeedback}
          value={feedback}
          placeholder="Write your feedback here"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  content: {
    marginTop: 25,
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FeedbackScreen;
