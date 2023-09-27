import React from 'react'
import { View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const Background = () => {
  return (
    <LinearGradient
        // Background Linear Gradient
        colors={["#9890e3", "#b1f4cf"]}
        style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
    container:{
			flex: 1,
			paddingVertical: 20,
			position: "absolute",
			left: 0,
			right: 0,
			top: 0,
			bottom: -180
    }
})
export default Background
