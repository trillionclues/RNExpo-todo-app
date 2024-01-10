import { StatusBar } from 'expo-status-bar'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Button from './components/Button'

const createTwoButtonAlert = () => {
  Alert.alert(
    'Hold On!',
    'Fr! you definitly want to hire a RN dev with 1day experience? 😂',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed!'),
        style: 'cancel',
      },
      {
        text: 'Sure',
        onPress: () => console.log('Sure Pressed!'),
      },
    ]
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to my first React Native app!</Text>
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 2, borderColor: '#ffd33d', borderRadius: 18 },
        ]}
      >
        <Button
          onPress={createTwoButtonAlert}
          label='Hire Me! 🙏'
          style={{ backgroundColor: '#fff' }}
        />
      </View>
      <StatusBar style='auto' />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 150,
    height: 40,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    marginTop: 10,
  },
})
