import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, View} from 'react-native';
import StartScreen from './components/StartScreen';

export default function App() {
  return (
    <View>
      <StartScreen/>
      <StatusBar style="auto" />
    </View>
  );
}


