import React from 'react'
import { View, Text } from 'react-native'

const GoalDetails = (goal) => {
  return (
    <View>
      <Text>Details: {goal.id}, {goal.text}</Text>
    </View>
  )
}

export default GoalDetails
