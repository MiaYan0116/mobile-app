import { Alert, View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react'
import PressableButton from './PressableButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseSetup'

const Profile = () => {

  return (
    <View>
			<Text>{auth.currentUser.email}</Text>
			<Text>{auth.currentUser.uid}</Text>
    </View>
  );
}


export default Profile;