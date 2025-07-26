import {
  Text,
  View,
  TouchableOpacity,
  Switch,
  ImageBackground,
  ScrollView
  // useColorScheme,
} from 'react-native';
import { useState } from 'react';
import { styles } from '../styles.js';
// import useNavigation from "@react-navigation/native"

import Collapsible from 'react-native-collapsible';
import { AntDesign } from '@expo/vector-icons';
import { Divider } from 'react-native-paper';

export default function SettingsScreen() {
  const [areNotifsOn, setAreNotifsOn] = useState(false);
  const [isCollapsedHelp, setIsCollapsedHelp] = useState(true);
  const [isCollapsedAccount, setIsCollapsedAccount] = useState(true);
  const [isCollapsedContact, setIsCollapsedContact] = useState(true);
  // const navigation = useNavigation();
  

  // const colorScheme = useColorScheme()
  // const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark')
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (  
    <View style={isDarkMode ? styles.background1 : styles.background2}>
      <ImageBackground
        source={require('../assets/bg5.jpg')}
        opacity={0.6}
        style={styles.background}>
        <Text accessibilityRole='header' style={[styles.header, , { color: 'white' }]}>
          Settings
        </Text>

        <View style={[styles.settingsBlock]}>
          <AntDesign name="contrast" style={styles.settingsIcon} />
          <Text style={[styles.settingsText]}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={() => setIsDarkMode(!isDarkMode)}
            style={[styles.settingsSwitch]}
          />
        </View>

        <Divider
          horizontalInset={true}
          bold={true}
          style={{ backgroundColor: '#5A3353' }}
        />
{/* 
        <View style={[styles.settingsBlock]}>
          <AntDesign name="notifications-outline" style={styles.settingsIcon} />
          <Text style={[styles.settingsText]}>Notifications [in dev]</Text>
          <Switch
            value={areNotifsOn}
            onValueChange={() => setAreNotifsOn(!areNotifsOn)}
            style={[styles.settingsSwitch]}
          />
        </View>

        <Divider
          horizontalInset={true}
          bold={true}
          style={{ backgroundColor: '#5A3353' }}
        /> */}

        <View>
          <TouchableOpacity
            onPress={() => setIsCollapsedHelp(!isCollapsedHelp)}
            style={styles.settingsBlock}>
            <AntDesign name="rocket1" style={styles.settingsIcon} />
            <Text style={[styles.settingsText]}>Help & FAQ</Text>
          </TouchableOpacity>

          <Collapsible collapsed={isCollapsedHelp}>
            <Text style={styles.collapsedContent}>
              Our GitHub: sundowning33/group5-react-native-cfu
            </Text>
          </Collapsible>
        </View>

        <Divider
          horizontalInset={true}
          bold={true}
          style={{ backgroundColor: '#5A3353' }}
        />

        <TouchableOpacity
          onPress={() => setIsCollapsedAccount(!isCollapsedAccount)}
          style={styles.settingsBlock}>
          <AntDesign
            name="adduser"
            size={20}
            style={styles.settingsIcon}
          />
          <Text style={[styles.settingsText]}>Account details</Text>
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsedAccount}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('Login')}
            accessibilityRole="link">
            <Text style={styles.collapsedContent}>Log out</Text>
          </TouchableOpacity>
        </Collapsible>

        <Divider
          horizontalInset={true}
          bold={true}
          style={{ backgroundColor: '#5A3353' }}
        />

        <TouchableOpacity
          onPress={() => setIsCollapsedContact(!isCollapsedContact)}
          style={styles.settingsBlock}>
          <AntDesign name="adduser" style={styles.settingsIcon} />
          <Text style={[styles.settingsText]}>Contact us</Text>{' '}
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsedContact}>
          <Text style={styles.collapsedContent}>
            Mariia Semerei: mariiasemerei@gmail.com OR sundowning33 on GitHub
          </Text>
          <Text style={styles.collapsedContent}>
            Sofiia Kaiuk
          </Text>
          <Text style={styles.collapsedContent}>
            Sofia Krasovska:krasovskasofia23@gmail.com
          </Text>
          <Text style={styles.collapsedContent}>
            Anna Stelmakh: nimthecloud05@gmail.com OR CloudyCat05 on GitHub
          </Text>
          <Text style={styles.collapsedContent}>
            Mykhailo Ivanov
          </Text>
        </Collapsible>
      </ImageBackground>
    </View>
  );
}
