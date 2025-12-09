import { StyleSheet, View, Text } from 'react-native';
import MyButton from './components/MyButton';

function App() {
  return <MyButton buttonText="Press"></MyButton>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
