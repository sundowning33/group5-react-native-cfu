import {
    Text,
    View,
    Button,
    Pressable,
} from 'react-native'
import { styles } from "../styles.js"
import { useNavigation } from '@react-navigation/native'



export default function ErrorPage() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.errorText}>This profiile page got lost. Help us find it?</Text>
        </View>
  );
}
