import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SearchButton from './SearchButton';

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Пошук"
        placeholderTextColor="#cecece"
      />
      <SearchButton></SearchButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // расположение элементов в строку
    alignItems: 'center', // вертикальное выравнивание
    borderWidth: 2,
    borderColor: '#464455',
    borderRadius: 50,
    paddingRight: 5,
    paddingLeft: 20,
    height: 50,
    width: '80%',
  },
  input: {
    flex: 1, // TextInput занимает всё доступное место
    fontSize: 16,
  },
});

export default SearchInput;
