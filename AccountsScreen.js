// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
//   Image,
// } from 'react-native';
// import axios from 'axios';
// import { AntDesign } from '@expo/vector-icons';

// const AccountScreen = () => {
//   const [accounts, setAccounts] = useState([]);

//   useEffect(() => {
//     fetchAccounts();
//   }, []);

//   const fetchAccounts = async () => {
//     try {
//       const response = await axios.get('http://192.168.11.188:3000/api/account');
//       setAccounts(response.data);
//     } catch (error) {
//       console.error('Error fetching accounts:', error);
//     }
//   };

//   const deleteAccount = async (id) => {
//     Alert.alert(
//       'Delete Account',
//       'Are you sure you want to delete this account?',
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'Delete',
//           onPress: async () => {
//             try {
//               await axios.delete(`http://192.168.11.188:3000/api/account/${id}`);
//               setAccounts(accounts.filter((account) => account.id !== id));
//               Alert.alert('Success', 'Account deleted successfully.');
//             } catch (error) {
//               console.error('Error deleting account:', error);
//               Alert.alert('Error', 'Failed to delete the account.');
//             }
//           },
//         },
//       ]
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>User Accounts</Text>
//       <ScrollView>
//         {accounts.map((account) => (
//           <View key={account.id} style={styles.card}>
//             <Text style={styles.cardText}>Username: {account.username}</Text>
//             <Text style={styles.cardText}>Name: {account.firstname} {account.lastname}</Text>
//             <Text style={styles.cardText}>Email: {account.email}</Text>
//             <TouchableOpacity
//               style={styles.deleteButton}
//               onPress={() => deleteAccount(account.id)}
//             >
//               <AntDesign name="delete" size={24} color="white" />
//               <Text style={styles.deleteButtonText}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//     zIndex: 1,
//     marginTop: 75
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: 20,
//     marginBottom: 15,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   cardText: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   deleteButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#ff4d4d',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   deleteButtonText: {
//     color: 'white',
//     marginLeft: 10,
//     fontWeight: 'bold',
//   },
// });

// export default AccountScreen;










import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';

const AccountsScreen = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await axios.get('http://192.168.1.66:3000/api/accounts'); // Replace with your actual API
      setAccounts(response.data); // Assuming the API returns an array of accounts
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accounts</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {accounts.map((account, index) => (
          <TouchableOpacity
            key={index}
            style={styles.accountItem}
            onPress={() => console.log(`Selected: ${account.name}`)} // Add your navigation or actions here
          >
            <Text style={styles.accountName}>{account.name}</Text>
            <Text style={styles.accountDetails}>Email: {account.email}</Text>
            <Text style={styles.accountDetails}>Phone: {account.phone}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  accountItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2, // Adds subtle shadow for Android
    shadowColor: '#000', // Adds subtle shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  accountName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  accountDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default AccountsScreen;