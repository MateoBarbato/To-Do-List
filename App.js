import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Coder!</Text>
      <Text>Los saludo desde mi proyecto Expo!</Text>
      <Text>Los duendes de tu telefono pusieron este cartelito para ti</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(107, 191, 255, 0.29)',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
