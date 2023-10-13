import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Modal, Image } from 'react-native';

const Input = ({changedHandle, modalVisible, cancelHandler}) => {
	const [enteredText, setEnteredText] = useState("");
  
	const changeEnteredTextHandler = (changedText) => {
    setEnteredText(changedText); 
  }

	function confirmHandler(){
		changedHandle(enteredText);
    setEnteredText("");
    cancelHandler(false);
	}

  function cancelHandle(){
    cancelHandler();
    setEnteredText("");
  }

  
  return (
    <Modal visible={modalVisible}>
      <View style={styles.container}>
        {/* <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/2617/2617812.png'}} style={styles.image}/> */}
        <Image source={require('../assets/week2-image.png')} style={{width: 100, height: 100}}/>

        <TextInput style={styles.input} 
                  value={enteredText}
                  onChangeText={changeEnteredTextHandler} 
                  placeholder="useless placeholder"
                  keyboardType="default"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Comfirm" onPress={confirmHandler} disabled={!enteredText}></Button>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelHandle}></Button>
          </View>
          
        </View>
      </View>
    </Modal>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderColor:'blue',
    borderBottomWidth: 2,
    marginTop: 10,
    marginBottom: 15
  },

  image: {
    width: 100,
    height:100,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 10,
    width: '30%'
  }
});
export default Input

