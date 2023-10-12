import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView} from 'react-native';
import Header from './components/Header'
import { useState } from 'react';
import Input from './components/Input';


export default function App() {
  const name = "Mia's App";
  const [text, setText] = useState("Hi")
  const [modalVisible, setModalVisible] = useState(false)

  const changeTextHandler = (changedText) => {
    setText(changedText);
  }

  function changeDataHandler(data){
    console.log(data);
		setText(data);
    setModalVisible(false);
	}

  function addAGoalHandler(){
    setModalVisible(true);
  }

  function cancelHandler(){
    setModalVisible(false);
  }


  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Open up App.js to start working on {name}!</Text> */}
      {/* use props to pass values from parents' component to Header */}
      <View style={styles.topContainer}>
        <Header name={name}/>
        <StatusBar style="auto" />
        <Input changedHandle={changeDataHandler} modalVisible={modalVisible} cancelHandler={cancelHandler}/>
        <Button title="Add a goal" onPress={addAGoalHandler}></Button>
      </View>
      <View style={styles.bottomContainer}>
        <Text>Text is: {text}</Text>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '20%',
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor:'blue',
    borderBottomWidth: 2,
    // borderWidth: "50%",
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: '#a59',
    alignItems: 'center',
  }
});
