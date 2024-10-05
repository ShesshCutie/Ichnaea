import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
  Pressable,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const WelcomeScreen = () => {
  const [unmatchedData, setUnmatchedData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [filterType, setFilterType] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.1.66:3000/api/unmatchedresults');
      setUnmatchedData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching unmatched data:', error);
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = unmatchedData.filter((item) =>
      item.item && item.item.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleFilter = (type) => {
    setFilterType(type);
    let filtered = unmatchedData;

    if (type === 'found') {
      filtered = unmatchedData.filter(item => item.item_type === 'finder');
    } else if (type === 'lost') {
      filtered = unmatchedData.filter(item => item.item_type !== 'finder');
    }
    
    setFilteredData(filtered);
    setShowFilterOptions(false);
  };

  const handleDateChange = (event, date) => {
    if (date) {
      setSelectedDate(date);
      handleDateFilter(date);
    }
    setShowDatePicker(Platform.OS === 'ios');
  };

  const handleDateFilter = (date) => {
    const filtered = unmatchedData.filter((item) => {
      const uploadedDate = new Date(item.date);
      return uploadedDate.toDateString() === date.toDateString();
    });
    setFilteredData(filtered);
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const handleOutsidePress = () => {
    if (showSidebar) {
      setShowSidebar(false);
    }
  };

  return (
    <Pressable onPress={handleOutsidePress} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
      </View>
      
      <View style={[styles.sidebar, { left: showSidebar ? 0 : -200 }]}>
        <View style={styles.ICHNAEA}>
          <Text style={styles.Text}>Ichnaea</Text>
          <Image
            source={require("./assets/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.SIDEBARALL}>
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
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Settings')}>
            <AntDesign name="setting" size={20} color="black" />
            <Text style={styles.sidebarText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('front')}>
            <AntDesign name="logout" size={20} color="black" />
            <Text style={styles.sidebarText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
          <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Item..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <TouchableOpacity style={styles.filterIcon} onPress={() => setShowFilterOptions(!showFilterOptions)}>
          <MaterialIcons name="sort" size={24} color="#00072D" />
        </TouchableOpacity>
        {showFilterOptions && (
          <View style={styles.filterOptions}>
            {['All', 'Found', 'Lost', 'Select Date'].map((option, index) => (
              <TouchableOpacity key={index} style={styles.filterOption} onPress={() => option === 'Select Date' ? openDatePicker() : handleFilter(option.toLowerCase())}>
                <Text style={styles.filterText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      
      <ScrollView contentContainerStyle={styles.container1}>
        <View style={styles.content}>
          <View style={styles.reminder}>
            <Text style={styles.reminderText}>Note: The uploaded lost or found item here refers to items that remain unmatched after one month.</Text>
          </View>
          <View style={styles.cardsContainer}>
            {filteredData.map((item, index) => (
              <TouchableOpacity key={index} style={styles.cardContainer}>
                <Text style={styles.lostLabel}>{item.item_type === 'finder' ? 'LOST' : 'FOUND'}</Text>
                <Image
                  source={{ uri: `http://192.168.1.66:3000${item.image}` }}
                  style={styles.cardImage}
                  onError={() => console.log('Error loading image')}
                />
                <Text style={styles.cardTitle}>{item.item}</Text>
                <View style={styles.cardDetails}>
                  <Text style={styles.cardText}>Name: {item.name}</Text>
                  <Text style={styles.cardText}>Location: {item.location}</Text>
                  <Text style={styles.cardText}>Email: {item.email}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </Pressable>
  );
};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F4F7',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#3E4A59',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
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
  },
  filterIcon: {
    marginLeft: 10,
  },
  container1: {
    paddingHorizontal: 15,
    paddingTop: 10,
    zIndex: 0, 
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
  SIDEBARALL: {
    marginTop: 90,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingLeft: 20,
    zIndex: 2,
    transition: 'left 0.3s',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
    marginTop: 35,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: -15,
  },
  sidebarText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#181818',
    fontWeight: '600',
  },
  ICHNAEA: {
    backgroundColor: '#FAA500',
    width: 200,
    height: 90,
    position: 'absolute',
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 20,
    position: 'absolute',
    top: 10,
    marginTop: -6,
    marginLeft: 10,
  },
  filterOptions: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
    top: 50,
    right: 10,
    zIndex: 4, 
  },
  filterOption: {
    padding: 10,
  },
  filterText: {
    fontSize: 16,
  },
  sidebarToggle: {
    position: 'absolute',
    top: -43,
    left: 20,
    // zIndex: 3,
  },
  reminder: {
    alignItems: 'center',
  },
  reminderText: {
    fontSize: 14,
    marginBottom: 10,
  },
  Text: {
    fontSize: 24,
    marginLeft: 90,
    marginTop: 25,
  },
});

export default WelcomeScreen;
