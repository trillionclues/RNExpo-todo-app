'use client'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import OrderedList from './components/OrderedList'
import TodoInput from './components/TodoInput'
import Button from './components/Button'
import { MaterialIcons } from '@expo/vector-icons'

export default function App() {
  const [todos, setTodos] = useState([])
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const startTodoHandler = () => {
    setIsVisibleModal(true)
  }

  const cancelTodoHandler = () => {
    setIsVisibleModal(false)
  }

  const deleteTodoHandler = (id) => {
    setTodos((selectedTodo) => {
      return selectedTodo.filter((todo) => todo.id !== id)
    })
  }
  const editTodoHandler = (id, newText) => {
    setTodos((prevTodo) => {
      return prevTodo.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    })
    console.log(id, newText)
  }

  return (
    <View style={styles.appContainer}>
      <Button
        label='Add New Todo!'
        style={styles.button}
        onPress={startTodoHandler}
      />
      {isVisibleModal && (
        <TodoInput
          onAddTodo={setTodos}
          visible={isVisibleModal}
          hidden={cancelTodoHandler}
          closeModal={setIsVisibleModal}
        />
      )}
      {todos.length !== 0 && (
        <View style={styles.todoContainer}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              paddingVertical: 10,
              textTransform: 'uppercase',
              fontWeight: 'bold',
            }}
          >
            List of todos...
          </Text>
          <OrderedList
            todos={todos}
            onDelete={deleteTodoHandler}
            onEdit={editTodoHandler}
          />
        </View>
      )}
      {todos.length === 0 && (
        <View style={styles.noTodosContainer}>
          <MaterialIcons name='error-outline' size={70} color='#FF0000' />
          <Text style={styles.noTodosText}>You don't have any todos!</Text>
        </View>
      )}
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: '#F8F4EC',
  },
  button: {
    backgroundColor: '#402B3A',
    color: '#fff',
    padding: 15,
    marginBottom: 10,
    marginTop: 60,
  },
  todoContainer: {
    paddingTop: 20,
  },
  noTodosContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTodosText: {
    marginTop: 10,
    fontSize: 16,
  },
})
