// Archives.js

import React from 'react';
import { View, Text } from 'react-native';
import archiveData from './archiveData'; // Import the archiveData array

const Archives = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Archive Content</Text>
      {archiveData.map(item => (
        <View key={item.id} style={{ marginBottom: 20 }}>
          <Text>Description: {item.description}</Text>
          <Text>Location: {item.location}</Text>
          <Text>Date Lost: {item.dateLost}</Text>
          <Text>Date Created: {item.dateCreated}</Text>
        </View>
      ))}
    </View>
  );
};

export default Archives;
