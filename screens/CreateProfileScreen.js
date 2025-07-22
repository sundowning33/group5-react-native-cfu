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


export default function CreateProfile() {
    const navigation = useNavigation()

    const [login, setLogin] = useState('')
    // const bgimg = './assets/loginbg.jpg'

    const [password, setPassword] = useState('')
    const [accessCode, setAccessCode] = useState('')

    const handleNext = () => {
        navigation.navigate('Profile Screen',)
        // {
        //   login,
        //   password,
        //   accessCode
        // })
    }

    return (
        // i am gonna add documentation later so feel free to add comments
        // <ScrollView style={styles.container}>
            <ImageBackground // img bg should be like the view component and encompass the components inside it
                source={require('../assets/loginbg.jpg')}
                opacity={0.3}
                style={[styles.background]}
                alt="A pretty low saturated image of marble with abstract streaks of burgundy and purple and golden highlights across the center."
            >
                <KeyboardAvoidingView style={styles.container}>
                    <Text accessibilityRole='header' style={styles.header}>
                        Create an account
                    </Text>

                    <View style={[styles.textInputContainer]}>
                        <Text style={styles.basicText}>Write your email or usename</Text>
                        <TextInput
                            label='Email or Username'
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
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            accessibilityLabel='Password'
                            style={[styles.textInput]}
                        />
                    </View>

                    <View style={[styles.textInputContainer]}>
                        <Text style={styles.basicText}>Write your access code given by an admin</Text>
                        <TextInput
                            label='Organization Access Code'
                            value={accessCode} // i think all the values should be added from firebase but im making these through nav for now
                            onChangeText={setAccessCode}
                            accessibilityLabel='Organization Access Code'
                            style={[styles.textInput]}
                        />
                    </View>

                    <Pressable
                        onPress={handleNext}
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
                        onPress={() => navigation.navigate('Create Group')}
                        accessibilityRole='link'
                    >
                        <Text style={styles.linkText}>Create a group instead</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ImageBackground>
        // </ScrollView>
    )
}
