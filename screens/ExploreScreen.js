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
import { useNavigation } from '@react-navigation/native'



function ProfileBlock({profilepic, usersname, hashtags}){
    const navigation = useNavigation()
    return(
        <View style={styles.profileBoxView}>
            <Pressable onPress={() => navigation.navigate('Error')} accessibilityRole='button'>
                <Image style={styles.profileImgView} source={profilepic}/>
            </Pressable>
            <View style={styles.profileTextBox}>
                <Text style={styles.usernameText}>{usersname}</Text>
                <Text style={styles.hashtagsText}>{hashtags}</Text>
            </View>
        </View>
    );
}

const DATA =[
    {
        id:1,
        profileimg: require('../assets/bg2.jpg'),
        usernames:'sundowning33',
        hashtag:'#sleep token, #coding'},
    {
        id:2,
        profileimg: require('../assets/bg3.jpg'),
        usernames:'cloudycat05',
        hashtag:'#art, #one piece, #design'
    },
    {
        id:3,
        profileimg: require('../assets/bg4.jpg'),
        usernames:'sofiia_kaiuk',
        hashtag:'#traveling, #ukraine'
    },
    {
        id:4,
        profileimg: require('../assets/bg5.jpg'),
        usernames:'sofia_krasovska',
        hashtag:'#music, #movies, #design'
    },
    {
        id:5,
        profileimg: require('../assets/bg6.jpg'),
        usernames:'jack0diamond',
        hashtag:'#axes, #anarchy, #dogs'
    },
    {
        id:6,
        profileimg: require('../assets/bg7.jpg'),
        usernames:'soulnotfound',
        hashtag:'#stars, #politics'
    },
    {
        id:7,
        profileimg: require('../assets/bg8.jpg'),
        usernames:'chaos_kitten',
        hashtag:'#fish, #sleep, #chaos'
    },
    {
        id:8,
        profileimg: require('../assets/bg9.jpg'),
        usernames:'void',
        hashtag:'#thrones, #planets, #life'
    },
    {
        id:9,
        profileimg: require('../assets/bg10.jpg'),
        usernames:'no_one_is_ody',
        hashtag:'#war, #ancient greece'
    },
]
const Item=({profileimg, usernames, hashtag})=>(
    <ProfileBlock profilepic={profileimg} usersname={usernames} hashtags={hashtag}/>
)

const renderItem = ({ item }) => (<Item profileimg={item.profileimg} usernames={item.usernames} hashtag={item.hashtag}/>);

const MyFlatList = () => {
      return (
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={'2'}
        />
      );
    };


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
            {/* <ScrollView style={styles.exploreView}>
                <ProfileBlock usersname={userData.userOne.usernames} hashtags={userData.userOne.hashtag}/>
                <ProfileBlock usersname={userData.userTwo.usernames} hashtags={userData.userTwo.hashtag}/>
                <ProfileBlock usersname={userData.userThree.usernames} hashtags={userData.userThree.hashtag}/>
                <ProfileBlock usersname={userData.userFour.usernames} hashtags={userData.userFour.hashtag}/>
                <ProfileBlock usersname={userData.userFive.usernames} hashtags={userData.userFive.hashtag}/>
                <ProfileBlock usersname={userData.userSix.usernames} hashtags={userData.userSix.hashtag}/>
                <ProfileBlock usersname={userData.userSeven.usernames} hashtags={userData.userSeven.hashtag}/>
                <ProfileBlock usersname={userData.userEight.usernames} hashtags={userData.userEight.hashtag}/>
                <ProfileBlock usersname={userData.userNine.usernames} hashtags={userData.userNine.hashtag}/>
            </ScrollView> */}
            <MyFlatList/>
        </ImageBackground>
    );
}

{/*  */}