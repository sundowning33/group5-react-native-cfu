import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import LoginScreen from './screens/LoginScreen.js'
import CreateProfile from './screens/CreateProfileScreen.js'
import CreateGroup from './screens/CreateGroupScreen'

import ExploreScreen from './screens/ExploreScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'

// import {styles} from "styles.js"

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();



function MainTabs (){
  return(
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={ExploreScreen} options={{headerShown: false}} />
      <Tabs.Screen name="ActStart" component={ProfileScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="Tabs" component={MainTabs}/>
        {/* <Stack.Screen name="StList" component={ListOfStartupsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
 }


























// export default function App() {
//   return (
// <NavigationContainer>
// <Tab.Navigator>
//     <Tab.Screen name='Profile' component={ProfileScreen} />
//     <Tab.Screen name='Explore' component={ExploreScreen} />
//     <Tab.Screen name='Settings' component={SettingsScreen} />
//   </Tab.Navigator>
// </NavigationContainer>
    

  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName='MainTabs'>
  //       <Stack.Screen name='MainTabs' component={MainTabs} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
//   )
//}
