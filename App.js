import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, FlatList} from 'react-native';
import Header from './components/Header'
import { useState } from 'react';
import Input from './components/Input';
import GoalItem from './components/GoalItem'


export default function App() {
  const name = "Mia's App";
  const [goals, setGoals] = useState([])
  const [text, setText] = useState("")
  const [modalVisible, setModalVisible] = useState(false)


  function generateRandomNumber(){
    return Math.floor(Math.random() * 1000001);
  }

  function changeDataHandler(data){
    const randomNumber = generateRandomNumber();
    const goal = {
      id: randomNumber,
      text: data,
    }
		setText(data);
    setGoals((prevGoals) => {
      return [...prevGoals, goal];
    }, goal);
    setModalVisible(false);
	}

  function addAGoalHandler(){
    setModalVisible(true);
  }

  function cancelHandler(){
    setModalVisible(false);
  }

  function goalPressHandler(pressId){
    console.log('I am pressing', pressId);
  }

  function goalDeleteHandler(deleteId){
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => {
        return goal.id != deleteId;
      })
    })
  }


  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Open up App.js to start working on {name}!</Text> */}
      {/* use props to pass values from parents' component to Header */}
      <View style={styles.topContainer}>
        <Header name={name}/>
        <StatusBar style="auto" />
        <Input 
          changedHandle={changeDataHandler} 
          modalVisible={modalVisible} 
          cancelHandler={cancelHandler} 
        />
        <Button title="Add a goal" onPress={addAGoalHandler}></Button>
      </View>
      <View style={styles.bottomContainer}>
        {/* <ScrollView 
          bounces={false}
          contentContainerStyle={styles.contentContainerStyle}
        >
          {goals.map((goal) => {
            return(
              <View key={goal.id}>
                <Text style={styles.text}>{goal.text}</Text>
              </View>
            )
          })}      
        </ScrollView> */}
        <FlatList 
          contentContainerStyle={styles.contentContainerStyle}
          data={goals}
          renderItem={({item}) => {
            // return(
            //   <Text style={styles.text} key={item.id}>{item.text}</Text>
            // )
            return(
              <GoalItem 
                goal={item} 
                deleteHandler={goalDeleteHandler}
                pressHandler={goalPressHandler}
            />
          )
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: '#dcd',
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
  
});
