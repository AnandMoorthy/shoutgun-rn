import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ShoutButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
        <Icon name={'chevron-right'} size={30} color="#01a699" />
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.2)',
      backgroundColor: '#fff',
      borderRadius: 100,
      width: 100,
      height: 100
  },
  TextStyle: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#fff',
    paddingTop: 5
  }
};

export default ShoutButton;
