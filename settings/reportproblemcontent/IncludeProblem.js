import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

function IncludeProblem({ navigation }) {
  const problemOptions = [
    'Navigation', 
    'Camera', 
    'Posting Found Item', 
    'Posting Lost Item', 
    'Settings', 
    'Privacy', 
    'Notification', 
    'Posted Item', 
    'Sending Feedback', 
    'Profile', 
    'Search', 
    'Filter', 
    'Account Edit',
    'Other:',
  ];

  const handleProblemSelect = (problem) => {
    navigation.navigate('Send Report', { problem });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {problemOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.listItem}
          onPress={() => handleProblemSelect(option)}
        >
          <Text style={styles.listText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingLeft: 15,
    color: '#000',
  },
  listItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'left',
  },
});

export default IncludeProblem;
