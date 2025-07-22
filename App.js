import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LoginScreen from './screens/LoginScreen'
import CreateProfileScreen from './screens/CreateProfileScreen'
import CreateGroupScreen from './screens/CreateGroupScreen'

import ExploreScreen from './screens/ExploreScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function StartStack () {
  return (
    <Stack.Navigator initialRouteName='Login Screen'>
      <Stack.Screen name='Create Profile' component={CreateProfileScreen} />
      <Stack.Screen name='Log in' component={LoginScreen} />
      <Stack.Screen name='Create Group' component={CreateGroupScreen} />
    </Stack.Navigator>
  )
}

function MainTabs () {
  return (
    <Stack.Navigator initialRouteName='Explore'>
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Explore' component={ExploreScreen} />
      <Stack.Screen name='Settings' component={SettingsScreen} />
    </Stack.Navigator>
  )
}

function SettingsStack () {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Settings' component={SettingsScreen} />
      <Tab.Screen
        name='Settings Stack'
        component={SettingsScreen}
        options={{ title: 'Settings Stack' }}
      />
      {/* we will add: dark mode, design, accessibility, notifications, language maybe;
      account options (password change) log out; help support, about us, contact us, faq */}
    </Tab.Navigator>
  )
}

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={StartStack} />
        <Stack.Screen name='Main Tabs' component={MainTabs} />
        <Stack.Screen name='Settings' component={SettingsStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
