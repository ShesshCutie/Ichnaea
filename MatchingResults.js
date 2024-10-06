import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';

const MatchingResults = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const response = await axios.get('http://192.168.11.188:3000/api/matchingresults');
      setMatches(response.data);
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {matches.length === 0 ? (
          <Text style={styles.noMatches}>No matches found</Text>
        ) : (
          matches.map((match, index) => (
            <View key={index} style={styles.matchCard}>
              <Text style={styles.matchTitle}>Match {index + 1}</Text>
              <View style={styles.comparisonContainer}>
                <View style={styles.detailsContainer}>
                  <Text style={styles.sectionTitle}>Finder</Text>
                  <Text style={styles.matchText}><Text style={styles.bold}>Name:</Text> {match.finder_name}</Text>
                  <Text style={styles.matchText}><Text style={styles.bold}>Item:</Text> {match.finder_item}</Text>
                  <Text style={styles.matchText}><Text style={styles.bold}>Location:</Text> {match.finder_location}</Text>
                  <Text style={styles.matchText}><Text style={styles.bold}>Description:</Text> {match.finder_description}</Text>
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.sectionTitle}>Founder</Text>
                  <Text style={styles.matchText}><Text style={styles.bold}>Name:</Text> {match.founder_name}</Text>
                  <Text style={styles.matchText}><Text style={styles.bold}>Item:</Text> {match.founder_item}</Text>
                  <Text style={styles.matchText}><Text style={styles.bold}>Location:</Text> {match.founder_location}</Text>
                  <Text style={styles.matchText}><Text style={styles.bold}>Description:</Text> {match.founder_description}</Text>
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    zIndex: 1,
    marginTop: 55
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  matchCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  matchTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  comparisonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F8F8F8',
    marginHorizontal: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  matchText: {
    fontSize: 14,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  noMatches: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MatchingResults;
