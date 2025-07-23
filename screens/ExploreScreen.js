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
  import {styles} from "../styles.js"

function ProfileBlock(placeholderImg, placeholderUsername, placeholderHashtags){
    return(
        <View style={styles.profileBoxView}>
            <Image style={styles.profileImgView} source={require={placeholderImg}}/>
            <View style={styles.profileTextBox}>
                <Text style={styles.usernameText}>{placeholderUsername}</Text>
                <Text style={styles.usernameText}>{placeholderHashtags}</Text>
            </View>
        </View>
    );
}

export default function ExploreScreen () {
    const placeholderImg='./assets/favicon.png'
    const placeholderUsername='sundowning'
    const placeholderHashtags='#music'
    return (
        <View style={styles.exploreView}>
            <ProfileBlock/>
        </View>
    );
}