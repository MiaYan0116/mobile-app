import React from 'react'
import { StyleSheet, Modal, View, Text, Button, Image } from 'react-native';
import Card from './Card';
import Background from './Background';

const RightScreen = ({isVisible, onNewGame, numberOfGuess}) => {
    return (
        <Modal visible={isVisible} animationType='slide' transparent={false}>
          <Background/>
          <View style={styles.container}>
            <Card>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>You guessed correct!!</Text>
                <Text style={styles.infoText}>Number of guesses: {numberOfGuess}</Text>
              </View>
              <Image
                source={require('../assets/congrats.png')}
                style={styles.image}
            	/>
              <View style={styles.buttonContainer}>
                <Button title='New Game' onPress={onNewGame}/>
              </View>
            </Card>
          </View>
          
        </Modal>
      
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    infoContainer: {
      margin: 15,
    },
    infoText: {
      fontSize: 20,
      color: 'purple',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      margin: 15,
    },
		image: {
			width: 100,
			height: 100,
			alignSelf: 'center', // 水平居中			
		}
  })
    
  
  
  export default RightScreen