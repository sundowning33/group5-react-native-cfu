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
  ImageBackground
} from 'react-native'
import { useState, useEffect } from 'react'
import { styles } from '../styles.js'
import { useNavigation } from '@react-navigation/native'


export default function CreateGroup () {
  const navigation = useNavigation()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [accessCode, setAccessCode] = useState('')
  
  let passwordToProfile = ""
  let loginToProfile = ""
  let accessCodeToProfile = ""

  return (
    // <ScrollView style={styles.container}>
    <ImageBackground 
      source={require('../assets/bg5.jpg')}
      opacity={0.5}
      style={[styles.background]}
      alt=''
    >
      <KeyboardAvoidingView style={styles.container}>
        <Text accessibilityRole='header' style={[styles.header, {color: "white"}]}>
          Create a group
        </Text>

        <View style={[styles.textInputContainer]}>
          <Text style={styles.basicText}>Write your email or usename</Text>
          <TextInput
            label='Email or Username'
            placeholder='Type here...'
            value={login}
            onChangeText={setLogin}
            accessibilityLabel='Email or Username'
            style={[styles.textInput]}
          />
        </View>

        <View style={[styles.textInputContainer]}>
          <Text style={styles.basicText}>Write your password</Text>
          <TextInput
            label='Password'
            placeholder='Type here...'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            accessibilityLabel='Password'
            style={[styles.textInput]}
          />
        </View>

        <View style={[styles.textInputContainer]}>
          <Text style={styles.basicText}>
            Write your access code given by an admin
          </Text>
          <TextInput
            label='Organization Access Code'
            placeholder='Type here...'
            value={accessCode} // i think all the values should be added from firebase but im making these through nav for now
            onChangeText={setAccessCode}
            accessibilityLabel='Organization Access Code'
            style={[styles.textInput]}
          />
        </View>

        <Pressable
          onPress={() =>
            navigation.navigate('Tabs', {
              passwordToProfile: setPassword,
              loginToProfile: setLogin,
              accessCodeToProfile: setAccessCode
            })
          }
          style={styles.nextButton}
          accessibilityRole='button'
        >
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          accessibilityRole='link'
        >
          <Text style={styles.linkText}>Log in instead</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Create Account')}
          accessibilityRole='link'
        >
          <Text style={styles.linkText}>Create an account instead</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
    // </ScrollView>
  )
}
