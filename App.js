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

function MainTabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name='Explore' component={ExploreScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}

function StartStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Create Profile' component={CreateProfile} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Tabs' component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name='Create Group' component={CreateGroup} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function SettingsStack() {
  return (
    <Stack.Navigator initialRouteName='Profile'>
      <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Settings' component={SettingsScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

// function SettingsStack() {
//   return (
//     <Tab.Navigator initialRouteName='Profile'>
//       <Tab.Screen name='Settings' component={SettingsScreen} />
//     </Tab.Navigator>
//   )
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StartStack'>
        <Stack.Screen name='StartStack' component={StartStack} />
        <Stack.Screen name='MainTabs' component={MainTabs} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name='Settings' component={SettingsScreen} />
        {/* <Stack.Screen name='Settings' component={SettingsStack} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
