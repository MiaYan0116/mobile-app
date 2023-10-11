import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Modal, Image } from 'react-native';

const Input = ({changedHandle, modalVisible, cancelHandler}) => {
	const [enteredText, setEnteredText] = useState("hi");

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
        
        <Button title="Comfirm" onPress={confirmHandler}></Button>
        <Button title="Cancel" onPress={cancelHandle}></Button>
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
  },

  image: {
    width: 100,
    height:100,
  }
});
export default Input

