import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import Button from '../components/Button';

const FeedbackScreen = ({ navigation }) => {
  const [message, setMessage] = useState('');

  const handleSendFeedback = () => {
    if (!message) {
      alert('Please enter your feedback message.');
      return;
    }

    fetch('http://192.168.11.188:3000/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
      }),
      mode: 'cors',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Received non-ok status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        alert(responseData.msg);
        setMessage(''); // Clear the input field after successful submission
      })
      .catch((error) => {
        console.error('Feedback error:', error);
        alert('Feedback failed. Please try again. (Error: ' + error.message + ')');
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={5}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, marginHorizontal: 22 }}>
            <View style={{ marginVertical: 18 }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  marginVertical: 5,
                  color: COLORS.black,
                }}
              >
                Feedback
              </Text>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  marginVertical: 8,
                }}
              >
                Your Message
              </Text>

              <View
                style={{
                  width: '100%',
                  height: 100,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingLeft: 12,
                  paddingTop: 8,
                }}
              >
                <TextInput
                  placeholder="Enter your feedback here"
                  placeholderTextColor={COLORS.grey}
                  multiline={true}
                  numberOfLines={4}
                  style={{ width: '100%', height: '100%' }}
                  value={message}
                  onChangeText={setMessage}
                />
              </View>
            </View>

            <Button
              title="Send Feedback"
              filled
              style={{
                marginTop: 18,
                marginBottom: 4,
              }}
              onPress={handleSendFeedback}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default FeedbackScreen;
