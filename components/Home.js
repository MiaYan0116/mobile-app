import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, FlatList} from 'react-native';
import Header from './Header'
import { useState, useEffect } from 'react';
import Input from './Input';
import GoalItem from './GoalItem';
import { deleteFromDB, writeToDB } from '../firebase/firestoreHelper';
import { QuerySnapshot, collection, onSnapshot, query } from 'firebase/firestore';
import { database } from '../firebase/firebaseSetUp';



export default function Home({ navigation }) {
  const name = "Mia's App";
  const [goals, setGoals] = useState([])
  const [text, setText] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function generateRandomNumber(){
    return Math.floor(Math.random() * 1000001);
  }

  useEffect(() => {
    onSnapshot(collection(database, "goals"), (querySnapshot) => {
      if (!querySnapshot.empty) {
        let newArray = [];
        // use a for loop to call .data() on each item of querySnapshot.docs
        querySnapshot.docs.forEach((docSnap) => {
          newArray.push({ ...docSnap.data(), id: docSnap.id });
        });
        // This also works, because .forEach method of querysnapshot enumerated all the documentsnapshots in it
        // querySnapshot.forEach((docSnap) => {
        //   newArray.push(docSnap.data());
        // });
        // for (let i = 0; i < querySnapshot.docs.length; i++) {
        //   newArray.push(querySnapshot.docs[i].data());
        // }
        setGoals(newArray);
      }
    });
  }, []);

  function changeDataHandler(data){
    const goal = {
      text: data,
    }
		setText(data);
    setGoals((prevGoals) => {
      return [...prevGoals, goal];
    }, goal);
    writeToDB(goal);
    setModalVisible(false);
    
	}

  function addAGoalHandler(){
    setModalVisible(true);
  }

  function cancelHandler(){
    setModalVisible(false);
  }

  function goalPressHandler(goal){
		navigation.navigate('Details', goal);
  }

  function goalDeleteHandler(deleteId){
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => {
        return goal.id != deleteId;
      })
    })
    deleteFromDB("deleteId", deleteId);
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
          renderItem={({ item }) => {
            // return(
            //   <Text style={styles.text} key={item.id}>{item.text}</Text>
            // )
            return(
              <GoalItem 
                goal={item} 
                deleteHandler={() => goalDeleteHandler(item.id)}
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