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
        <View>
            <Text>Page not found</Text>
            
        </View>
  );
}
