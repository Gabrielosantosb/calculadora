import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';
import { useState } from 'react';

const initialState = {
  // displayValue : "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  pointer: 0,
};

export default function App() {
  const [displayValue, setDisplayValue] = useState(1);
  state = { ...initialState };

  addDigit = (n) => {
    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...initialState.values];
      values[initialState.pointer] = newValue;
      setDisplayValue(values);
      console.log('oi');
      
      // }

      // if (n === '.' && this.state.displayValue.includes('.')) {
      //   return;
      // }
      // // Cleardisplay recebe SE for igual a zero/ ou for verdadeiro
      // const clearDisplay =  this.state.displayValue === '0' || this.state.displayValue;
      // const currentValue = clearDisplay ? '' : this.state.displayValue;
      // const displayValue = currentValue + n;

      // // DisplayValue será o valor corrente,
      // this.setDisplayValue({ displayValue, clearDisplay: false });
    }
  };

  clearMemory = () => {
    setDisplayValue(0);
  };

  setOperation = (operation) => {};

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button
          label={'AC'}
          styles={styles.tripleButton}
          onClick={this.clearMemory}
        />
        <Button
          label={'/'}
          styles={styles.operationButton}
          onClick={this.setOperation}
        />
        <Button label={'7'} styles={styles.button} onClick={this.addDigit} />
        <Button label={'8'} styles={styles.button} onClick={this.addDigit} />
        <Button label={'9'} styles={styles.button} onClick={this.addDigit} />
        <Button
          label={'*'}
          styles={styles.operationButton}
          onClick={this.setOperation}
        />
        <Button label={'4'} styles={styles.button} onClick={this.addDigit} />
        <Button label={'5'} styles={styles.button} onClick={this.addDigit} />
        <Button label={'6'} styles={styles.button} onClick={this.addDigit} />
        <Button
          label={'-'}
          styles={styles.operationButton}
          onClick={this.setOperation}
        />
        <Button label={'1'} styles={styles.button} onClick={this.addDigit} />
        <Button label={'2'} styles={styles.button} onClick={this.addDigit} />
        <Button label={'3'} styles={styles.button} onClick={this.addDigit} />
        <Button
          label={'+'}
          styles={styles.operationButton}
          onClick={this.setOperation}
        />
        <Button
          label={'0'}
          styles={styles.doubleButton}
          onClick={this.addDigit}
        />
        <Button
          label={'.'}
          styles={styles.button}
          onClick={this.setOperation}
        />
        <Button
          label={'='}
          styles={styles.operationButton}
          onClick={this.setOperation}
        />
      </View>
    </View>
  );
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
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  doubleButton: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: (Dimensions.get('window').width / 4) * 2,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },

  tripleButton: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: (Dimensions.get('window').width / 4) * 3,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  operationButton: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: 'orange',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
});
