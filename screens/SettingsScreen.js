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
import { Icon } from '@rneui/themed';

function SettingsBlock(props) {

    return (
        <View style={[styles.settingsBlock]}>
            <Icon name={props.firstIcon} />
            <Text style={[styles.basicText]}>{props.name}</Text>
            <Text style={[styles.basicText, fontSize="14"]}>{props.description}</Text>
            <Icon name="arrow-right" onPress={() => navigation.navigate(props.navDir)} />
        </View>
    )
}
export default function SettingsScreen() {
    return (
        <View accessibilityRole='header'>
            <Text style={styles.header}>Settings</Text>
            <SettingsBlock firstIcon="light-up" name="Dark Mode" description="Switch between Dark and Light modes for accessibility"  navDir="Dark Mode Themes"/>
            <SettingsBlock firstIcon="notifications-outline" name="Notifications" description="Silent, sound, push notifs" navDir="Notif Settings"/>
            <SettingsBlock firstIcon="settings-accessibility" name="Accessibility" description="Higher contrast, bigger font, etc" navDir="Accessibility Settings"/>
            {/* <SettingsBlock firstIcon="" name="Language" description="Change language from English to Ukrainian" navDir="Language Settings"/> */}
            <SettingsBlock firstIcon="logout" name="Account" description="Log out, change password, etc" navDir="Account Settings"/>
            <SettingsBlock firstIcon="help-circle" name="Help & FAQ" description="Documentation, common issues" navDir="Help FAQ Screen"/>
            <SettingsBlock firstIcon="mail" name="Contact Us & About" description="Instagram, Telegram, e-mail, GitHub, about the devs of this project" navDir="Contact Us"/>
        </View>
    );
}