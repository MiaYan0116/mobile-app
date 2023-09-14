import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native';

const Input = ({changedHandler}) => {
	const [enteredText, setEnteredText] = useState("hi");

	const changeEnteredTextHandler = (changedText) => {
    setEnteredText(changedText);
  }

	function confirmHandler(){
		changedHandler(enteredText);
	}

  return (
    <View>
      <TextInput style={styles.input} 
                value={enteredText}
                onChangeText={changeEnteredTextHandler} 
                placeholder="useless placeholder"
                keyboardType="text"
    	/>
			<Button title="Comfirm" onPress={confirmHandler}></Button>
    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderColor:'blue',
    borderBottomWidth: 2,
  }
});
export default Input

