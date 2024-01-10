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
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
})

export default Button
