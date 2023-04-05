// import { StatusBar } from 'expo-status-bar';
// import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import Button from './src/components/Button';
// import Display from './src/components/Display';
// import { useState } from 'react';

// const initialState = {
//   // displayValue : "0",
//   clearDisplay: false,
//   operation: null,
//   values: [0, 0],
//   pointer: 0,
// };

// export default function App() {
//   const [displayValue, setDisplayValue] = useState(1);
//   state = { ...initialState };

//   addDigit = (n) => {
//     if (n !== '.') {
//       const newValue = parseFloat(displayValue);
//       const values = [...initialState.values];
//       values[initialState.pointer] = newValue;
//       setDisplayValue(values);
//       console.log('oi');

//       // }

//       // if (n === '.' && this.state.displayValue.includes('.')) {
//       //   return;
//       // }
//       // // Cleardisplay recebe SE for igual a zero/ ou for verdadeiro
//       // const clearDisplay =  this.state.displayValue === '0' || this.state.displayValue;
//       // const pointerValue = clearDisplay ? '' : this.state.displayValue;
//       // const displayValue = pointerValue + n;

//       // // DisplayValue será o valor corrente,
//       // this.setDisplayValue({ displayValue, clearDisplay: false });
//     }
//   };

//   clearMemory = () => {
//     setDisplayValue(0);
//   };

//   setOperation = (operation) => {};

//   return (
//     <View style={styles.container}>
//       <Display value={displayValue} />
//       <View style={styles.buttons}>
//         <Button
//           label={'AC'}
//           styles={styles.tripleButton}
//           onClick={this.clearMemory}
//         />
//         <Button
//           label={'/'}
//           styles={styles.operationButton}
//           onClick={this.setOperation}
//         />
//         <Button label={'7'} styles={styles.button} onClick={this.addDigit} />
//         <Button label={'8'} styles={styles.button} onClick={this.addDigit} />
//         <Button label={'9'} styles={styles.button} onClick={this.addDigit} />
//         <Button
//           label={'*'}
//           styles={styles.operationButton}
//           onClick={this.setOperation}
//         />
//         <Button label={'4'} styles={styles.button} onClick={this.addDigit} />
//         <Button label={'5'} styles={styles.button} onClick={this.addDigit} />
//         <Button label={'6'} styles={styles.button} onClick={this.addDigit} />
//         <Button
//           label={'-'}
//           styles={styles.operationButton}
//           onClick={this.setOperation}
//         />
//         <Button label={'1'} styles={styles.button} onClick={this.addDigit} />
//         <Button label={'2'} styles={styles.button} onClick={this.addDigit} />
//         <Button label={'3'} styles={styles.button} onClick={this.addDigit} />
//         <Button
//           label={'+'}
//           styles={styles.operationButton}
//           onClick={this.setOperation}
//         />
//         <Button
//           label={'0'}
//           styles={styles.doubleButton}
//           onClick={this.addDigit}
//         />
//         <Button
//           label={'.'}
//           styles={styles.button}
//           onClick={this.setOperation}
//         />
//         <Button
//           label={'='}
//           styles={styles.operationButton}
//           onClick={this.setOperation}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   buttons: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   button: {
//     fontSize: 40,
//     height: Dimensions.get('window').width / 4,
//     width: Dimensions.get('window').width / 4,
//     padding: 20,
//     backgroundColor: '#f0f0f0',
//     textAlign: 'center',
//     borderWidth: 1,
//     borderColor: '#888',
//   },
//   buttons: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   doubleButton: {
//     fontSize: 40,
//     height: Dimensions.get('window').width / 4,
//     width: (Dimensions.get('window').width / 4) * 2,
//     padding: 20,
//     backgroundColor: '#f0f0f0',
//     textAlign: 'center',
//     borderWidth: 1,
//     borderColor: '#888',
//   },

//   tripleButton: {
//     fontSize: 40,
//     height: Dimensions.get('window').width / 4,
//     width: (Dimensions.get('window').width / 4) * 3,
//     padding: 20,
//     backgroundColor: '#f0f0f0',
//     textAlign: 'center',
//     borderWidth: 1,
//     borderColor: '#888',
//   },
//   operationButton: {
//     fontSize: 40,
//     height: Dimensions.get('window').width / 4,
//     width: Dimensions.get('window').width / 4,
//     padding: 20,
//     backgroundColor: 'orange',
//     textAlign: 'center',
//     borderWidth: 1,
//     borderColor: '#888',
//   },
// });

import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  pointer: 0,
};

export default class App extends Component {
  state = { ...initialState };

  addDigit = (n) => {
    const clearDisplay =
      this.state.displayValue === '0' || this.state.clearDisplay;

    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
      return;
    }

    const pointerValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = pointerValue + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.pointer] = newValue;
      this.setState({ values });
    }
  };

  clearMemory = () => {
    this.setState({ ...initialState });
  };

  setOperation = (operation) => {
    if (this.state.pointer === 0) {
      this.setState({ operation, pointer: 1, clearDisplay: true });
    } else {
      const equals = operation === '=';
      const values = [...this.state.values];
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      } catch (e) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        pointer: equals ? 0 : 1,
        //clearDisplay: !equals,
        clearDisplay: true,
        values,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label="AC" triple onClick={this.clearMemory} />
          <Button
            label="/"
            operation
            onClick={this.setOperation}
          />
          <Button label="7" onClick={this.addDigit} />
          <Button label="8" onClick={this.addDigit} />
          <Button label="9" onClick={this.addDigit} />
          <Button label="*" operation onClick={this.setOperation} />
          <Button label="4" onClick={this.addDigit} />
          <Button label="5" onClick={this.addDigit} />
          <Button label="6" onClick={this.addDigit} />
          <Button label="-" operation onClick={this.setOperation} />
          <Button label="1" onClick={this.addDigit} />
          <Button label="2" onClick={this.addDigit} />
          <Button label="3" onClick={this.addDigit} />
          <Button label="+" operation onClick={this.setOperation} />
          <Button label="0" double onClick={this.addDigit} />
          <Button label="." onClick={this.addDigit} />
          <Button label="=" operation onClick={this.setOperation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: 'white',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  operationButton: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
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
