import React, { useState } from 'react'
import {
  Dimensions,
  Modal,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native'
import Button from './Button'
import { AntDesign } from '@expo/vector-icons'

const windowsHeight = Dimensions.get('window').height

export default function TodoInput(props) {
  const [enteredText, setEnteredText] = useState('')

  const todoInputHandler = (text) => {
    setEnteredText(text)
  }

  const addTodoHandler = () => {
    if (enteredText !== '') {
      props.onAddTodo((prev) => [
        ...prev,
        { text: enteredText, id: Math.random().toString() },
      ])
      setEnteredText('')
      props.closeModal(false)
    } else {
      alert('Please enter a todo...')
    }
  }

  return (
    <Modal visible={props.visible} transparent={true} animationType='slide'>
      <View style={styles.modalBackground}>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.closeIcon} onPress={props.hidden}>
            <AntDesign name='close' size={24} color='black' />
          </TouchableOpacity>
          <TextInput
            placeholder='Please enter todo...'
            style={styles.textInput}
            value={enteredText}
            onChangeText={todoInputHandler}
          />
          <Button
            onPress={addTodoHandler}
            label='Add Todo'
            style={styles.button}
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  inputContainer: {
    backgroundColor: '#fff',
    paddingBottom: 24,
    borderBottomWidth: 1,
    padding: 20,
    borderColor: '#402B3A',
    height: windowsHeight - 350,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#D3E0EA',
  },
  button: {
    backgroundColor: '#402B3A',
    color: '#fff',
    width: '60%',
    padding: 15,
    alignSelf: 'center',
    borderRadius: 10,
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ccc',
    padding: 5,
    borderRadius: '50%',
  },
})
