
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'

const Header = (props) => {
  return (
    <View style={styles.headerView}>
      <Text>Welcome to {props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerView: {
    color: "darkslateblue",
    borderColor: "darkslateblue",
    borderWidth: 3,
    fontSize: 25,
    fontWeight: "bold",
    padding: 5,
  }
})


export default Header
