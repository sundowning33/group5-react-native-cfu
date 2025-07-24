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

import { Collapsible } from 'react-native-collapsible'
import { Icon } from 'react-native-vector-icons/Ionicons'

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [areNotifsOn, setAreNotifsOn] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <View>
      <Text></Text>
      {/* <Text style={styles.header} accessibilityRole='header'>Settings</Text>
      <View style={[styles.settingsBlock]}>
        <Icon name="light-up" />
        <Text style={[styles.basicText, fontSize = "14"]}>Switch between Dark and Light modes for accessibility</Text>
        <Switch
          value={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
          style={[styles.switch]}
        />
      </View> */}

      {/* <View style={[styles.settingsBlock]}>
        <Icon name="notifications-outline" />
        <Text style={[styles.basicText, fontSize = "14"]}>Silent, sound, push notifs</Text>
        <Switch
          value={areNotifsOn}
          onChange={() => setAreNotifsOn(!areNotifsOn)}
          style={[styles.switch]}
        />
      </View> */}

      {/* <View>
        <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)} style={styles.settingsBlock}>
          <Icon name="help-circle-outline" size={20} />
          <Text style={[styles.basicText, { fontSize: 14 }]}>Help & FAQ</Text>
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsed}>
          <View style={styles.innerContent}>
            <Text>Documentation, common issues...</Text>
          </View>
        </Collapsible>
      </View> */}
      {/* <View>
        <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)} style={styles.settingsBlock}>
          <Icon name="logout" size={20} />
          <Text style={[styles.basicText, { fontSize: 14 }]}>Account details</Text>
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsed}>
          <View style={styles.innerContent}>
            <Text>Log out, change password, etc</Text>
          </View>
        </Collapsible>
      </View> */}

      {/* <View>
        <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)} style={styles.settingsBlock}>
          <Icon name="mail" size={20} />
          <Text style={[styles.basicText, { fontSize: 14 }]}>Contact Us & About</Text>
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsed}>
          <View style={styles.innerContent}>
            <Text>Who are the devs of this app?
              Mariia Semerei (sundowning33 on GitHub or mariiasemerei@gmail.com),
              Sofiia Kaiuk,
              Sofia Krasovska,
              Anna Stelmakh
            </Text>
          </View>
        </Collapsible>
      </View> */}


    </View>
  );
}