
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    fontSize: windowWidth < 400 ? 20: 25,
    fontWeight: "bold",
    padding: 5,
  }
})


export default Header
