import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function Home(props) {
    const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the World of Books!</Text>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('BooksList')}>
        <Text style={styles.buttonText}>Add Your Book Names</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('RecommendBooks')}>
        <Text style={styles.buttonText}>Our Recommended Books</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('AboutScreen')}>
        <Text style={styles.buttonText}>Know about us!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebdaf7'
  },
  text: {
    color: '#black',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    backgroundColor: '#b167e6',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: 'black'
  }
})

export default Home