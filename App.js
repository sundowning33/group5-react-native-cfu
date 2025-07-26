import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';



import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import LoginScreen from './screens/LoginScreen.js'
import CreateProfile from './screens/CreateProfileScreen.js'
import CreateGroup from './screens/CreateGroupScreen'

import ExploreScreen from './screens/ExploreScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'

import ErrorPage from './screens/ErrorPage.js'

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function ErrorStack(){
  return(
    <Stack.Navigator initialRouteName="Explore" >
        <Stack.Screen name="Explore" component={ExploreScreen} options={{headerShown:false}} />
        <Stack.Screen name="Error" component={ErrorPage} />
    </Stack.Navigator>

  )
}

function MainTabs() {
  return (
    <Tabs.Navigator screenOptions={{
      tabBarActiveTintColor: '#C63B62',
      tabBarInactiveTintColor: '#5A3353',
    }}>
      <Tabs.Screen name="Explore" component={ExploreScreen} options={{
        tabBarIcon: ({ color }) => {
          return <AntDesign name='home' size={20} color={color} />;
        }, headerShown: false
      }} />
      <Tabs.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ color }) => {
          return <AntDesign name='user' size={20} color={color} />;
        }, headerShown: false}}/>
      <Tabs.Screen name="Explore" component={ErrorStack} options={{
        tabBarIcon: ({ color }) => {
          return <Ionicons name='home' size={20} color={color} />;
        }, headerShown: false
      }} />
      <Tabs.Screen name="Settings" component={SettingsScreen} options={{
        tabBarIcon: ({ color }) => {
          return <AntDesign name='setting' size={20} color={color} />;
        }, headerShown: false
      }} />
    </Tabs.Navigator>
  );
}

export default function App() {        
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Create Group" >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Create Group" component={CreateGroup} />
            <Stack.Screen name="Create Account" component={CreateProfile} />
            <Stack.Screen name="Tabs" component={MainTabs} />
          </Stack.Navigator>
        </NavigationContainer>
        );
}
