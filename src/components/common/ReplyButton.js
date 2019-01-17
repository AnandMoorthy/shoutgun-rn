import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ReplyButton = (props) => {
  console.log(props);
  if (props.reply === true) {
    return (
      <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
          <Text style={styles.TextStyle}>{props.name}</Text>
      </TouchableOpacity>
    );
  } else {
    return (null);
  }
};

const styles = {
  buttonStyle: {
      marginTop: 10
  },
  TextStyle: {
    color: '#fff',
    fontSize: 15,
  }
};

export default ReplyButton;
