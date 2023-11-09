import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Modal, Image } from 'react-native';
import ImageManager from './ImageManager';

const Input = ({changedHandler, modalVisible, cancelHandler}) => {
	const [enteredText, setEnteredText] = useState("");
  const [takenImageUri, setTakenImageUri] = useState("");

	const changeEnteredTextHandler = (changedText) => {
    setEnteredText(changedText); 
  }

	function confirmHandler(){
		changedHandler(enteredText);
    setEnteredText("");
    cancelHandler(false);
	}

  function cancelHandle(){
    cancelHandler();
    setEnteredText("");
  }

  function getImageUri(uri){

  }

  
  return (
    <Modal visible={modalVisible}>
      <View style={styles.container}>
      <Image source={{uri: "https://7f8db205ecbd3cb05352-db579bf47a181634e7561a7d0e82a26f.ssl.cf5.rackcdn.com/2018/08/target-market.jpg"}} style={{width: 100, height: 100}}/>
      <Image source={require('../assets/goal.png')} style={{width: 100, height: 100}}/>

        <TextInput style={styles.input} 
                  value={enteredText}
                  onChangeText={changeEnteredTextHandler} 
                  placeholder="useless placeholder"
                  keyboardType="default"
        />
        <ImageManager/>
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