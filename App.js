import React, {useEffect, useState} from "react";
import Home from "./components/Home";
import GoalDetails from "./components/GoalDetails";
import PressableButton from "./components/PressableButton";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebaseSetup'


const Stack = createNativeStackNavigator();
const AuthStack = (
  <>
    <Stack.Screen
      name='Login'
      component={Login}
      options={{title: 'Login'}}
    />
    <Stack.Screen
      name='Signup'
      component={Signup}
      options={{title: 'Signup'}}
    />
  </>
)

const AppStack = (
  <>
    <Stack.Screen 
      name='Home' 
      component={Home}
      options={{
        title: 'All My Goals',
      }}
    />
    <Stack.Screen 
      name='Details' 
      component={GoalDetails}
      options={({ route }) => {
        return {
          title: route.params.text,
        }
      }}
    />
  </>
)


export default function App () {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setIsUserLoggedIn(true);
      }else{
        setIsUserLoggedIn(false);
      }
    });
  }, []);

  return(
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#b8a'
          },
          headerTintColor: '#fff',
        }}
      >
        { isUserLoggedIn ? AppStack : AuthStack }
        
      </Stack.Navigator>
      
    </NavigationContainer>
    
  )
}