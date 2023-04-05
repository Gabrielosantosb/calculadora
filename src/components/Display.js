// import React from 'react';
// import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// // import { Container } from './styles';

// export default (props) => {
//   return (
//     <View style={styles.display}>
//       <Text style={styles.displayValue} numberOfLines={1}>
//         {props.value}
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   display: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: 'gray',
//     alignItems: 'flex-end',
//   },
//   displayValue: {
//     color: 'black',
//     fontSize: 40,
//   },
// });

import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'black',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 60,
        color: 'white',
    }
})

export default props => 
    <View style={styles.display}>
        <Text style={styles.displayValue}
            numberOfLines={1}>{props.value}</Text>
    </View>
