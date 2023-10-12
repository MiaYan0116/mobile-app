
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
    marginTop: 30,
    marginBottom: 10,
  }
})


export default Header
