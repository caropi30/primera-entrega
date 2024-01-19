import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimerComponente from './src/components/PrimerComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <PrimerComponente />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CC4BC2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
