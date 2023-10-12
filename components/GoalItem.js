import {View, Text, StyleSheet } from "react-native";
import React from 'react';

// export default function GoalItem ({goal}) {
//   return(
//     <View>
// 			<Text style={styles.text}>{goal.text}</Text>
// 		</View>
//   );
// }

const GoalItem = ({goal}) => {
	return(
		<View>
			<Text style={styles.text}>{goal.text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
    color: '#a09',
    borderRadius: 5,
    marginBottom: 20,
    padding: 5,
    fontSize: 30,
    backgroundColor: '#aaa',
  }
});

export default GoalItem;