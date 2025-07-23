import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import { createAppContainer } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from './screens/LoginScreen'
import CreateProfile from './screens/CreateProfileScreen'
import CreateGroup from './screens/CreateGroupScreen'

import ExploreScreen from './screens/ExploreScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'

// import {styles} from "styles.js"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StartStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Create Profile' component={CreateProfile} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Create Group' component={CreateGroup} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function MainTabs() {
  return (
    <Stack.Navigator initialRouteName='Explore'>
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Explore' component={ExploreScreen} />
      <Stack.Screen name='Settings' component={SettingsScreen} />
    </Stack.Navigator>
  )
}

function SettingsStack() {
  return (
    <Tab.Navigator initialRouteName='Settings'>
      <Tab.Screen name='Settings' component={SettingsScreen} />
      {/* we will add: dark mode, design, accessibility, notifications, language maybe;
      account options (password change) log out; help support, about us, contact us, faq */}
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StartStack'>
        <Stack.Screen name='StartStack' component={StartStack} />
        <Stack.Screen name='MainTabs' component={MainTabs} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name='Explore' component={ExploreScreen} />
        <Stack.Screen name='Settings' component={SettingsScreen} />
        {/* <Stack.Screen name='Settings' component={SettingsStack} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
