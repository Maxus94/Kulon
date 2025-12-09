// import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// const MyButton = ({ buttonText }) => (
//   <TouchableOpacity style={styles.myButton}>
//     <Text style={styles.myButton}>{buttonText}</Text>
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   myButton: {
//     height: 50,
//     width: '80%',
//     borderRadius: 50,
//     backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonTitle: {
//     textAlign: 'center',
//   },
// });

// export default MyButton;

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const MyButton = ({ buttonText }) => (
  <TouchableOpacity style={styles.myButton}>
    <Text style={styles.buttonTitle}>{buttonText}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  myButton: {
    height: 50,
    width: '80%',
    borderRadius: 50,
    backgroundColor: 'red',
    alignItems: 'center', // горизонталь
    justifyContent: 'center', // вертикаль
  },
  buttonTitle: {
    color: '#fff', // (по желанию)
    fontSize: 16, // (по желанию)
    textAlign: 'center',
  },
});

export default MyButton;
