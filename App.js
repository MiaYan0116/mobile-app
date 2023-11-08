import React from "react";
import { Button } from 'react-native';
import Home from "./components/Home";
import GoalDetails from "./components/GoalDetails";
import PressableButton from "./components/PressableButton";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Signup from "./components/Signup";


const Stack = createNativeStackNavigator();

export default function App () {
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
      </Stack.Navigator>
      
    </NavigationContainer>
    
  )
}