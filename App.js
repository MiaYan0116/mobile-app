import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import Header from './components/Header'
import { useState } from 'react';
import Input from './components/Input';

export default function App() {
  const name = "Mia's App";
  const [text, setText] = useState("Hi")

  const changeTextHandler = (changedText) => {
    setText(changedText);
  }

  function changeDataHandler(data){
    console.log(data);
		setText(data);
	}


  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on {name}!</Text> */}
      {/* use props to pass values from parents' component to Header */}
      <Header name={name}/>
      <Input changedHandler={changeDataHandler}/>
      <Text>Text is: {text}</Text>
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

  input: {
    borderColor:'blue',
    borderBottomWidth: 2,
    // borderWidth: "50%",
  }
});
