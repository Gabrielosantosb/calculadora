import React from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

export default ({styles,onClick,...props}) => {

  return (
    <View style={style.buttons}>
      <TouchableHighlight  onPress={onClick}>
        <Text style={styles}>{props.label}</Text>
      </TouchableHighlight>
    </View>
  );

};

const style = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
