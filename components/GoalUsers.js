import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

const GoalUsers = () => {
    useEffect(() => {
			const fetchUsers = async () => {
				try {
					const response = await fetch('https://jsonplaceholder.typicode.com/users');
      		console.log(await response.json());
				} catch (error) {
					console.error('error occured', error);
				}
			}
      fetchUsers();
    })

    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    ) 
}

export default GoalUsers
