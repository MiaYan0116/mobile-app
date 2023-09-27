import React from 'react'
import { StyleSheet, Modal, View, Text, Button } from 'react-native';
import Card from './Card';
import Background from './Background';

const ConfirmCard = ({isVisible, userData, onCancel, onContinue}) => {
  return (
    
      <Modal visible={isVisible} animationType='slide' transparent={false}>
        <Background/>
        <View style={styles.confirmContainer}>
          <Card>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Hello {userData.name}!</Text>
              <Text style={styles.infoText}>Please confirm the following information is correct by pressing the continue button</Text>
              <View>
                <Text style={[styles.infoText, {color: 'red'}]}>{userData.emailAddress}</Text>
                <Text style={[styles.infoText, {color: 'red'}]}>{userData.phoneNumber}</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button title='Go Back' onPress={onCancel}/>
              <Button title='Continue' onPress={onContinue}/>
            </View>
          </Card>
        </View>
        
      </Modal>
    
  )
}

const styles = StyleSheet.create({
  confirmContainer: {
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
  }
})
  


export default ConfirmCard
