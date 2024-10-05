import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
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
        <Stack.Screen name="Home" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignUpPrompt" component={SignUpPrompt} />
        <Stack.Screen name="Post" component={PostScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Admin" component={AdminScreen} options={{headerShown: false}}/>
        <Stack.Screen name="MatchingResults" component={MatchingResults} />
        <Stack.Screen name="Archives" component={Archives} />
        <Stack.Screen name="Finder" component={FinderScreen} />
        <Stack.Screen name="Founder" component={FounderScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Settings" component={Settingscreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login1" component={Login1} options={{headerShown: false}} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="Privacy & Security" component={PrivacySecurity} />
        <Stack.Screen name="Account" component={AccountSettings} />
        <Stack.Screen name="Help and Support" component={HelpSupport} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Terms of Service" component={TermsService} />
        <Stack.Screen name="Report Problem" component={ReportProblem} />
        <Stack.Screen name="Include Problem" component={IncludeProblem} />
        <Stack.Screen name="Send Report" component={SendReport} />
        <Stack.Screen name="Accounts" component={AccountsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

