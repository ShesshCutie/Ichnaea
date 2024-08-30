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
import Settingscreen from './Settingscreen';
import FeedbackScreen from './settings/FeedbackScreen';
import PrivacySecurity from './settings/PrivacySecurity';
import AccountSettings from './settings/AccountSettings';
import HelpSupport from './settings/HelpSupport';
import AboutScreen from './settings/AboutScreen';
import TermsService from './settings/TermsService';
import { front } from "./screens";


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
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SignUpPrompt" component={SignUpPrompt} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="MatchingResults" component={MatchingResults} />
        <Stack.Screen name="Archives" component={Archives} />
        <Stack.Screen name="Finder" component={FinderScreen} />
        <Stack.Screen name="Founder" component={FounderScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Settings" component={Settingscreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="Privacy" component={PrivacySecurity} />
        <Stack.Screen name="Account" component={AccountSettings} />
        <Stack.Screen name="HelpSupport" component={HelpSupport} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Terms" component={TermsService} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}




// import React, { useState } from 'react';
// import { Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import WelcomeScreen from './WelcomeScreen';
// import SignUpPrompt from './signUpPrompt'; 
// import ProfileScreen from './ProfileScreen';
// import PostScreen from './PostScreen';
// import AdminScreen from './AdminScreen';
// import Archives from './Archives';
// import FinderScreen from './FinderScreen';
// import FounderScreen from './FounderScreen';
// import Login from './Login';
// import Settingscreen from './Settingscreen';
// import MatchingResults from './MatchingResults';
// import FeedbackScreen from './settings/FeedbackScreen';
// import AccountSettings from './settings/AccountSettings';
// import HelpSupport from './settings/HelpSupport';
// import PrivacySecurity from './settings/PrivacySecurity';
// import AboutScreen from './settings/AboutScreen';
// import { front } from "./screens";

// const Stack = createStackNavigator();


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//       initialRouteName='front'
//       >
//         <Stack.Screen
//           name="front"
//           component={front}
//           options={{
//             headerShown: false
//           }}
//         />
//         <Stack.Screen name="Home" component={WelcomeScreen} />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//         <Stack.Screen name="SignUpPrompt" component={SignUpPrompt} />
//         <Stack.Screen name="Post" component={PostScreen} />
//         <Stack.Screen name="Admin" component={AdminScreen} />
//         <Stack.Screen name="MatchingResults" component={MatchingResults} />
//         <Stack.Screen name="Archives" component={Archives} />
//         <Stack.Screen name="Finder" component={FinderScreen} />
//         <Stack.Screen name="Founder" component={FounderScreen} />
//         <Stack.Screen name="Feedback" component={FeedbackScreen} />
//         <Stack.Screen name="Account" component={AccountSettings} />
//         <Stack.Screen name="Help" component={HelpSupport} />
//         <Stack.Screen name="Privacy" component={PrivacySecurity} />
//         <Stack.Screen name="About" component={AboutScreen} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="setting" component={Settingscreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }