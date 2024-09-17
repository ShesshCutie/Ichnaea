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
    width: '60%', 
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10, 
  },
  passwordContainer: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  toggleButton: {
    position: 'absolute',
    right: 10,
  },
  button: {
    backgroundColor: '#00072D',
    padding: 10,
    borderRadius: 5,
    width: '60%', 
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
  },
  signupButton: { 
    backgroundColor: '#00072D', 
    padding: 10,
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
    marginTop: 10,
  },
});
