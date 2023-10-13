import React from "react";
import Home from "./components/Home";
import GoalDetails from "./components/GoalDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
console.log(Stack);

export default function App () {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#b8a'
          },
          headerTintColor: '#fff'
        }}
      >
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
              title: route.params.text
            }
          }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
    
  )
}