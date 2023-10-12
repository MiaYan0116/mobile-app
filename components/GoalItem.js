import {View, Text, StyleSheet, Button } from "react-native";
import React from 'react';

// export default function GoalItem ({goal}) {
//   return(
//     <View>
// 			<Text style={styles.text}>{goal.text}</Text>
// 		</View>
//   );
// }

const GoalItem = ({goal, deleteHandler}) => {
	function deletePressed(){
		deleteHandler(goal.id);
	}

	return(
		<View style={styles.goalContainer}>
			<Text style={styles.text}>{goal.text}</Text>
			<Button color='black' title='X' onPress={deletePressed}/>
		</View>
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