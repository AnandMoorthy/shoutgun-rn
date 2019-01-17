import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
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
      height: 40,
      borderColor: '#fff',
      marginLeft: 80,
      marginRight: 80,
      marginTop: 10
  },
  TextStyle: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#fff',
    paddingTop: 5
  }
};

export default Button;
