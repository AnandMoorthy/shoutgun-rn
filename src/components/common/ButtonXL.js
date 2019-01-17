import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonXL = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
        <Text style={styles.TextStyle}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
      borderWidth: 1,
      borderRadius: 4,
      backgroundColor: '#FFFFFF',
      borderColor: '#fff',
      height: 100,
      width: 100
  },
  TextStyle: {
    alignSelf: 'center',
    color: '#9C9C9C',
    fontSize: 25,
    paddingTop: 30
  }
};

export default ButtonXL;
