import React from 'react'
import { View, Text, Button } from 'react-native'

const GoalDetails = ({ route }) => {
  return (
    <View>
      <Text>{route.params.id}, {route.params.text}</Text>
			{/* <Button title='More' onPress= {() => navigation.push('Details')}/> */}
    </View>
  )
}

export default GoalDetails
