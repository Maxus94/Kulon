import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const Header = () => <View style={styles.container}></View>;

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  gradient: {
    flex: 1,
  },
});

export default Header;
