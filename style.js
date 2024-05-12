import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '60%', // Reduced width
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10, // Reduced padding
  },
  passwordContainer: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center horizontally
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10, // Reduced padding
  },
  toggleButton: {
    position: 'absolute',
    right: 10,
  },
  button: {
    backgroundColor: '#00072D',
    padding: 10,
    borderRadius: 5,
    width: '60%', // Reduced width
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
  },
  signupButton: { // Style for the sign-up button
    backgroundColor: '#00072D', // Green color
    padding: 10,
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
    marginTop: 10,
  },
});
