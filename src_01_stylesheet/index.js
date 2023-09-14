import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


const index = () => {
  return(
      <View>
        <Text style={[styles.red, styles.fontBold]}>The awesome App</Text>
      </View>
    )
}

export default index


const styles = StyleSheet.create({
  red:{
    color: 'blue'
  },
  fontBold:{
    fontSize: 20
  },
})

