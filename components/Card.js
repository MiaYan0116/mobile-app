import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, View, Text} from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.card}>
			<View style={styles.content}>
				{props.children}
			</View>
    </View>
  )
}

const styles = StyleSheet.create({
	card: {
		marginTop: 30,
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 140,
		backgroundColor: '#dcdcdc',
		borderRadius: 10,
		justifyContent: "center",
	},
	
});

export default Card
