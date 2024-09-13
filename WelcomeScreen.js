// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, ScrollView, Image } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';
// import ImagePlaceholder from 'react-native-image-placeholder';
// import { MaterialIcons } from '@expo/vector-icons';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { FontAwesome } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';

// const WelcomeScreen = () => {
//   const [data, setData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
//   const [filterType, setFilterType] = useState('');
//   const [showFilterOptions, setShowFilterOptions] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(false);
  

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://192.168.11.188:3000/api/home');
//       setData(response.data);
//       setFilteredData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleFilter = (type) => {
//     setFilterType(type);
//     if (type) {
//       const filtered = data.filter((item) =>
//         item.seek_item && item.seek_item.toLowerCase().includes(type.toLowerCase())
//       );
//       setFilteredData(filtered);
//     } else {
//       setFilteredData(data);
//     }
//     setShowFilterOptions(false);
//   };

//   const handleDateChange = (event, selectedDate) => {
//     if (selectedDate) {
//       setSelectedDate(selectedDate);
//       handleDateFilter(selectedDate);
//     }
//     setShowDatePicker(Platform.OS === 'ios');
//   };

//   const openDatePicker = () => {
//     setShowDatePicker(true);
//   };

//   const handleDateFilter = (date) => {
//     const filtered = data.filter((item) => {
//       const uploadedDate = new Date(item.date);
//       const selected = new Date(date);
//       return uploadedDate.toDateString() === selected.toDateString();
//     });
//     setFilteredData(filtered);
//   };  

//   const navigation = useNavigation();

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
//             <AntDesign name="setting" size={20} color="black" />
//             <Text style={styles.sidebarText}>Settings</Text>
//           </TouchableOpacity>
//         <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('front')}>
//           <AntDesign name="logout" size={20} color="black" />
//           <Text style={styles.sidebarText}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.searchBarContainer}>
//         <TextInput
//           style={styles.searchBar}
//           placeholder="Search Item..."
//           onChangeText={(text) => {
//             setSearchQuery(text);
//             if (text && data) {
//               const filtered = data.filter((item) =>
//                 item.seek_item && item.seek_item.toLowerCase().includes(text.toLowerCase())
//               );
//               setFilteredData(filtered);
//             } else {
//               setFilteredData(data);
//             }
//           }}        
//         />
//         <TouchableOpacity 
//           style={styles.filterIcon}
//           onPress={() => setShowFilterOptions(!showFilterOptions)}>
//           <MaterialIcons name="sort" size={24} color="#00072D" />
//         </TouchableOpacity>
//         {showFilterOptions && (
//           <View style={styles.filterOptions}>
//             <TouchableOpacity 
//               style={styles.filterOption}
//               onPress={() => handleFilter('')}>
//               <Text style={styles.filterText}>
//                 <MaterialIcons name="all-inclusive" size={20} color="#00072D" />
//                 {' '}All
//               </Text>
//             </TouchableOpacity>
//             <Text style={styles.modalHeading}>Sort by Item:</Text>
//             <View style={styles.horizontalFilterOptions}>
//               <TouchableOpacity 
//                 style={styles.filterOption}
//                 onPress={() => handleFilter('bag')}>
//                 <Text style={styles.filterText}>
//                   <MaterialIcons name="shopping-bag" size={20} color="#00072D" />
//                   {' '}Bag
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity 
//                 style={styles.filterOption}
//                 onPress={() => handleFilter('wallet')}>
//                 <Text style={styles.filterText}>
//                   <MaterialIcons name="account-balance-wallet" size={20} color="#00072D" />
//                   {' '}Wallet
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity 
//                 style={styles.filterOption}
//                 onPress={() => handleFilter('cellphone')}>
//                 <Text style={styles.filterText}>
//                   <MaterialIcons name="phone" size={20} color="#00072D" />
//                   {' '}Cellphone
//                 </Text>
//               </TouchableOpacity>
//             </View>
//             <Text style={styles.modalHeading}>Sort by Date:</Text>
//             <View style={styles.horizontalFilterOptions}>
//               <TouchableOpacity 
//                 style={styles.filterOption}
//                 onPress={openDatePicker}>
//                 <Text style={styles.filterText}>
//                   <MaterialIcons name="event" size={20} color="#00072D" />
//                   {' '}Select Date
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>        
//         )}
//       </View>

//       <View style={styles.content}>
//         <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
//           <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
//         </TouchableOpacity>

//         <View style={styles.cardsContainer}>
//           {filteredData.map((item, index) => (
//             <TouchableOpacity key={index} style={styles.cardContainer} onPress={() => {}}>
//               <Text style={styles.lostLabel}>LOST</Text>
//               <Image
//                 source={{ uri: item.image }}
//                 style={styles.cardImage}
//                 onError={() => console.log('Error loading image')}
//               />
//               <Text style={styles.cardTitle}>{item.seek_item}</Text>
//               <View style={styles.cardDetails}>
//                 <Text style={styles.cardText}>{`Name: ${item.firstname} ${item.lastname}`}</Text>
//                 <Text style={styles.cardText}>{`Location: ${item.location}`}</Text>
//                 <Text style={styles.cardText}>{`Email: ${item.email}`}</Text>
//                 <Text style={styles.cardText}>{`Description: ${item.description}`}</Text>
//               </View>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//       {showDatePicker && (
//         <DateTimePicker
//           value={selectedDate || new Date()}
//           mode="date"
//           display="default"
//           onChange={handleDateChange}
//         />
//       )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
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
//   sidebarToggle: {
//     position: 'absolute',
//     top: -50,
//     left: 20,
//     zIndex: 3,
//   },
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#ECECEC',
//     paddingTop: 10, 
//     paddingBottom: 50, 
//   },
//   searchBarContainer: {
//     paddingHorizontal: 28,
//     paddingBottom: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginLeft: 36,
//   },
//   searchBar: {
//     flex: 1,
//     height: 40,
//     borderColor: '#00072D',
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 10,
//   },
//   filterIcon: {
//     marginLeft: 10,
//     marginBottom: 10,
//   },
//   horizontalFilterOptions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },  
//   filterOptions: {
//     position: 'absolute',
//     top: 60,
//     right: 20,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     elevation: 3,
//     zIndex: 1,
//     borderWidth: 1,
//     marginLeft: 5,
//     marginRight: 5,
//   },
//   modalHeading:{
//     marginLeft: 5,
//   },
//   filterOption: {
//     padding: 10,
//     borderBottomWidth: 2,
//     borderBottomColor: '#00072D',
//   },
//   filterText: {
//     color: '#00072D',
//   },
//   content: {
//     flex: 1,
//     padding: 20,
//   },
//   cardsContainer: {
//     marginBottom: 20,
//   },
//   cardsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',  
//     justifyContent: 'space-between',  
//     paddingHorizontal: 10,  
//   },
//   cardContainer: {
//     backgroundColor: '#f9f9f9',
//     borderRadius: 10,  
//     padding: 10,
//     marginBottom: 20,
//     elevation: 5,  
//     shadowColor: '#000', 
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3,
//     width: '48%',  
//     alignItems: 'center',  
//   },
//   cardImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 10,  
//     marginBottom: 15,  
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     textAlign: 'center', 
//   },
//   cardDetails: {
//     alignItems: 'center', 
//   },
//   cardText: {
//     marginBottom: 5,
//     fontSize: 14,
//     textAlign: 'center',  
//   },
//   lostLabel: {
//     position: 'absolute',
//     top: 4,
//     left: 103,  
//     backgroundColor: '#FAA500', 
//     color: 'white', 
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     fontWeight: 'bold',
//     fontSize: 12,  
//     zIndex: 1,  
//   },
// });

// export default WelcomeScreen;




// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Platform } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const WelcomeScreen = () => {
//   const [finderData, setFinderData] = useState([]);
//   const [founderData, setFounderData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
//   const [filterType, setFilterType] = useState('');
//   const [showFilterOptions, setShowFilterOptions] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const [finderResponse, founderResponse] = await Promise.all([
//         axios.get('http://192.168.11.188:3000/api/home'),
//         axios.get('http://192.168.11.188:3000/api/datas')
//       ]);
//       setFinderData(finderResponse.data);
//       setFounderData(founderResponse.data);
//       setFilteredData([...finderResponse.data, ...founderResponse.data]);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleFilter = (type) => {
//     setFilterType(type);
//     if (type) {
//       const filtered = filteredData.filter((item) =>
//         (item.seek_item && item.seek_item.toLowerCase().includes(type.toLowerCase())) ||
//         (item.found_item && item.found_item.toLowerCase().includes(type.toLowerCase()))
//       );
//       setFilteredData(filtered);
//     } else {
//       setFilteredData([...finderData, ...founderData]);
//     }
//     setShowFilterOptions(false);
//   };

//   const handleDateChange = (event, selectedDate) => {
//     if (selectedDate) {
//       setSelectedDate(selectedDate);
//       handleDateFilter(selectedDate);
//     }
//     setShowDatePicker(Platform.OS === 'ios');
//   };

//   const openDatePicker = () => {
//     setShowDatePicker(true);
//   };

//   const handleDateFilter = (date) => {
//     const filtered = filteredData.filter((item) => {
//       const uploadedDate = new Date(item.date);
//       const selected = new Date(date);
//       return uploadedDate.toDateString() === selected.toDateString();
//     });
//     setFilteredData(filtered);
//   };

//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//     <View style={[styles.sidebar, { left: showSidebar ? 0 : -200 }]}>
//       {/* Sidebar Content */}
//       <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Home')}>
//         <AntDesign name="home" size={20} color="black" />
//         <Text style={styles.sidebarText}>Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Profile')}>
//         <AntDesign name="user" size={20} color="black" />
//         <Text style={styles.sidebarText}>Profile</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Post')}>
//         <AntDesign name="plus" size={20} color="black" />
//         <Text style={styles.sidebarText}>Post Item</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Settingscreen')}>
//         <AntDesign name="setting" size={20} color="black" />
//         <Text style={styles.sidebarText}>Settings</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('front')}>
//         <AntDesign name="logout" size={20} color="black" />
//         <Text style={styles.sidebarText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//     <View style={styles.searchBarContainer}>
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search Item..."
//         onChangeText={(text) => {
//           setSearchQuery(text);
//           if (text && filteredData) {
//             const filtered = filteredData.filter((item) =>
//               (item.seek_item && item.seek_item.toLowerCase().includes(text.toLowerCase())) ||
//               (item.found_item && item.found_item.toLowerCase().includes(text.toLowerCase()))
//             );
//             setFilteredData(filtered);
//           } else {
//             setFilteredData([...finderData, ...founderData]);
//           }
//         }}
//       />
//       <TouchableOpacity 
//         style={styles.filterIcon}
//         onPress={() => setShowFilterOptions(!showFilterOptions)}>
//         <MaterialIcons name="sort" size={24} color="#00072D" />
//       </TouchableOpacity>
//       {showFilterOptions && (
//         <View style={styles.filterOptions}>
//           <TouchableOpacity 
//             style={styles.filterOption}
//             onPress={() => handleFilter('')}>
//             <Text style={styles.filterText}>
//               <MaterialIcons name="all-inclusive" size={20} color="#00072D" />
//               {' '}All
//             </Text>
//           </TouchableOpacity>
//           <Text style={styles.modalHeading}>Sort by Item:</Text>
//           <View style={styles.horizontalFilterOptions}>
//             <TouchableOpacity 
//               style={styles.filterOption}
//               onPress={() => handleFilter('bag')}>
//               <Text style={styles.filterText}>
//                 <MaterialIcons name="shopping-bag" size={20} color="#00072D" />
//                 {' '}Bag
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity 
//               style={styles.filterOption}
//               onPress={() => handleFilter('wallet')}>
//               <Text style={styles.filterText}>
//                 <MaterialIcons name="account-balance-wallet" size={20} color="#00072D" />
//                 {' '}Wallet
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity 
//               style={styles.filterOption}
//               onPress={() => handleFilter('cellphone')}>
//               <Text style={styles.filterText}>
//                 <MaterialIcons name="phone" size={20} color="#00072D" />
//                 {' '}Cellphone
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.modalHeading}>Sort by Date:</Text>
//           <View style={styles.horizontalFilterOptions}>
//             <TouchableOpacity 
//               style={styles.filterOption}
//               onPress={openDatePicker}>
//               <Text style={styles.filterText}>
//                 <MaterialIcons name="event" size={20} color="#00072D" />
//                 {' '}Select Date
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>        
//       )}
//       <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
//         <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
//       </TouchableOpacity>
//     </View>

//     <ScrollView contentContainerStyle={styles.container1}>
//       <View style={styles.content}>
//         {/* <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
//           <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
//         </TouchableOpacity> */}

//         <View style={styles.cardsContainer}>
//           {filteredData.map((item, index) => (
//             <TouchableOpacity key={index} style={styles.cardContainer} onPress={() => {}}>
//               <Text style={styles.lostLabel}>{item.seek_item ? 'LOST' : 'FOUND'}</Text>
//               <Image
//                 source={{ uri: item.image }}
//                 style={styles.cardImage}
//                 onError={() => console.log('Error loading image')}
//               />
//               <Text style={styles.cardTitle}>{item.seek_item ? item.seek_item : item.found_item}</Text>
//               <View style={styles.cardDetails}>
//                 {item.seek_item && (
//                   <>
//                     <Text style={styles.cardText}>Name: {item.firstname} {item.lastname}</Text>
//                     <Text style={styles.cardText}>Location: {item.location}</Text>
//                     <Text style={styles.cardText}>Email: {item.email}</Text>
//                   </>
//                 )}
//                 {item.found_item && (
//                   <>
//                     <Text style={styles.cardText}>Name: {item.firstname} {item.lastname}</Text>
//                     <Text style={styles.cardText}>Location: {item.location}</Text>
//                     <Text style={styles.cardText}>Email: {item.email}</Text>
//                   </>
//                 )}
//               </View>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//       {showDatePicker && (
//         <DateTimePicker
//           value={selectedDate || new Date()}
//           mode="date"
//           display="default"
//           onChange={handleDateChange}
//         />
//       )}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 0, 
//     backgroundColor: '#F0F4F7',
//   },
//   sidebar: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: 200,
//     height: '100%',
//     backgroundColor: '#FFFFFF',
//     borderRightWidth: 1,
//     borderRightColor: '#DDDDDD',
//     paddingTop: 50,
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//     zIndex: 10,
//     elevation: 5,
//     transition: 'left 0.3s ease',
//   },
//   sidebarItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//   },
//   sidebarText: {
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   searchBarContainer: {
//     padding: 10,
//     backgroundColor: '#FFFFFF',
//     borderBottomWidth: 1,
//     borderBottomColor: '#DDDDDD',
//   },
//   searchBar: {
//     borderWidth: 1,
//     borderColor: '#DDDDDD',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     height: 40,
//     width: 290,
//     left: 55,
//   },
//   filterIcon: {
//     position: 'absolute',
//     right: 10,
//     top: 16,
//   },
//   filterOptions: {
//     marginTop: 10,
//     borderWidth: 1,
//     borderColor: '#DDDDDD',
//     borderRadius: 5,
//     backgroundColor: '#FFFFFF',
//     padding: 10,
//   },
//   filterOption: {
//     paddingVertical: 10,
//   },
//   filterText: {
//     fontSize: 16,
//   },
//   horizontalFilterOptions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   modalHeading: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   content: {
//     flex: 1,
//     padding: 10,
//   },
//   sidebarToggle: {
//     marginBottom: 10,
//     bottom: 31,
//   },
//   cardsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   cardContainer: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 5,
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 2,
//     marginBottom: 10,
//     width: '48%',
//   },
//   cardImage: {
//     width: '100%',
//     height: 150,
//     borderTopLeftRadius: 5,
//     borderTopRightRadius: 5,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     padding: 10,
//   },
//   cardDetails: {
//     padding: 10,
//   },
//   cardText: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   lostLabel: {
//     backgroundColor: '#FFDDDD',
//     color: '#FF0000',
//     padding: 5,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
// });

// export default WelcomeScreen;



import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Platform } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const WelcomeScreen = () => {
  const [finderData, setFinderData] = useState([]);
  const [founderData, setFounderData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [finderResponse, founderResponse] = await Promise.all([
        axios.get('http://192.168.11.188:3000/api/home'),
        axios.get('http://192.168.11.188:3000/api/datas')
      ]);
      setFinderData(finderResponse.data);
      setFounderData(founderResponse.data);
      setFilteredData([...finderResponse.data, ...founderResponse.data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilter = (type) => {
    setFilterType(type);
    if (type) {
      const filtered = [...finderData, ...founderData].filter((item) =>
        (item.seek_item && item.seek_item.toLowerCase().includes(type.toLowerCase())) ||
        (item.found_item && item.found_item.toLowerCase().includes(type.toLowerCase()))
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([...finderData, ...founderData]);
    }
    setShowFilterOptions(false);
  };

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setSelectedDate(selectedDate);
      handleDateFilter(selectedDate);
    }
    setShowDatePicker(Platform.OS === 'ios');
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const handleDateFilter = (date) => {
    const filtered = filteredData.filter((item) => {
      const uploadedDate = new Date(item.date);
      const selected = new Date(date);
      return uploadedDate.toDateString() === selected.toDateString();
    });
    setFilteredData(filtered);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('front')}>
          <AntDesign name="logout" size={20} color="black" />
          <Text style={styles.sidebarText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Item..."
          onChangeText={(text) => {
            setSearchQuery(text);
            if (text && filteredData) {
              const filtered = filteredData.filter((item) =>
                (item.seek_item && item.seek_item.toLowerCase().includes(text.toLowerCase())) ||
                (item.found_item && item.found_item.toLowerCase().includes(text.toLowerCase()))
              );
              setFilteredData(filtered);
            } else {
              setFilteredData([...finderData, ...founderData]);
            }
          }}
        />
        <TouchableOpacity style={styles.filterIcon} onPress={() => setShowFilterOptions(!showFilterOptions)}>
          <MaterialIcons name="sort" size={24} color="#00072D" />
        </TouchableOpacity>
        {showFilterOptions && (
          <View style={styles.filterOptions}>
            <TouchableOpacity style={styles.filterOption} onPress={() => handleFilter('')}>
              <Text style={styles.filterText}>
                <MaterialIcons name="all-inclusive" size={20} color="#00072D" />
                {' '}All
              </Text>
            </TouchableOpacity>
            <Text style={styles.modalHeading}>Sort by Item:</Text>
            <View style={styles.horizontalFilterOptions}>
              <TouchableOpacity style={styles.filterOption} onPress={() => handleFilter('bag')}>
                <Text style={styles.filterText}>
                  <MaterialIcons name="shopping-bag" size={20} color="#00072D" />
                  {' '}Bag
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterOption} onPress={() => handleFilter('wallet')}>
                <Text style={styles.filterText}>
                  <MaterialIcons name="account-balance-wallet" size={20} color="#00072D" />
                  {' '}Wallet
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterOption} onPress={() => handleFilter('cellphone')}>
                <Text style={styles.filterText}>
                  <MaterialIcons name="phone" size={20} color="#00072D" />
                  {' '}Cellphone
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.modalHeading}>Sort by Date:</Text>
            <View style={styles.horizontalFilterOptions}>
              <TouchableOpacity style={styles.filterOption} onPress={openDatePicker}>
                <Text style={styles.filterText}>
                  <MaterialIcons name="event" size={20} color="#00072D" />
                  {' '}Select Date
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
          <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container1}>
        <View style={styles.content}>
          <View style={styles.cardsContainer}>
            {filteredData.map((item, index) => (
              <TouchableOpacity key={index} style={styles.cardContainer} onPress={() => {}}>
                <Text style={styles.lostLabel}>{item.seek_item ? 'LOST' : 'FIND'}</Text>
                <Image
                  source={{ uri: `http://192.168.11.188:3000${item.image}` }}
                  style={styles.cardImage}
                  onError={() => console.log('Error loading image')}
                />
                <Text style={styles.cardTitle}>{item.seek_item ? item.seek_item : item.found_item}</Text>
                <View style={styles.cardDetails}>
                  <Text style={styles.cardText}>Name: {item.firstname || ''} {item.lastname || ''}</Text>
                  <Text style={styles.cardText}>Location: {item.location || ''}</Text>
                  <Text style={styles.cardText}>Email: {item.email || ''}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate || new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    backgroundColor: '#F0F4F7',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingLeft: 10,
    zIndex: 2,
    transition: 'left 0.3s',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: -10,
    marginLeft: 10,
  },
  sidebarText: {
    fontSize: 14,
    marginLeft: 8,
    color: '#000',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    zIndex: 1,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingLeft: 10,
    backgroundColor: '#FFF',
  },
  filterIcon: {
    marginLeft: 10,
  },
  filterOptions: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    elevation: 5,
    position: 'absolute',
    top: 50,
    right: 10,
    zIndex: 10,
  },
  filterOption: {
    marginBottom: 10,
  },
  filterText: {
    fontSize: 16,
    color: '#00072D',
  },
  modalHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  horizontalFilterOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sidebarToggle: {
    marginLeft: 10,
  },
  container1: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  content: {
    marginBottom: 40,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    marginRight: 10,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  lostLabel: {
    position: 'absolute',
    top: 4,
    left: 108,  
    backgroundColor: '#FAA500', 
    color: 'white', 
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    fontWeight: 'bold',
    fontSize: 11,  
    zIndex: 1,  
  },
  cardImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDetails: {
    marginTop: 5,
  },
  cardText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 2,
  },
});

export default WelcomeScreen;
