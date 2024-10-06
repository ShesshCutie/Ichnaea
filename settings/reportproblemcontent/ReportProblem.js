import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function ReportProblem({ navigation }) {
    const handleNavigate = (screen) => {
        navigation.navigate(screen);
      };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Technical Problem</Text>
      <Text style={styles.description}>
        Include complete logs and diagnostics in your report?
      </Text>
      <Text style={styles.details}>
        Information about your device, account, and the app related to the issue that you are reporting will be automatically included in this report in order to help us understand and resolve the issue. You can further help us fix the problem by sending complete logs and diagnostics. This includes information such as user activity logs, network logs, crash logs, and memory dumps. We will not use this information for other purposes. Learn more about our Privacy Policy.
      </Text>
      <Text style={styles.details}>
        Reports about abuse or spam should not be submitted here. That includes things such as violence, criminal behavior, offensive content, and issues affecting safety, integrity, and authenticity. Learn how to report abuse or spam.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => handleNavigate('Include Problem')}>
        <Text style={styles.buttonText}>Include</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => handleNavigate('Help and Support')}>
        <Text style={styles.buttonText}>Don't Include</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    zIndex: 1,
    marginTop: 55
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#00072D',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ReportProblem;
