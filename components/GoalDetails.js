import React from 'react'
import { View, Text, Button } from 'react-native'

const GoalDetails = ({ navigation, route }) => {
  return (
    <View>
			{route.params ? (
				<Text>{route.params.id}, {route.params.text}</Text>
			) : (
				<Text>No extra data</Text>
			)}
      
			<Button title='More' onPress= {() => navigation.navigate('Details')}/>
    </View>
  )
}

export default GoalDetails
