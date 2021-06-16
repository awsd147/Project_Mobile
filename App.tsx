
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 1
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"

  }
});
function App () {
  let a = 'henry'
  a='tuan'
  return (
    <View style={styles.container}>
      <Text>Hello1</Text>
      <Text onPress={() => console.log('abc')}>click me</Text>
    </View>
  )
}

export default App;
