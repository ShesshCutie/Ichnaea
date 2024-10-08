import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from './style'; 

import WelcomeScreen from './WelcomeScreen';
import SignUpPrompt from './signUpPrompt'; 
import ProfileScreen from './ProfileScreen';
import PostScreen from './PostScreen';
import AdminScreen from './AdminScreen';
import Archives from './Archives';
import FinderScreen from './FinderScreen';
import FounderScreen from './FounderScreen';
import Login from './Login';
import MatchingResults from './MatchingResults';
import { Login1, Signup, front } from "./screens";
import Settingscreen from './Settingscreen';
import FeedbackScreen from './settings/FeedbackScreen';
import PrivacySecurity from './settings/PrivacySecurity';
import AccountSettings from './settings/AccountSettings';
import HelpSupport from './settings/HelpSupport';
import AboutScreen from './settings/AboutScreen';
import TermsService from './settings/TermsService';
import ReportProblem from './settings/reportproblemcontent/ReportProblem';
import IncludeProblem from './settings/reportproblemcontent/IncludeProblem';
import SendReport from './settings/reportproblemcontent/SendReport';
import AccountsScreen from './AccountsScreen';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='front'
      >
        <Stack.Screen
          name="front"
          component={front}
          options={{
            headerShown: false
          }}
        />
          <Stack.Screen
          name="Signup" 
          component={Signup}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="Home" 
          component={WelcomeScreen} 
          options={{
            headerTintColor: '#fff', 
            headerBackground: () => (
              <Image
                source={require('./assets/back.png')} 
                style={{ width: '100%', height: 170 }} 
              />
            ),
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* Uncomment this if you want to include another image */}
                {/* <Image
                  source={require('./assets/logo1.png')}
                  style={{ width: 65, height: 65, marginLeft: 130, marginTop: 30 }}
                /> */}
                <Image
                  source={require('./assets/shapess.png')} 
                  style={{ width: 380, height: 380, marginLeft: -21, marginTop: 340 }} 
                />
                <Text style={{ color: '#fff', fontSize: 24, marginLeft: -230, fontWeight: 'bold', marginTop: 1 }}>
                  Home
                </Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: '#f4511e', 
            },
            headerTitleAlign: 'left',
            headerLeft: false,
          }}
        />

        <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          headerTintColor: '#fff', 
          headerBackground: () => (
            <Image
              source={require('./assets/back.png')} 
              style={{ width: '100%', height: 170 }} 
            />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* Uncomment this if you want to include another image */}
              {/* <Image
                source={require('./assets/logo1.png')}
                style={{ width: 65, height: 65, marginLeft: 130, marginTop: 30 }}
              /> */}
              <Image
                source={require('./assets/shapess.png')} 
                style={{ width: 380, height: 380, marginLeft: -21, marginTop: 340 }} 
              />
              <Text style={{ color: '#fff', fontSize: 24, marginLeft: -235, fontWeight: 'bold', marginTop: 1 }}>
                Profile
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: '#f4511e', 
          },
          headerTitleAlign: 'left',
          headerLeft: false,
        }}
        />

        <Stack.Screen name="SignUpPrompt" component={SignUpPrompt} />
        <Stack.Screen 
        name="Post" 
        component={PostScreen} 
        options={{
          headerTintColor: '#fff', 
          headerBackground: () => (
            <Image
              source={require('./assets/back.png')} 
              style={{ width: '100%', height: 170 }} 
            />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* Uncomment this if you want to include another image */}
              {/* <Image
                source={require('./assets/logo1.png')}
                style={{ width: 65, height: 65, marginLeft: 130, marginTop: 30 }}
              /> */}
              <Image
                source={require('./assets/shapess.png')} 
                style={{ width: 380, height: 380, marginLeft: -21, marginTop: 340 }} 
              />
              <Text style={{ color: '#fff', fontSize: 24, marginLeft: -235, fontWeight: 'bold', marginTop: 1 }}>
                Post Item
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: '#f4511e', 
          },
          headerTitleAlign: 'left',
          headerLeft: false,
        }}
        />


        <Stack.Screen name="Admin" component={AdminScreen} options={{headerShown: false}}/>
        
        <Stack.Screen 
        name="MatchingResults" 
        component={MatchingResults} 
        options={{
          headerTintColor: '#fff', 
          headerBackground: () => (
            <Image
              source={require('./assets/back.png')} 
              style={{ width: '100%', height: 170 }} 
            />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('./assets/logo1.png')}
                style={{ width: 65, height: 65, marginLeft: 80, marginTop: 30 }}
              />
              <Image
                source={require('./assets/shapess.png')} 
                style={{ width: 400, height: 400, marginLeft: -214, marginTop: 400 }} 
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#f4511e', 
          },
          headerTitleAlign: 'left',
        }}
        />

        <Stack.Screen
         name="Archives" 
         component={Archives} 
         options={{
          headerTintColor: '#fff', 
          headerBackground: () => (
            <Image
              source={require('./assets/back.png')} 
              style={{ width: '100%', height: 170 }} 
            />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('./assets/logo1.png')}
                style={{ width: 65, height: 65, marginLeft: 80, marginTop: 30 }}
              />
              <Image
                source={require('./assets/shapess.png')} 
                style={{ width: 400, height: 400, marginLeft: -214, marginTop: 400 }} 
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#f4511e', 
          },
          headerTitleAlign: 'left',
        }}
        />

        <Stack.Screen 
        name="Finder" 
        component={FinderScreen}
        options={{
          headerTintColor: '#fff', 
          headerBackground: () => (
            <Image
              source={require('./assets/back.png')} 
              style={{ width: '100%', height: 170 }} 
            />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('./assets/logo1.png')}
                style={{ width: 65, height: 65, marginLeft: 80, marginTop: 30 }}
              />
              <Image
                source={require('./assets/shapess.png')} 
                style={{ width: 400, height: 400, marginLeft: -214, marginTop: 400 }} 
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#f4511e', 
          },
          headerTitleAlign: 'left',
        }} 
        />

        <Stack.Screen 
        name="Founder" 
        component={FounderScreen}
        options={{
          headerTintColor: '#fff', 
          headerBackground: () => (
            <Image
              source={require('./assets/back.png')} 
              style={{ width: '100%', height: 170 }} 
            />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('./assets/logo1.png')}
                style={{ width: 65, height: 65, marginLeft: 80, marginTop: 30 }}
              />
              <Image
                source={require('./assets/shapess.png')} 
                style={{ width: 400, height: 400, marginLeft: -214, marginTop: 400 }} 
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#f4511e', 
          },
          headerTitleAlign: 'left',
        }} 
        />

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen 
        name="Settings" 
        component={Settingscreen} 
        options={{
          headerTintColor: '#fff', 
          headerBackground: () => (
            <Image
              source={require('./assets/back.png')} 
              style={{ width: '100%', height: 170 }} 
            />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* Uncomment this if you want to include another image */}
              {/* <Image
                source={require('./assets/logo1.png')}
                style={{ width: 65, height: 65, marginLeft: 130, marginTop: 30 }}
              /> */}
              <Image
                source={require('./assets/shapess.png')} 
                style={{ width: 380, height: 380, marginLeft: -21, marginTop: 340 }} 
              />
              <Text style={{ color: '#fff', fontSize: 24, marginLeft: -235, fontWeight: 'bold', marginTop: 1 }}>
                Settings
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: '#f4511e', 
          },
          headerTitleAlign: 'left',
          headerLeft: false,
        }}
        />

        <Stack.Screen name="Login1" component={Login1} options={{headerShown: false}} />


        <Stack.Screen 
        name="Feedback" 
        component={FeedbackScreen} 
        options={{
          headerTintColor: '#fff', 
          headerBackground: () => (
            <Image
              source={require('./assets/back.png')} 
              style={{ width: '100%', height: 170 }} 
            />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('./assets/logo1.png')}
                style={{ width: 65, height: 65, marginLeft: 80, marginTop: 30 }}
              />
              <Image
                source={require('./assets/shapess.png')} 
                style={{ width: 400, height: 400, marginLeft: -214, marginTop: 400 }} 
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#f4511e', 
          },
          headerTitleAlign: 'left',
        }} 
        />

        <Stack.Screen 
        name="Privacy & Security" 
        component={PrivacySecurity} 
        options={{
          headerTintColor: '#fff', 
          headerBackground: () => (
            <Image
              source={require('./assets/back.png')} 
              style={{ width: '100%', height: 170 }} 
            />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('./assets/logo1.png')}
                style={{ width: 65, height: 65, marginLeft: 80, marginTop: 30 }}
              />
              <Image
                source={require('./assets/shapess.png')} 
                style={{ width: 400, height: 400, marginLeft: -214, marginTop: 400 }} 
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#f4511e', 
          },
          headerTitleAlign: 'left',
        }} 
        />

        <Stack.Screen 
        name="Account" 
        component={AccountSettings} 
        options={{
          headerTintColor: '#fff', 
          headerBackground: () => (
            <Image
              source={require('./assets/back.png')} 
              style={{ width: '100%', height: 170 }} 
            />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('./assets/logo1.png')}
                style={{ width: 65, height: 65, marginLeft: 80, marginTop: 30 }}
              />
              <Image
                source={require('./assets/shapess.png')} 
                style={{ width: 400, height: 400, marginLeft: -214, marginTop: 400 }} 
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#f4511e', 
          },
          headerTitleAlign: 'left',
        }} 
        />

        <Stack.Screen 
        name="Help and Support" 
        component={HelpSupport} 
        options={{
          headerTintColor: '#fff', 
          headerBackground: () => (
            <Image
              source={require('./assets/back.png')} 
              style={{ width: '100%', height: 170 }} 
            />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('./assets/logo1.png')}
                style={{ width: 65, height: 65, marginLeft: 80, marginTop: 30 }}
              />
              <Image
                source={require('./assets/shapess.png')} 
                style={{ width: 400, height: 400, marginLeft: -214, marginTop: 400 }} 
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#f4511e', 
          },
          headerTitleAlign: 'left',
        }} 
        />

        <Stack.Screen 
        name="About" 
        component={AboutScreen} 
        options={{
          headerTintColor: '#fff', 
          headerBackground: () => (
            <Image
              source={require('./assets/back.png')} 
              style={{ width: '100%', height: 170 }} 
            />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('./assets/logo1.png')}
                style={{ width: 65, height: 65, marginLeft: 80, marginTop: 30 }}
              />
              <Image
                source={require('./assets/shapess.png')} 
                style={{ width: 400, height: 400, marginLeft: -214, marginTop: 400 }} 
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#f4511e', 
          },
          headerTitleAlign: 'left',
        }} 
        />

        <Stack.Screen 
        name="Terms of Service" 
        component={TermsService} 
        options={{
          headerTintColor: '#fff', 
          headerBackground: () => (
            <Image
              source={require('./assets/back.png')} 
              style={{ width: '100%', height: 170 }} 
            />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('./assets/logo1.png')}
                style={{ width: 65, height: 65, marginLeft: 80, marginTop: 30 }}
              />
              <Image
                source={require('./assets/shapess.png')} 
                style={{ width: 400, height: 400, marginLeft: -214, marginTop: 400 }} 
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#f4511e', 
          },
          headerTitleAlign: 'left',
        }} 
        />

        <Stack.Screen 
        name="Report Problem" 
        component={ReportProblem} 
        options={{
          headerTintColor: '#fff', 
          headerBackground: () => (
            <Image
              source={require('./assets/back.png')} 
              style={{ width: '100%', height: 170 }} 
            />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('./assets/logo1.png')}
                style={{ width: 65, height: 65, marginLeft: 80, marginTop: 30 }}
              />
              <Image
                source={require('./assets/shapess.png')} 
                style={{ width: 400, height: 400, marginLeft: -214, marginTop: 400 }} 
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#f4511e', 
          },
          headerTitleAlign: 'left',
        }} 
        />

        <Stack.Screen 
        name="Include Problem" 
        component={IncludeProblem} 
        options={{
          headerTintColor: '#fff', 
          headerBackground: () => (
            <Image
              source={require('./assets/back.png')} 
              style={{ width: '100%', height: 170 }} 
            />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('./assets/logo1.png')}
                style={{ width: 65, height: 65, marginLeft: 80, marginTop: 30 }}
              />
              <Image
                source={require('./assets/shapess.png')} 
                style={{ width: 400, height: 400, marginLeft: -214, marginTop: 400 }} 
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#f4511e', 
          },
          headerTitleAlign: 'left',
        }} 
        />

        <Stack.Screen name="Send Report" component={SendReport} />
        <Stack.Screen 
          name="Accounts" 
          component={AccountsScreen} 
          options={{
            headerTintColor: '#fff', 
            headerBackground: () => (
              <Image
                source={require('./assets/back.png')} 
                style={{ width: '100%', height: 170 }} 
              />
            ),
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('./assets/logo1.png')}
                  style={{ width: 65, height: 65, marginLeft: 80, marginTop: 40 }}
                />
                <Image
                  source={require('./assets/shapess.png')} 
                  style={{ width: 400, height: 400, marginLeft: -214, marginTop: 440 }} 
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#f4511e', 
            },
            headerTitleAlign: 'left',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

