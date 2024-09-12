import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import ImagePlaceholder from 'react-native-image-placeholder';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const WelcomeScreen = () => {
  const [data, setData] = useState([]);
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
      const response = await axios.get('http://192.168.11.188:3000/api/home');
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilter = (type) => {
    setFilterType(type);
    if (type) {
      const filtered = data.filter((item) =>
        item.seek_item && item.seek_item.toLowerCase().includes(type.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
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
    const filtered = data.filter((item) => {
      const uploadedDate = new Date(item.date);
      const selected = new Date(date);
      return uploadedDate.toDateString() === selected.toDateString();
    });
    setFilteredData(filtered);
  };  

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
            if (text && data) {
              const filtered = data.filter((item) =>
                item.seek_item && item.seek_item.toLowerCase().includes(text.toLowerCase())
              );
              setFilteredData(filtered);
            } else {
              setFilteredData(data);
            }
          }}        
        />
        <TouchableOpacity 
          style={styles.filterIcon}
          onPress={() => setShowFilterOptions(!showFilterOptions)}>
          <MaterialIcons name="sort" size={24} color="#00072D" />
        </TouchableOpacity>
        {showFilterOptions && (
          <View style={styles.filterOptions}>
            <TouchableOpacity 
              style={styles.filterOption}
              onPress={() => handleFilter('')}>
              <Text style={styles.filterText}>
                <MaterialIcons name="all-inclusive" size={20} color="#00072D" />
                {' '}All
              </Text>
            </TouchableOpacity>
            <Text style={styles.modalHeading}>Sort by Item:</Text>
            <View style={styles.horizontalFilterOptions}>
              <TouchableOpacity 
                style={styles.filterOption}
                onPress={() => handleFilter('bag')}>
                <Text style={styles.filterText}>
                  <MaterialIcons name="shopping-bag" size={20} color="#00072D" />
                  {' '}Bag
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.filterOption}
                onPress={() => handleFilter('wallet')}>
                <Text style={styles.filterText}>
                  <MaterialIcons name="account-balance-wallet" size={20} color="#00072D" />
                  {' '}Wallet
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.filterOption}
                onPress={() => handleFilter('cellphone')}>
                <Text style={styles.filterText}>
                  <MaterialIcons name="phone" size={20} color="#00072D" />
                  {' '}Cellphone
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.modalHeading}>Sort by Date:</Text>
            <View style={styles.horizontalFilterOptions}>
              <TouchableOpacity 
                style={styles.filterOption}
                onPress={openDatePicker}>
                <Text style={styles.filterText}>
                  <MaterialIcons name="event" size={20} color="#00072D" />
                  {' '}Select Date
                </Text>
              </TouchableOpacity>
            </View>
          </View>        
        )}
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.sidebarToggle} onPress={() => setShowSidebar(!showSidebar)}>
          <AntDesign name={showSidebar ? "close" : "menu-fold"} size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.cardsContainer}>
          {filteredData.map((item, index) => (
            <TouchableOpacity key={index} style={styles.cardContainer} onPress={() => {}}>
              <Image
                source={{ uri: item.image }}
                style={styles.cardImage}
                onError={() => console.log('Error loading image')}
              />
              <Text style={styles.cardTitle}>{item.seek_item}</Text>
              <View style={styles.cardDetails}>
                <Text style={styles.cardText}>{`Name: ${item.firstname} ${item.lastname}`}</Text>
                <Text style={styles.cardText}>{`Location: ${item.location}`}</Text>
                <Text style={styles.cardText}>{`Email: ${item.email}`}</Text>
                <Text style={styles.cardText}>{`Description: ${item.description}`}</Text>
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
  );
};

const styles = StyleSheet.create({
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
  sidebarToggle: {
    position: 'absolute',
    top: -50,
    left: 20,
    zIndex: 3,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#ECECEC',
    paddingTop: 10, 
    paddingBottom: 50, 
  },
  searchBarContainer: {
    paddingHorizontal: 28,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 36,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#00072D',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  filterIcon: {
    marginLeft: 10,
    marginBottom: 10,
  },
  horizontalFilterOptions: {
    flexDirection: 'row',
    alignItems: 'center',
  },  
  filterOptions: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    zIndex: 1,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  modalHeading:{
    marginLeft: 5,
  },
  filterOption: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#00072D',
  },
  filterText: {
    color: '#00072D',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  cardsContainer: {
    marginBottom: 20,
  },
  cardContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 2,
    padding: 5,
    marginBottom: 5,
    elevation: 3,
    width: 270,
    marginLeft: 30,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDetails: {},
  cardText: {
    marginBottom: 5,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
});

export default WelcomeScreen;
