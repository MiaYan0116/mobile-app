import React from 'react'
import { StyleSheet, Modal, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import Card from './Card';
import Background from './Background';

const GuessWrongScreen = ({isVisible, onTryAgain, onCancel}) => {
    return (
        <Modal visible={isVisible} animationType='slide' transparent={false}>
          <Background/>
					<TouchableOpacity style={styles.LogoutButtonContainer} onPress={onCancel}>
						<Text style={styles.LogoutButton}>Logout</Text>
					</TouchableOpacity>
          <View style={styles.container}>
            <Card>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>You did not guess correct</Text>
              </View>
              <Image
                source={require('../assets/sadFace.png')}
                style={styles.image}
            	/>
              <View style={styles.buttonContainer}>
                <Button title='Try Again' onPress={onTryAgain}/>
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
			alignSelf: 'center', 			
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
    
  
  
  export default GuessWrongScreen