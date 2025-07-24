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

function ProfileBlock(){
    return(
        <View style={styles.profileBoxView}>
            <Image style={styles.profileImgView} source={require('../assets/adaptive-icon.png')}/>
            <View style={styles.profileTextBox}>
                <Text style={styles.usernameText}>sundowning</Text>
                <Text style={styles.usernameText}>#music</Text>
            </View>
        </View>
    );
}

export default function ExploreScreen () {
    // const placeholderImg=require('../assets/adaptive-icon.png')
    // const placeholderUsername='sundowning'
    // const placeholderHashtags='#music'
    return (
        <ScrollView style={styles.exploreView}>
            <ProfileBlock/>
            <ProfileBlock/>
            <ProfileBlock/>
            <ProfileBlock/>
            <ProfileBlock/>
            <ProfileBlock/>
            <ProfileBlock/>
            <ProfileBlock/>
            <ProfileBlock/>
        </ScrollView>
    );
}