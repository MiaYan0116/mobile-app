import React, {useState} from 'react'
import { Text, View, Button, Alert, Image, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export default function ImageManage(){
	const [status, requestPermission] = ImagePicker.useCameraPermissions();
	const [imageUri, setImageUri] = useState("");
	// console.log(status);
	const verifyPermission = async () => {
		// first check the status.granted
		// if false, ask for permission: requestPermission
		// check the grant again, if true returns it
		if(status.granted){
			return true;
		}
		const response = await requestPermission();
		return response.granted;
	}
	const takeImageHandler = async () => {
		try {
			const hasPermission = await verifyPermission();
			if(!hasPermission){
				Alert.alert("You need to give access to the camera");
			}	
			const result = await ImagePicker.launchCameraAsync({
				allowsEditing: true,
			});
			console.log(result);
			setImageUri(result.assets[0].uri)
		}
		catch (err) {console.log(err)}		
	};

  return (
    <View>
      <Button onPress={takeImageHandler} title="Take an Image"/> 
			{ imageUri && <Image source={{ uri: imageUri }} style={styles.image}/> }
		</View>
  )
}
const styles = StyleSheet.create({
	image: {
    width: 100,
    height:100,
  },
})

