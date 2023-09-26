import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import Background from './Background';
import Header from './Header'
import Card from './Card';
import InfoCard from './InfoCard';
import ConfirmCard from './ConfirmCard';
import GuessingGame from './GuessingGame';

const StartScreen = () => {
  const [greeting, setGreeting] = useState("Welcome");
	const [currentPage, setCurrentPage] = useState('InfoCard');
	const [isModalVisible, setModalVisible] = useState(false); 
  const [userData, setUserData] = useState({});
	const [showGuessingGame, setShowGuessingGame] = useState(false); // 新增一个状态来控制 Guessing Game 的显示

	function startHandler(userInfo){
		setUserData(userInfo);
		setGreeting("");
		setModalVisible(true);
	}

	const closeModal = () => {
		setGreeting("Welcome");
    setModalVisible(false);
  };

	const closeGuess = () => {
		setGreeting("Welcome");
    setShowGuessingGame(false);
	}

	const continueHandler = () => {
		setGreeting("Welcome");
		setShowGuessingGame(true);
    closeModal();
	}

  return (
    <View style={styles.container}>
			<Background />
			<Header name={greeting}/>
			<View style={styles.container}>
				<Card>
					<InfoCard startHandler={startHandler}/>
				</Card>
				<ConfirmCard
					isVisible={isModalVisible}
					userData={userData}
					onCancel={closeModal}
					onContinue={continueHandler}
				/>
			</View>
			<GuessingGame onCancel={closeGuess} isVisible={showGuessingGame}/>
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'center'
	},
})

export default StartScreen
