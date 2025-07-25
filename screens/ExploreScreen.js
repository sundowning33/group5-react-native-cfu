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
  import {userData} from "../pseudobackend.js"

function ProfileBlock({profilepic, usersname, hashtags}){
    return(
        <View style={styles.profileBoxView}>
            <Image style={styles.profileImgView} source={require('../assets/bg8.jpg')}/>
            <View style={styles.profileTextBox}>
                <Text style={styles.usernameText}>{usersname}</Text>
                <Text style={styles.hashtagsText}>{hashtags}</Text>
            </View>
        </View>
    );
}

export default function ExploreScreen () {
    // const placeholderImg=require('../assets/adaptive-icon.png')
    // const placeholderUsername='sundowning'
    // const placeholderHashtags='#music'
    const [search, setSearch]=useState('')
    return (
        // search bar
        <ImageBackground source={require('../assets/bg6.jpg')} style={styles.container}>
            <View style={styles.searchBarLine}>
                <View style={styles.searchBarField}>
                    {/* <Text style={styles.searchBarText}>Search...</Text> */}
                    <TextInput
                        // label='Email or Username'
                        placeholder='Search...'
                        value={search}
                        onChangeText={setSearch}
                        style={[styles.searchBarText]}
                    />
                </View>
            </View>
            {/* the list of profiles */}
            <ScrollView style={styles.exploreView}>
                <ProfileBlock usersname={userData.userOne.usernames} hashtags={userData.userOne.hashtag}/>
                <ProfileBlock usersname={userData.userTwo.usernames} hashtags={userData.userTwo.hashtag}/>
                <ProfileBlock usersname={userData.userThree.usernames} hashtags={userData.userThree.hashtag}/>
                <ProfileBlock usersname={userData.userFour.usernames} hashtags={userData.userFour.hashtag}/>
                <ProfileBlock usersname={userData.userFive.usernames} hashtags={userData.userFive.hashtag}/>
                <ProfileBlock usersname={userData.userSix.usernames} hashtags={userData.userSix.hashtag}/>
                <ProfileBlock usersname={userData.userSeven.usernames} hashtags={userData.userSeven.hashtag}/>
                <ProfileBlock usersname={userData.userEight.usernames} hashtags={userData.userEight.hashtag}/>
                <ProfileBlock usersname={userData.userNine.usernames} hashtags={userData.userNine.hashtag}/>
            </ScrollView>
        </ImageBackground>
    );
}