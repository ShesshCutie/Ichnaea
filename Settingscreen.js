
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity,ScrollView, Modal } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

// function Settingscreen({ route, navigation }) {
//   const { user } = route.params || {};
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [showFilterOptions, setShowFilterOptions] = useState(false);
//   const [selectedContent, setSelectedContent] = useState(null);
//   const [userData, setUserData] = useState(null);

//   const openContentModal = (content) => {
//     setSelectedContent(content);
//     setShowFilterOptions(true);
//   };
  

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={[styles.sidebar, { left: showSidebar ? 0 : -200 }]}>
//         <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Home')}>
//           <AntDesign name="home" size={20} color="black" />
//           <Text style={styles.sidebarText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Profile')}>
//           <AntDesign name="user" size={20} color="black" />
//           <Text style={styles.sidebarText}>Profile</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Post')}>
//           <AntDesign name="plus" size={20} color="black" />
//           <Text style={styles.sidebarText}>Post Item</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Settingscreen')}>
//           <AntDesign name="setting" size={20} color="black" />
//           <Text style={styles.sidebarText}>Settings</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Welcome')}>
//           <AntDesign name="logout" size={20} color="black" />
//           <Text style={styles.sidebarText}>Logout</Text>
//         </TouchableOpacity>
        
//       </View>
//       <View style={styles.content}>
//         <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
//           <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
//         </TouchableOpacity>

//         <View style={styles.content1}> 
//           <TouchableOpacity style={styles.settingButton} onPress={() => openContentModal('Notifications')}>
//             <Text style={styles.settingButtonText}>Notifications</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.settingButton} onPress={() => openContentModal('Feedback')}>
//             <Text style={styles.settingButtonText}>Feedback</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.settingButton} onPress={() => openContentModal('Privacy & Security')}>
//             <Text style={styles.settingButtonText}>Privacy & Security</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.settingButton} onPress={() => openContentModal('Help and Support')}>
//             <Text style={styles.settingButtonText}>Help and Support</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.settingButton} onPress={() => openContentModal('About')}>
//             <Text style={styles.settingButtonText}>About</Text>
//           </TouchableOpacity>
//             <Modal
//             animationType="slide"
//             transparent={true}
//             visible={showFilterOptions}
//             onRequestClose={() => setShowFilterOptions(false)}
//             >
//             <View style={styles.centeredView}>
//               <View style={styles.modalView}>
//                 <Text style={styles.modalText}>{selectedContent}</Text>
//                 <TouchableOpacity
//                   style={[styles.modalButton, styles.modalButtonClose]}
//                   onPress={() => setShowFilterOptions(false)}
//                 >
//                   <Text style={styles.textStyle}>Close</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Modal>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     flexDirection: 'row', 
//   },
//   sidebar: {
//     width: 200,
//     backgroundColor: '#f0f0f0',
//     paddingTop: 20,
//     alignItems: 'center',
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//   },
//   content: {
//     flex: 1,
//     marginLeft: 200, 
//     paddingHorizontal: 20,
//   },
//   sidebarItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   sidebarText: {
//     marginLeft: 10,
//   },
//   welcomeText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   searchBarContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     paddingHorizontal: 10,
//   },
//   sidebarToggle: {
//     position: 'absolute',
//     top: 20,
//     left: -180,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalButton: {
//     marginBottom: 10,
//     borderRadius: 5,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     elevation: 2,
//     backgroundColor: '#f0f0f0',
//   },
//   modalButtonClose: {
//     backgroundColor: 'red',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default Settingscreen;











// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

// function Settingscreen({ navigation }) {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [showFilterOptions, setShowFilterOptions] = useState(false);
//   const [selectedContent, setSelectedContent] = useState(null);

//   const openContentModal = (content) => {
//     setSelectedContent(content);
//     setShowFilterOptions(true);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={[styles.sidebar, { left: showSidebar ? 0 : -200 }]}>
//         <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Home')}>
//           <AntDesign name="home" size={20} color="black" />
//           <Text style={styles.sidebarText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Profile')}>
//           <AntDesign name="user" size={20} color="black" />
//           <Text style={styles.sidebarText}>Profile</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Post')}>
//           <AntDesign name="plus" size={20} color="black" />
//           <Text style={styles.sidebarText}>Post Item</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Settingscreen')}>
//           <AntDesign name="setting" size={20} color="black" />
//           <Text style={styles.sidebarText}>Settings</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Welcome')}>
//           <AntDesign name="logout" size={20} color="black" />
//           <Text style={styles.sidebarText}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.content}>
//         <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
//           <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
//         </TouchableOpacity>

//         <View style={styles.content1}>
//           {['Notifications', 'Feedback', 'Privacy & Security', 'Help and Support', 'About'].map((item, index) => (
//             <TouchableOpacity key={index} style={styles.settingButton} onPress={() => openContentModal(item)}>
//               <AntDesign name={iconNameForItem(item)} size={20} color="black" />
//               <Text style={styles.settingButtonText}>{item}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={showFilterOptions}
//           onRequestClose={() => setShowFilterOptions(false)}
//         >
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <Text style={styles.modalText}>{selectedContent}</Text>
//               <TouchableOpacity
//                 style={[styles.modalButton, styles.modalButtonClose]}
//                 onPress={() => setShowFilterOptions(false)}
//               >
//                 <Text style={styles.textStyle}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </View>
//   );
// };

// // Function to determine icon name based on the item
// const iconNameForItem = (item) => {
//   switch (item) {
//     case 'Notifications':
//       return 'notification';
//     case 'Feedback':
//       return 'feedback';
//     case 'Privacy & Security':
//       return 'lock';
//     case 'Help and Support':
//       return 'questioncircleo';
//     case 'About':
//       return 'infocirlceo';
//     default:
//       return 'questioncircleo';
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     flexDirection: 'row',
//   },
//   sidebar: {
//     width: 200,
//     backgroundColor: '#f0f0f0',
//     paddingTop: 20,
//     alignItems: 'center',
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//   },
//   content: {
//     flex: 1,
//     marginLeft: 200,
//     paddingHorizontal: 20,
//   },
//   sidebarItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   sidebarText: {
//     marginLeft: 10,
//   },
//   settingButton: {
//     backgroundColor: '#f0f0f0',
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     marginBottom: 10,
//     borderRadius: 10,
//     elevation: 3,
//     marginLeft: -160,
//     flexDirection: 'row', // Align icon and text horizontally
//   },
//   settingButtonText: {
//     fontSize: 16,
//     marginLeft: 10, // Space between icon and text
//   },
//   sidebarToggle: {
//     position: 'absolute',
//     top: 20,
//     left: -180,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalButton: {
//     marginBottom: 10,
//     borderRadius: 5,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     elevation: 2,
//     backgroundColor: '#f0f0f0',
//   },
//   modalButtonClose: {
//     backgroundColor: 'red',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default Settingscreen;







// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

// function Settingscreen({ navigation }) {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [showFilterOptions, setShowFilterOptions] = useState(false);
//   const [selectedContent, setSelectedContent] = useState(null);

//   const openContentModal = (content) => {
//     setSelectedContent(content);
//     setShowFilterOptions(true);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={[styles.sidebar, { left: showSidebar ? 0 : -200 }]}>
//         <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Home')}>
//           <AntDesign name="home" size={20} color="black" />
//           <Text style={styles.sidebarText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Profile')}>
//           <AntDesign name="user" size={20} color="black" />
//           <Text style={styles.sidebarText}>Profile</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Post')}>
//           <AntDesign name="plus" size={20} color="black" />
//           <Text style={styles.sidebarText}>Post Item</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Settingscreen')}>
//           <AntDesign name="setting" size={20} color="black" />
//           <Text style={styles.sidebarText}>Settings</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Welcome')}>
//           <AntDesign name="logout" size={20} color="black" />
//           <Text style={styles.sidebarText}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.content}>
//         <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
//           <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
//         </TouchableOpacity>

//         <View style={styles.content1}>
//           <TouchableOpacity style={styles.settingButton} onPress={() => openContentModal('Notifications')}>
//             <AntDesign name="notification" size={20} color="black" />
//             <Text style={styles.settingButtonText}>Notifications</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.settingButton} onPress={() => openContentModal('Feedback')}>
//             <AntDesign name="message1" size={20} color="black" />
//             <Text style={styles.settingButtonText}>Feedback</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.settingButton} onPress={() => openContentModal('Privacy & Security')}>
//             <AntDesign name="lock" size={20} color="black" />
//             <Text style={styles.settingButtonText}>Privacy & Security</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.settingButton} onPress={() => openContentModal('Help and Support')}>
//             <AntDesign name="questioncircleo" size={20} color="black" />
//             <Text style={styles.settingButtonText}>Help and Support</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.settingButton} onPress={() => openContentModal('About')}>
//             <AntDesign name="infocirlceo" size={20} color="black" />
//             <Text style={styles.settingButtonText}>About</Text>
//           </TouchableOpacity>
//         </View>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={showFilterOptions}
//           onRequestClose={() => setShowFilterOptions(false)}
//         >
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <Text style={styles.modalText}>{selectedContent}</Text>
//               <TouchableOpacity
//                 style={[styles.modalButton, styles.modalButtonClose]}
//                 onPress={() => setShowFilterOptions(false)}
//               >
//                 <Text style={styles.textStyle}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     flexDirection: 'row',
//   },
//   sidebar: {
//     width: 200,
//     backgroundColor: '#f0f0f0',
//     paddingTop: 20,
//     alignItems: 'center',
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//   },
//   content: {
//     flex: 1,
//     marginLeft: 200,
//     paddingHorizontal: 20,
//   },
//   sidebarItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   sidebarText: {
//     marginLeft: 10,
//   },
//   settingButton: {
//     backgroundColor: '#f0f0f0',
//     flexDirection: 'row',
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     marginBottom: 10,
//     borderRadius: 10,
//     marginLeft: -165,
//     elevation: 100,
//   },
//   settingButtonText: {
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   sidebarToggle: {
//     position: 'absolute',
//     top: 20,
//     left: -180,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
//   },
//   modalView: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalButton: {
//     marginBottom: 10,
//     borderRadius: 5,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     elevation: 2,
//     backgroundColor: '#f0f0f0',
//   },
//   modalButtonClose: {
//     backgroundColor: 'red',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default Settingscreen;






import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

function Settingscreen({ navigation }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const openContentModal = (content) => {
    setSelectedContent(content);
    setShowFilterOptions(true);
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
        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Profile')}>
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
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.buton} onPress={handlefinder}>
              <FontAwesome name="user" size={32} color="#00072D" style={{ marginRight: 10 }} /> 
              <View style={{ flex: 1 }}>
                <Text style={styles.post1}>Account</Text>
                <View style={{ }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buton} onPress={handlefinder}>
              <FontAwesome name="comment" size={32} color="#00072D" style={{ marginRight: 10 }} /> 
              <View style={{ flex: 1 }}>
                <Text style={styles.post1}>Feedback</Text>
                <View style={{ }} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buton} onPress={handlefinder}>
              <FontAwesome name="lock" size={32} color="#00072D" style={{ marginRight: 10 }} /> 
              <View style={{ flex: 1 }}>
                <Text style={styles.post1}>Privacy & Security</Text>
                <View style={{ }} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buton} onPress={handlefinder}>
              <FontAwesome name="question-circle" size={32} color="#00072D" style={{ marginRight: 10 }} /> 
              <View style={{ flex: 1 }}>
                <Text style={styles.post1}>Help and Support</Text>
                <View style={{ }} />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buton} onPress={handlefinder}>
              <FontAwesome name="info-circle" size={32} color="#00072D" style={{ marginRight: 10 }} /> 
              <View style={{ flex: 1 }}>
                <Text style={styles.post1}>About</Text>
                <View style={{ }} />
              </View>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// Function to determine icon name based on the item
const iconNameForItem = (item) => {
  switch (item) {
    case 'Notifications':
      return 'notification';
    case 'Feedback':
      return 'feedback';
    case 'Privacy & Security':
      return 'lock';
    case 'Help and Support':
      return 'questioncircleo';
    case 'About':
      return 'infocirlceo';
    default:
      return 'questioncircleo';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  sidebar: {
    width: 200,
    backgroundColor: '#f0f0f0',
    paddingTop: 40,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 2,
  },
  navigation: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    marginLeft: 200,
    paddingHorizontal: 20,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'left',
    marginBottom: 10,
  },
  sidebarText: {
    marginLeft: 10,
  },
  settingButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
    marginLeft: -150,
    alignItems: 'center',
    flexDirection: 'row',
     // Align icon and text horizontally
  },
  settingButtonText: {
    fontSize: 16,
    marginLeft: 10, // Space between icon and text
  },
  sidebarToggle: {
    position: 'absolute',
    top: 20,
    left: -180,
    zIndex: 3,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    marginBottom: 10,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    backgroundColor: '#f0f0f0',
  },
  modalButtonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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
    marginLeft: -520,
    borderBottomColor: 'black'
  }

});

export default Settingscreen;
