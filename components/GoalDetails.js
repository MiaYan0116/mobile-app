import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import PressableButton from './PressableButton';
import GoalUsers from './GoalUsers';


const GoalDetails = ({ navigation, route }) => {
	const [isWarned, setIsWarned] = useState(false);
	// use navigation.setOptions to modify isWarned
	useEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<PressableButton
						pressedFunction={() => {
							console.log("warning");
							setIsWarned(true);
						}}
						defaultStyle={{backgroundColor: '#b8a', padding: 5}}
						pressedStyle={{opacity: 0.6}}
					>
						<Entypo name='warning' size={24} color='black'/>
					</PressableButton>
				)
			}
		})
	}, [navigation])
	
  return (
    <View>
			{route.params ? (
				<Text>{route.params.id}, {route.params.text}</Text>
			) : (
				<Text>No extra data</Text>
			)}
      
			{isWarned && 
				<Button title='More' onPress= {() => navigation.navigate('Details')}/>
			}
			<GoalUsers/>
    </View>
  )
}

export default GoalDetails
