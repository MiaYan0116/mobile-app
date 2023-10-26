
import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native';
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = (props) => {
  const { width, height } = useWindowDimensions();
  let fontSizeDynamic = 20;
  const dynamicFontSize = () => {
    return width < 400 ? 20: 25;
  }
  return (
    <View style={styles.headerView}>
      <Text style={{fontSize: dynamicFontSize()} }>Welcome to {props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerView: {
    color: "darkslateblue",
    borderColor: "darkslateblue",
    borderWidth: 3,
    fontWeight: "bold",
    padding: 5,
  }
})


export default Header
