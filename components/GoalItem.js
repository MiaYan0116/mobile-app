import {View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from 'react';
import PressableButton from './PressableButton';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";

const GoalItem = ({goal, deleteHandler, pressHandler}) => {
	function deletePressed(){
		deleteHandler(goal.id);
	}

	const navigation = useNavigation();

	function goalPressed(){
		pressHandler(goal);
	}

	return(
		<PressableButton 
			pressedFunction={goalPressed}
			defaultStyle={styles.goalContainer}
			pressedStyle={styles.goalPressed}
		>
			<Text style={styles.text}>{goal.text}</Text>
			<PressableButton
				pressedFunction={deletePressed}
				defaultStyle={{backgroundColor: '#aaa', padding: 5}}
				pressedStyle={{backgroundColor: '#bbb', opacity: 0.6}}
			>
				<Octicons name='trash' size={24} color='black'/>
			</PressableButton>
		</PressableButton>
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
	goalPressed:{
		backgroundColor: '#add',
		opacity: 0.5,
	},
});

export default GoalItem;