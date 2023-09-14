import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src_01_stylesheet'

export default function App() {
  const name = "Mia's App";

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on {name}!</Text>
      <Text> This is exciting</Text>
      {/* <Index/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
