import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>


      <Link style={styles.link} href="/">Back Home</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    },
    link: {
        marginVertical:10,
        borderBottomWidth: 1
    }
})