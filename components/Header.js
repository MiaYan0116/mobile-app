import {  Text, View, StyleSheet } from 'react-native';
import React from 'react'

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    color: 'blue',
    marginTop: 60,
    fontSize: 25,
    fontWeight: 'bold'
  },
});

export default Header
