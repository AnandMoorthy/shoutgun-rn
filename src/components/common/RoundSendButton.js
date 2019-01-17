import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RoundSendButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
        <Icon name={'send'} size={25} color="#3AA4D4" />
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 100,
      width: 45,
      height: 45,
      marginTop: 8,
      marginRight: 5,
  },
  TextStyle: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#fff',
    paddingTop: 5
  }
};

export default RoundSendButton;
