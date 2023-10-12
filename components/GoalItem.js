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
			style={styles.goalContainer} 
			onPress={goalPressed}
			android_ripple={{color: '#add'}}
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
  }
});

export default GoalItem;