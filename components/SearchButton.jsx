import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

const SearchButton = () => (
  <TouchableOpacity style={styles.searchButton}>
    <Image source={require('../icons/Search.png')} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  searchButton: {
    height: 42,
    width: 56,
    borderRadius: 50,
    backgroundColor: '#ffddaa',
    alignItems: 'center', // горизонталь
    justifyContent: 'center', // вертикаль
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 24,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default SearchButton;
