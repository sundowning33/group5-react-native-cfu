import {
  Text,
  View,
  TouchableOpacity,
  Switch,
  ImageBackground,
  // useColorScheme,

} from 'react-native'
import { useState } from 'react'
import { styles } from "../styles.js"

import Collapsible from 'react-native-collapsible'
import Icon from 'react-native-vector-icons/Ionicons'
import { Divider } from 'react-native-paper'

export default function SettingsScreen() {
  const [areNotifsOn, setAreNotifsOn] = useState(false)
  const [isCollapsedHelp, setIsCollapsedHelp] = useState(true)
  const [isCollapsedAccount, setIsCollapsedAccount] = useState(true)
  const [isCollapsedContact, setIsCollapsedContact] = useState(true)

  // const colorScheme = useColorScheme()
  // const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark')
  const [isDarkMode, setIsDarkMode] = useState(false)



  return (
    <ImageBackground // img bg should be like the view component and encompass the components inside it
      source={require('../assets/bg5.jpg')}
      opacity={0.3}
      style={[styles.background]}
      alt="A pretty low saturated image of marble with abstract streaks of burgundy and purple and golden highlights across the center."
    >
      <View>
        <Text style={styles.header} accessibilityRole='header'>Settings</Text>

        <View style={[styles.settingsBlock]}>
          <Icon name="bulb-outline" style={styles.settingsIcon} />
          <Text style={[styles.settingsText]}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={() => setIsDarkMode(!isDarkMode)}
            style={[styles.settingsSwitch]}
          />
        </View>

        <Divider horizontalInset={true} bold={true} style={{ backgroundColor: '#5A3353' }} />

        <View style={[styles.settingsBlock]}>
          <Icon name="notifications-outline" style={styles.settingsIcon} />
          <Text style={[styles.settingsText]}>Notifications [in dev]</Text>
          <Switch
            value={areNotifsOn}
            onValueChange={() => setAreNotifsOn(!areNotifsOn)}
            style={[styles.settingsSwitch]}
          />
        </View>

        <Divider horizontalInset={true} bold={true} style={{ backgroundColor: '#5A3353' }} />

        <View>
          <TouchableOpacity onPress={() => setIsCollapsedHelp(!isCollapsedHelp)} style={styles.settingsBlock}>
            <Icon name="help-circle-outline" style={styles.settingsIcon} />
            <Text style={[styles.settingsText]}>Help & FAQ</Text>
          </TouchableOpacity>

          <Collapsible collapsed={isCollapsedHelp}>
            <Text style={styles.collapsedContent}>Documentation, common issues...</Text>
          </Collapsible>
        </View>

        <Divider horizontalInset={true} bold={true} style={{ backgroundColor: '#5A3353' }} />

        <TouchableOpacity onPress={() => setIsCollapsedAccount(!isCollapsedAccount)} style={styles.settingsBlock}>
          <Icon name="rocket-outline" size={20} style={styles.settingsIcon} />
          <Text style={[styles.settingsText]}>Account details</Text>
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsedAccount}>
          <Text style={styles.collapsedContent}>Log out, change password, etc</Text>
        </Collapsible>

        <Divider horizontalInset={true} bold={true} style={{ backgroundColor: '#5A3353' }} />

        <TouchableOpacity onPress={() => setIsCollapsedContact(!isCollapsedContact)} style={styles.settingsBlock}>
          <Icon name="people-outline" style={styles.settingsIcon} />
          <Text style={[styles.settingsText]}>Contact us</Text> </TouchableOpacity>

        <Collapsible collapsed={isCollapsedContact}>
          <Text style={styles.collapsedContent}>
            Mariia Semerei: mariiasemerei@gmail.com OR sundowning33 on GitHub
          </Text>
          <Text style={styles.collapsedContent}>
            Sofiia Kaiuk:
          </Text>
          <Text style={styles.collapsedContent}>
            Sofia Krasovska:
          </Text>
          <Text style={styles.collapsedContent}>
            Anna Stelmakh: nimthecloud05@gmail.com OR CloudyCat05 on GitHub
          </Text>
        </Collapsible>
      </View>
    </ImageBackground>

  )
}