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
  ImageBackground,
} from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from '../styles.js';
import { useNavigation } from '@react-navigation/native';
import { ImagePicker } from 'expo-image-picker';
import { useAudioPlayer } from 'expo-audio';

// expo install expo-image-picker

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [fullname, setFullName] = useState('');
  const [birthday, setBirthday] = useState('');

  const audioSource = require('../assets/unforgiven2.mp3');
  const player = useAudioPlayer(audioSource);

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert(
            'Sorry, camera roll permissions are required to make this work!'
          );
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log('Image URI:', result.assets[0].uri);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/bg5.jpg')}
      opacity={0.5}
      style={styles.background}>
      <ScrollView style={styles.container}>
        <Text
          accessibilityRole="header"
          style={[styles.header, { color: 'white' }]}>
          Profile
        </Text>

        <View style={[styles.textInputContainer]}>
          <TextInput
            label="Username"
            placeholder="Username"
            value={login}
            onChangeText={setLogin}
            accessibilityLabel="Username"
            style={styles.textInput}
          />
        </View>

        <View style={[styles.textInputContainer]}>
          <TextInput
            label="Full real name"
            placeholder="Full real name"
            value={fullname}
            onChangeText={setFullName}
            accessibilityLabel="Full real name"
            style={styles.textInput}
          />
        </View>

        <View style={[styles.textInputContainer]}>
          <TextInput
            label="Birthday"
            placeholder="Birthday"
            value={birthday}
            onChangeText={setBirthday}
            // keyboardType='"numeric'
            accessibilityLabel="Birthday"
            style={styles.textInput}
          />
        </View>
        <View flexDirection="row">
          <Pressable style={styles.nextButton} accessibilityRole="button">
            <Text style={styles.buttonText}>More</Text>
          </Pressable>
        </View>

        <View style={{ width: 150, alignSelf: 'center', marginVertical: 10, padding: 10, }}> // i'll move it to styles later
          '
          <Button
            title="Play Sound"
            onPress={() => player.play()}
            color="#5A3353"
            style={styles.musicButton}
          />
          <Button
            title="Replay Sound"
            style={styles.musicButton}
            color="#5A3353"
            onPress={() => {
              player.seekTo(0);
              player.play();
            }}
          />
          '
        </View>

        <View style={styles.imagePick}>
          <Pressable onPress={pickImage} accessibilityRole="button">
            <Text style={styles.buttonText}>
              (images associated with the user)
            </Text>
            {image && (
              <Image
                source={{ uri: image }}
                style={{
                  width: 250,
                  height: 200,
                  marginTop: 10,
                  alignSelf: 'center',
                }}
              />
            )}
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
