import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// import { Container } from './styles';

export default (props) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {props.value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'gray',
    alignItems: 'flex-end',
  },
  displayValue: {
    color: 'black',
    fontSize: 40,
  },
});
