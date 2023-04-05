// import React from 'react';
// import {
//   StyleSheet,
//   Dimensions,
//   TouchableHighlight,
//   Text,
//   View,
//   SafeAreaView,
// } from 'react-native';

// export default ({styles,onClick,...props}) => {

//   return (
//     <View style={style.buttons}>
//       <TouchableHighlight  onPress={onClick}>
//         <Text style={styles}>{props.label}</Text>
//       </TouchableHighlight>
//     </View>
//   );

// };

// const style = StyleSheet.create({
//   buttons: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
// });

import React from 'react';
import {View, StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

export default (props) => {
  const stylesButton = [styles.button];
  if (props.double) stylesButton.push(styles.doubleButton);
  if (props.triple) stylesButton.push(styles.tripleButton);
  if (props.operation) stylesButton.push(styles.operationButton);
  return (
    <View>
      <TouchableHighlight onPress={() => props.onClick(props.label)}>
        <Text style={stylesButton}>{props.label}</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: 'white',
    textAlign: 'center',
    borderWidth: 1.5,
    borderColor: 'black',
  },
  operationButton: {
    color: 'white',
    backgroundColor: 'orange',
  },
  doubleButton: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  tripleButton: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});
