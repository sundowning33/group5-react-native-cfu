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

function InfoBlockBaby(){
  const info=['full name: nyu ', 'hi ', 'bee']
  return(
    <View style={styles.infoBlock}>
      <Text style={styles.infoText}>{info}</Text>
    </View>
  );
}

export default function ProfileScreen() {
  // const navigation = useNavigation()
  // const [login, setLogin] = useState('')
  // // const bgimg = {}
  // const [fullname, setFullName] = useState('')
  // const [birthday, setBirthday] = useState('')
  return (
    <ImageBackground
      source={require('../assets/loginbg.jpg')}
      style={styles.background}
    >
      {/* <KeyboardAvoidingView style={styles.container}> */}
      <View style={styles.coloredBgBlock}>
        {/* the block of color behind the profile photo, can be changed in Redact Profile */}
        <Image source={require('../assets/splash-icon.png')} style={styles.myProfileImage}/>
        <Text style={styles.profileUsername}>Nyau</Text>
      </View>
      {/* flatlist of flexboxes for other info? */}
      <View style={styles.infoView}>
        <InfoBlockBaby info={[0]}/>
        <InfoBlockBaby info={[1]}/>
        <InfoBlockBaby info={[2]}/>
      </View>
      {/* </KeyboardAvoidingView> */}
    </ImageBackground>
  );
}