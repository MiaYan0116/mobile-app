import React, { useState }from 'react'
import { StyleSheet, Modal, View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import Header from './Header'
import Card from './Card';
import Background from './Background';
import RightScreen from './RightScreen';
import GuessWrongScreen from './guessWrongScreen';


const GuessingGame = ({isVisible, userData, onCancel}) => {
  const userInfo = userData;
	const message = 'Guess a Number Between 10 & 20';
	const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
	const [guessNumber, setGuessNumber] = useState('');
	const [times, setTimes] = useState(0);
	const [rightScreen, setRightScreen] = useState(false);
	const [wrongScreen, setWrongScreen] = useState(false);

	function generateRandomNumber() {
    return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  }

	console.log(randomNumber);

	function guessHandler(guessNumber){
		setGuessNumber(guessNumber);
		console.log(guessNumber);
	}

	function reset(){
		setGuessNumber('');
		setRandomNumber(generateRandomNumber());
		setRightScreen(false);
		setTimes(0);
		setWrongScreen(false);
	}

	function tryAgain(){
		setGuessNumber('');
		setRightScreen(false);
		setWrongScreen(false);
	}

	function confirmHandler(){
		const guess = parseInt(guessNumber); 
		const newTimes = times + 1; 
  	setTimes(newTimes);
		if(guess === randomNumber){
			setGuessNumber('');
			setRightScreen(true);
		}else{
			setWrongScreen(true);
		}
	}


	return (    
				<Modal visible={isVisible} animationType='none' transparent={false}>
					<Background/>
					<TouchableOpacity style={styles.LogoutButtonContainer} onPress={onCancel}>
						<Text style={styles.LogoutButton}>Logout</Text>
					</TouchableOpacity>
					<Header name={message}/>
						<Card>
							<View>
								<Text style={styles.title}>Enter a Number</Text>
							</View>
							<View style={styles.input}>
								<TextInput keyboardType="numeric" value={guessNumber} onChangeText={guessHandler}/>
							</View>
							<View style={styles.buttonContainer}>
								<Button title='Reset' onPress={reset}/>
								<Button title='Confirm' onPress={confirmHandler}/>
							</View>
						</Card>
						<RightScreen isVisible={rightScreen} numberOfGuess={times} onNewGame={reset}/>
						<GuessWrongScreen isVisible={wrongScreen} onTryAgain={tryAgain} onCancel={onCancel}/>
				</Modal>
  )
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		color: 'purple',
		marginTop: 20,
		marginBottom: 10,
		textAlign: 'center',
	},
	input: {
  	borderBottomColor: "purple",
  	borderBottomWidth: 2,
		width: '15%',
		alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
	LogoutButtonContainer:{
		marginTop: 50,
		marginRight: 10,
		alignSelf: 'flex-end',
	},
	LogoutButton: {
		color: 'blue',
		fontSize: 17
	}
})
export default GuessingGame
