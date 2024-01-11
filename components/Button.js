import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

const Button = ({ onPress, label, style }) => (
  <Pressable style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
})

export default Button
