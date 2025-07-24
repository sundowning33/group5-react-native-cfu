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
import { styles } from "../styles.js"
import { useNavigation } from '@react-navigation/native'



export default function ProfileScreen() {
  const navigation = useNavigation()
  const [login, setLogin] = useState('')
  // const bgimg = {}
  const [fullname, setFullName] = useState('')
  const [birthday, setBirthday] = useState('')
  return (
    <ImageBackground // img bg should be like the view component and encompass the components inside it
      source={require('../assets/loginbg.jpg')}
      opacity={0.3}
      style={styles.background}
      alt="A pretty low saturated image of marble with abstract streaks of burgundy and purple and golden highlights across the center."
    >
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.textInputContainer}>
          <Text accessibilityRole='header' style={styles.header}>
            Profile
          </Text>
        </View>
        <TextInput
          label='Username'
          placeholder='Username'
          value={login}
          onChangeText={setLogin}
          accessibilityLabel='Username'
          style={styles.textInput}
        />
        <TextInput
          label='Full real name'
          placeholder='Full real name'
          value={fullname}
          onChangeText={setFullName}
          accessibilityLabel='Full real name'
          style={styles.textInput}
        />
        <TextInput
          label='Birthday'
          placeholder='Birthday'
          value={birthday}
          onChangeText={setBirthday}
          // keyboardType='"numeric'
          accessibilityLabel='Birthday'
          style={styles.textInput}
        />        
        <View flexDirection="row" >
          <Pressable
            onPress={() => navigation.navigate('Profile')}
            style={styles.moreButton}
            accessibilityRole='button'
          >
            <Text style={styles.buttonText}>More about me ➡️ </Text> 
          </Pressable>
        </View>
        <View style={styles.buttonsContainer}>
          <View>
            <Pressable
              onPress={() => navigation.navigate('Profile')}
              style={styles.theyButton}
              accessibilityRole='button'
            >
              <Text style={styles.buttonText}> (images associated with the user) </Text> 
            </Pressable>
          </View>
          <View style={styles.bottomButtons}>
            <View style={styles.bottomButtonsContainer}>
              <Pressable
                onPress={() => navigation.navigate('Profile')}
                style={styles.exButton}
                accessibilityRole='button'
              >
                <Text style={styles.buttonText}>Explore </Text> 
              </Pressable>
            </View>
            <View style={styles.bottomButtonsContainer}>
              <Pressable
                onPress={() => navigation.navigate('Profile')}
                style={styles.prButton}
                accessibilityRole='button'
              >
                <Text style={styles.buttonText}>Profile </Text> 
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}