import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function OrderedList({ todos, onDelete, onEdit }) {
  const [editingTodoId, setEditingTodoId] = useState(null)
  const [editedTodoText, setEditedTodoText] = useState('')

  const startEditing = (todoId, todoText) => {
    setEditingTodoId(todoId)
    setEditedTodoText(todoText)
  }

  const stopEditing = () => {
    setEditingTodoId(null)
    setEditedTodoText('')
  }

  const saveEditedTodo = (todoId) => {
    onEdit(todoId, editedTodoText)
    stopEditing()
  }

  return (
    <FlatList
      data={todos}
      renderItem={(todoItem) => {
        const { id, text } = todoItem.item
        const isEditing = editingTodoId === id

        return (
          <View style={styles.todoItem}>
            {isEditing ? (
              <TextInput
                style={[styles.todoText, styles.editableText]}
                value={isEditing ? editedTodoText : text}
                onChangeText={(text) => setEditedTodoText(text)}
                onBlur={stopEditing}
                autoFocus={isEditing}
              />
            ) : (
              <>
                <Text style={styles.listItemNumber}>{todoItem.index + 1}.</Text>
                <Text style={styles.todoText}>{text}</Text>
              </>
            )}

            <View style={styles.iconContainer}>
              {isEditing ? (
                <>
                  <Pressable onPress={() => saveEditedTodo(id)}>
                    <MaterialIcons name='done' size={24} color='#008000' />
                  </Pressable>
                </>
              ) : (
                <>
                  <Pressable
                    onPress={() => startEditing(id, text)}
                    style={(pressData) => [
                      pressData.pressed && styles.pressedItem,
                      styles.itemAlign,
                    ]}
                  >
                    <MaterialIcons name='edit' size={24} color='#008000' />
                  </Pressable>
                </>
              )}
              <Pressable
                onPress={() => onDelete(id)}
                style={(pressData) => [
                  pressData.pressed && styles.pressedItem,
                  styles.itemAlign,
                ]}
              >
                <MaterialIcons name='delete' size={24} color='#FF0000' />
              </Pressable>
            </View>
          </View>
        )
      }}
      style={{ paddingTop: StatusBar.currentHeight }}
      showsVerticalScrollIndicator={false}
      keyExtractor={(todoItem, index) => todoItem.id.toString()}
    />
  )
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    backgroundColor: '#D3E0EA',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 8,
  },
  todoText: {
    fontSize: 22,
    color: '#333',
    paddingRight: 10,
    flex: 1,
    marginRight: 5,
  },
  listItemNumber: {
    fontWeight: 'bold',
    marginRight: 8,
    fontSize: 22,
  },
  pressedItem: {
    opacity: 0.5,
    color: '#ccc',
  },
  itemAlign: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 20,
  },
})
