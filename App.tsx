import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MyButton from './components/MyButton';
import SearchButton from './components/SearchButton';
import SearchInput from './components/SearchInput';
import Header from './components/Header';

function App() {
  return (
    <ScrollView>
      <View
        style={{
          marginTop: 60,
          alignItems: 'center',
          gap: 16,
        }}
      >
        <MyButton buttonText="PresS"></MyButton>
        <SearchButton></SearchButton>
        <SearchInput></SearchInput>
        <Header></Header>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
