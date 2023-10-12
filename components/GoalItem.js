import {View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from 'react';

// export default function GoalItem ({goal}) {
//   return(
//     <View>
// 			<Text style={styles.text}>{goal.text}</Text>
// 		</View>
//   );
// }

const GoalItem = ({goal, deleteHandler, pressHandler}) => {
	function deletePressed(){
		deleteHandler(goal.id);
	}

	function goalPressed(){
		pressHandler(goal.id)
	}

	return(

		<Pressable 
			onPress={goalPressed}
			android_ripple={{color: '#f00'}}
			style={({pressed}) => {
				return [styles.goalContainer, 
					{
						backgroundColor: pressed ? '#add': '#aaa',
						opacity: pressed ? 0.5: 1,
					}
				]
			}}
		>
			<Text style={styles.text}>{goal.text}</Text>
			<Button color='black' title='X' onPress={deletePressed}/>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	goalContainer:{
		flexDirection: 'row',
		backgroundColor: '#aaa',
		marginBottom: 20,
		borderRadius: 5,
		alignItems: 'center'
	},
	text: {
    color: '#a09',
    padding: 5,
    fontSize: 30,
  },
	pressed:{},
});

export default GoalItem;