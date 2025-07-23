import {
  Text,
  ScrollView,
  Image,
  View,
  Button,
  Pressable,
  TouchableOpacity,
  Alert,
  Switch,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  FlatList,
  ImageBackground,
  Animated
} from 'react-native'
import { useState, useEffect, useRef } from 'react'
import { styles } from "../styles.js"
import { Icon } from '@rneui/themed'
import Collapsible from 'react-native-collapsible'

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [areNotifsOn, setAreNotifsOn] = useState(false)


  return (
    <View>
      <Text style={styles.header} accessibilityRole='header'>Settings</Text>
      <View style={[styles.settingsBlock]}>
        <Icon name="light-up" />
        <Text style={[styles.basicText, fontSize = "14"]}>Switch between Dark and Light modes for accessibility</Text>
        <Switch
          value={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
          style={[styles.switch]}
        />
      </View>

      <View style={[styles.settingsBlock]}>
        <Icon name="notifications-outline" />
        <Text style={[styles.basicText, fontSize = "14"]}>Silent, sound, push notifs</Text>
        <Switch
          value={areNotifsOn}
          onChange={() => setAreNotifsOn(!areNotifsOn)}
          style={[styles.switch]}
        />
      </View>

      <Collapsible collapsed={!isVisible} touchableComponent="Accessibility">
        <View style={[styles.settingsBlock]}>
          <Icon name="settings" />
          <Text style={[styles.basicText, fontSize = "14"]}>Higher contrast, bigger font, etc</Text>
        </View>
      </Collapsible>

      <Collapsible collapsed={!isVisible} touchableComponent="Account details">
        <View style={[styles.settingsBlock]}>
          <Icon name="logout" />
          <Text style={[styles.basicText, fontSize = "14"]}>Log out, change password, etc</Text>
        </View>
      </Collapsible>


      <Collapsible collapsed={!isVisible} touchableComponent="Help & FAQ">
        <View style={[styles.settingsBlock]}>
          <Icon name="help-circle" />
          <Text style={[styles.basicText, fontSize = "14"]}>Documentation, common issues</Text>
        </View>
      </Collapsible>

      <Collapsible collapsed={!isVisible} touchableComponent="Contact Us & About">
        <View style={[styles.settingsBlock]}>
          <Icon name="mail" />
          <Text style={[styles.basicText, fontSize = "14"]}>Who are the devs of this app?
            Mariia Semerei (sundowning33 on GitHub or mariiasemerei@gmail.com), 
            Sofiia Kaiuk, 
            Sofia Krasovska, 
            Anna Stelmakh
            
            Honorable mentions:
            Thanks, Rachel and Ivan </Text>
        </View>
      </Collapsible>
    </View>
  );
}