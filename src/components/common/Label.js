import React from 'react';
import { Text } from 'react-native';

const Label = (props) => {
  return (
    <Text style={styles.labelStyle}>{props.title}</Text>
  );
};

const styles = {
  labelStyle: {
    marginLeft: 10,
    fontSize: 20,
    color: '#fff',
  }
};

export default Label;
