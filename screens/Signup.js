import { View, Text, TextInput, TouchableOpacity, Pressable, Animated, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Button from '../components/Button';

const Signup = ({ navigation }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Username, setUsername] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const firstnameAnim = useRef(new Animated.Value(1)).current;
  const lastnameAnim = useRef(new Animated.Value(1)).current;
  const usernameAnim = useRef(new Animated.Value(1)).current;
  const emailAnim = useRef(new Animated.Value(1)).current;
  const passwordAnim = useRef(new Animated.Value(1)).current;

  const handleFocus = (anim) => {
    Animated.timing(anim, {
      toValue: 1.05,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = (anim) => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleSignUp = (e) => {
    fetch('http://192.168.43.245:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        Username,
      }),
      mode: 'cors',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Received non-ok status: ${response.status}`);
        }
        return response.text();
      })
      .then((responseText) => {
        if (responseText.startsWith('<!DOCTYPE')) {
          const errorStart = responseText.indexOf('<body>');
          const errorEnd = responseText.indexOf('</body>', errorStart);
          const errorMessage = responseText.slice(errorStart + 6, errorEnd);
          const jsonError = JSON.parse(`{"message": "${errorMessage}"}`);
          throw new Error(jsonError.message);
        }

        const cleanResponseText = responseText.replace(/[\u0000-\u001F\u007F-\u009F]/g, '');
        return JSON.parse(cleanResponseText);
      })
      .then((responseData) => {
        console.log(JSON.stringify(responseData));
        navigation.navigate('Login1');
      })
      .catch((error) => {
        console.error('Sign-up error:', error);
        alert('Sign-up failed. Please try again. (Error: ' + error.message + ')');
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
              <Text style={{
                fontSize: 22,
                fontWeight: 'bold',
                marginVertical: 5,
                color: COLORS.black
              }}>
                Create Account
              </Text>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text style={{
                fontSize: 16,
                fontWeight: '400',
                marginVertical: 8
              }}>First Name</Text>

              <Animated.View style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
                transform: [{ scale: firstnameAnim }]
              }}>
                <TextInput
                  placeholder='Enter your First Name'
                  placeholderTextColor={COLORS.black}
                  keyboardType='default'
                  style={{ width: "100%" }}
                  value={firstname}
                  onChangeText={setFirstname}
                  onFocus={() => handleFocus(firstnameAnim)}
                  onBlur={() => handleBlur(firstnameAnim)}
                />
              </Animated.View>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text style={{
                fontSize: 16,
                fontWeight: '400',
                marginVertical: 8
              }}>Last Name</Text>

              <Animated.View style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
                transform: [{ scale: lastnameAnim }]
              }}>
                <TextInput
                  placeholder='Enter your Last Name'
                  placeholderTextColor={COLORS.black}
                  keyboardType='default'
                  style={{ width: "100%" }}
                  value={lastname}
                  onChangeText={setLastname}
                  onFocus={() => handleFocus(lastnameAnim)}
                  onBlur={() => handleBlur(lastnameAnim)}
                />
              </Animated.View>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text style={{
                fontSize: 16,
                fontWeight: '400',
                marginVertical: 8
              }}>Username</Text>

              <Animated.View style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
                transform: [{ scale: usernameAnim }]
              }}>
                <TextInput
                  placeholder='Enter your Desired Username'
                  placeholderTextColor={COLORS.black}
                  keyboardType='default'
                  style={{ width: "100%" }}
                  value={Username}
                  onChangeText={setUsername}
                  onFocus={() => handleFocus(usernameAnim)}
                  onBlur={() => handleBlur(usernameAnim)}
                />
              </Animated.View>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text style={{
                fontSize: 16,
                fontWeight: '400',
                marginVertical: 5
              }}>Email address</Text>

              <Animated.View style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
                transform: [{ scale: emailAnim }]
              }}>
                <TextInput
                  placeholder='Enter your email address'
                  placeholderTextColor={COLORS.black}
                  keyboardType='email-address'
                  style={{ width: "100%" }}
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => handleFocus(emailAnim)}
                  onBlur={() => handleBlur(emailAnim)}
                />
              </Animated.View>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text style={{
                fontSize: 16,
                fontWeight: '400',
                marginVertical: 5
              }}>Password</Text>

              <Animated.View style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
                transform: [{ scale: passwordAnim }]
              }}>
                <TextInput
                  placeholder='Enter your password'
                  placeholderTextColor={COLORS.black}
                  secureTextEntry={!isPasswordShown}
                  style={{ width: "100%" }}
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => handleFocus(passwordAnim)}
                  onBlur={() => handleBlur(passwordAnim)}
                />

                <TouchableOpacity
                  onPress={() => setIsPasswordShown(!isPasswordShown)}
                  style={{
                    position: "absolute",
                    right: 12
                  }}
                >
                  {isPasswordShown ? (
                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                  ) : (
                    <Ionicons name="eye" size={24} color={COLORS.black} />
                  )}
                </TouchableOpacity>
              </Animated.View>
            </View>

            <View style={{
              flexDirection: 'row',
              marginVertical: 6
            }}>
              <Checkbox
                style={{ marginRight: 8 }}
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? COLORS.primary : undefined}
              />

              <Text>I agree to the terms and conditions</Text>
            </View>

            <Button
              title="Sign Up"
              filled
              style={{
                marginTop: 18,
                marginBottom: 4,
              }}
              onPress={handleSignUp}
            />

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
              <View
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: COLORS.grey,
                  marginHorizontal: 10
                }}
              />
            </View>

            <View style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 2

            }}>
              <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account</Text>
              <Pressable
                onPress={() => navigation.navigate("Login1")}
              >
                <Text style={{
                  fontSize: 16,
                  color: COLORS.primary,
                  fontWeight: "bold",
                  marginLeft: 6
                }}>Login</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Signup;
