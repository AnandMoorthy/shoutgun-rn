import React from 'react';
import { TextInput } from 'react-native';

const Input = (props) => {
  return (
    <TextInput
      secureTextEntry={props.secureTextEntry}
      placeholder={props.placeholder}
      placeholderTextColor={'#EFF0F1'}
      underlineColorAndroid={'#FFFFFF'}
      value={props.value}
      onChangeText={props.onChangeText}
      style={styles.inputStyle}
      selectionColor={'gray'}
    />
  );
};

const styles = {
  inputStyle: {
    fontSize: 18,
    marginLeft: 15,
    height: 40,
    width: 100,
    lineHeight: 20,
    flex: 1,
    color: '#FFFFFF'
  }
};

export default Input;
