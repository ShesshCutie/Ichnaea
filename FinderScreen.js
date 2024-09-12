
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './style';
import * as ImagePicker from 'expo-image-picker';

function FinderScreen({ route }) {
  // const { user } = route.params;
  const [UploadStatus, SetUploadStatus] = useState('');
  const [image, SetImage] = useState(null);
  const [SelectedFile, SetSelectedFile] = useState(null);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [seek_item, setSeek_item] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  },[]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      SetSelectedFile(result.assets[0].uri);
    }
  };

  const UploadHandler = () => {
    if (!SelectedFile) return;
  
    const formData = new FormData();
    formData.append('image', {
      uri: SelectedFile,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    formData.append('location', location);
    formData.append('description', description);
    formData.append('seek_item', seek_item);
    // formData.append('id', route.params.user.id);
    // formData.append('firstname', route.params.user.firstname);
    // formData.append('lastname', route.params.user.lastname);
    // formData.append('email', route.params.user.email);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
  
    fetch(`http://192.168.11.188:3000/api/upload`, {
      method: 'POST',
      body: formData,
      credentials: 'include',
    })
    .then(res => res.json())
    .then(res => {
      SetUploadStatus(res.msg);
      setImageURL(`http://192.168.11.188:3000${res.image}`);
      navigation.navigate('Home');
})
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Firstname"
        value={firstname}
        onChangeText={setFirstname}
      />
      <TextInput
        style={styles.input}
        placeholder="Lastname"
        value={lastname}
        onChangeText={setLastname}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Lost Item"
        value={seek_item}
        onChangeText={setSeek_item}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Choose a photo</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 24 }}>{UploadStatus}</Text>
      <TouchableOpacity style={styles.button} onPress={UploadHandler}>
          <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
      </View>   );
}

export default FinderScreen;