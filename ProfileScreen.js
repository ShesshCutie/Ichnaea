// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import axios from 'axios'; 

// function ProfileScreen({ route, navigation }) {
//   const { user } = route.params || {};
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [showFilterOptions, setShowFilterOptions] = useState(false);
//   const [data, setData] = useState([]); 

//   useEffect(() => {
//     fetchData(user.id); 
//   }, [user]);

//   const fetchData = async (id) => {
//     try {
//       const response = await axios.get(`http://192.168.205.11:3000/api/data/${id}`);
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
  
//   useEffect(() => {
//     if (!user) {
//       navigation.navigate('Profile', { user: responseData.user }); 
//     }
//   }, [user, navigation]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.navigation}>
//         <View style={[styles.sidebar, { left: showSidebar ? 0 : -200 }]}>
//           <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Home')}>
//             <AntDesign name="home" size={20} color="black" />
//             <Text style={styles.sidebarText}>Home</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Profile', { user: userData })}>
//             <AntDesign name="user" size={20} color="black" />
//             <Text style={styles.sidebarText}>Profile</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Post')}>
//             <AntDesign name="plus" size={20} color="black" />
//             <Text style={styles.sidebarText}>Post Item</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.sidebarItem} >
//             <AntDesign name="setting" size={20} color="black" />
//             <Text style={styles.sidebarText}>Settings</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Welcome')}>
//             <AntDesign name="logout" size={20} color="black" />
//             <Text style={styles.sidebarText}>Logout</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.content}>
//           <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
//             <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
//           </TouchableOpacity>

//           <View style={styles.cardContainer}>
//             <View style={styles.card}>
//               <View style={styles.info}>
//                 <Text style={styles.name}>{user.firstname} {user.lastname}</Text>
//                 <Text style={styles.email}>{user.email}</Text>
//                 <Text style={styles.Username}>@{user.Username}</Text>
//               </View>
//             </View>
//           </View>

               
//         {/* Display fetched data */}
//         <View style={styles.cardsContainer1}>
//           {data.map((item, index) => (
//             <TouchableOpacity key={index} style={styles.cardContainer1} onPress={() => {/* Handle card press */}}>
//               <Text style={styles.cardTitle1}>{item.seek_item}</Text>
//               <View style={styles.cardDetails1}>
//                 <Text style={styles.cardText1}>{`Name: ${item.firstname} ${item.lastname}`}</Text>
//                 <Text style={styles.cardText1}>{`Location: ${item.location}`}</Text>
//                 <Text style={styles.cardText1}>{`Email: ${item.email}`}</Text>
//                 <Text style={styles.cardText1}>{`Description: ${item.description}`}</Text>
//                 {/* Additional details */}
//               </View>
//             </TouchableOpacity>
//           ))}
//         </View>


//           {/* Filter Options Modal */}
//           <Modal
//             animationType="slide"
//             transparent={true}
//             visible={showFilterOptions}
//             onRequestClose={() => setShowFilterOptions(false)}
//           >
//           </Modal>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   navigation: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   sidebar: {
//     width: 200,
//     backgroundColor: '#f0f0f0',
//     paddingTop: 40,
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     zIndex: 2,
//   },
//   sidebarItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   sidebarText: {
//     marginLeft: 10,
//   },
//   content: {
//     flex: 1,
//     padding: 20,
//   },
//   sidebarToggle: {
//     position: 'absolute',
//     top: 20,
//     left: 20,
//     zIndex: 3,
//   },
//   cardContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//     marginTop:33,
//   },
//   card: {
//     // flexDirection: 'row',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#00072D',
//     borderRadius: 10,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   avatar: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   info: {
//     marginLeft: 20,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   email: {
//     fontSize: 16,
//     color: '#fff',
//   },
//   Username: {
//     fontSize: 16,
//     color: '#fff',
//   },
//   cardsContainer1: {
//     marginBottom: 20,
//   },
//   cardContainer1: {
//     backgroundColor: '#f9f9f9',
//     borderRadius: 2,
//     padding: 5,
//     marginBottom: 5,
//     elevation: 3,
//     width: 200,
//     marginLeft: 65,
    
//   },
//   cardTitle1: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   cardDetails1: {},
//   cardText: {
//     marginBottom: 5,
//   },
// });

// export default ProfileScreen;












import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios'; 
import { FontAwesome } from '@expo/vector-icons'; 


function ProfileScreen({ route, navigation }) {
  const { user } = route.params || {};
  const [showSidebar, setShowSidebar] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {

    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://192.168.125.11:3000/api/users/${user.id}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const handlefinder = () => {

    navigation.navigate('Finder');
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <View style={[styles.sidebar, { left: showSidebar ? 0 : -200 }]}>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Home')}>
            <AntDesign name="home" size={20} color="black" />
            <Text style={styles.sidebarText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Profile', { user: userData })}>
            <AntDesign name="user" size={20} color="black" />
            <Text style={styles.sidebarText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Post')}>
            <AntDesign name="plus" size={20} color="black" />
            <Text style={styles.sidebarText}>Post Item</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Settingscreen')}>
            <AntDesign name="setting" size={20} color="black" />
            <Text style={styles.sidebarText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Welcome')}>
            <AntDesign name="logout" size={20} color="black" />
            <Text style={styles.sidebarText}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
            <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
          </TouchableOpacity>

        <View style={styles.content}>
          {/* Sidebar toggle button */}
          {/* Display user's profile card */}
          {userData && (
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Text style={styles.name}>{userData.firstname} {userData.lastname}</Text>
                <Text style={styles.email}>{userData.email}</Text>
              </View>
            </View>
          )}
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: -100, }}>
          <TouchableOpacity style={styles.buton} onPress={handlefinder}>
              <FontAwesome name="bell" size={28} color="#00072D" style={{ marginRight: 10 }} /> 
              <View style={{ flex: 1 }}>
                <Text style={styles.post1}>Feedback</Text>
                <View style={{ }} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buton} onPress={handlefinder}>
              <FontAwesome name="cloud-upload" size={28} color="#00072D" style={{ marginRight: 10 }} /> 
              <View style={{ flex: 1 }}>
                <Text style={styles.post1}>Privacy & Security</Text>
                <View style={{ }} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Other content and modals */}
        </View>

               
        {/* Display fetched data */}
        {/* <View style={styles.cardsContainer1}>
          {userData.map((item, index) => (
            <TouchableOpacity key={index} style={styles.cardContainer1} onPress={() => {}}>
              <Text style={styles.cardTitle1}>{item.seek_item}</Text>
              <View style={styles.cardDetails1}>
                <Text style={styles.cardText1}>{`Name: ${item.firstname} ${item.lastname}`}</Text>
                <Text style={styles.cardText1}>{`Location: ${item.location}`}</Text>
                <Text style={styles.cardText1}>{`Email: ${item.email}`}</Text>
                <Text style={styles.cardText1}>{`Description: ${item.description}`}</Text>
                
              </View>
            </TouchableOpacity>
          ))}
        </View> */}


          {/* Filter Options Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={showFilterOptions}
            onRequestClose={() => setShowFilterOptions(false)}
          >
          </Modal>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navigation: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 200,
    backgroundColor: '#f0f0f0',
    paddingTop: 40,
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 2,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  sidebarText: {
    marginLeft: 10,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sidebarToggle: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 3,
  },
  cardContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop:33,
  },
  card: {
    // flexDirection: 'row',
    height: 250,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#00072D',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  info: {
    marginLeft: 20,
  },
  name: {
    marginTop: 150,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  email: {
    fontSize: 16,
    color: '#fff',
  },
  Username: {
    fontSize: 16,
    color: '#fff',
  },
  cardsContainer1: {
    marginBottom: 20,
  },
  cardContainer1: {
    backgroundColor: '#f9f9f9',
    borderRadius: 2,
    padding: 5,
    marginBottom: 5,
    elevation: 3,
    width: 200,
    marginLeft: 65,
    
  },
  cardTitle1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDetails1: {},
  cardText: {
    marginBottom: 5,
  },
  buton: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10, 
    backgroundColor: '#F7FCFE', 
    borderRadius: 8, 
    marginBottom: 15, 
    width: 330,
    borderBottomWidth: 2,
    marginLeft: -4,
    borderBottomColor: 'black',
  }
});

export default ProfileScreen;


