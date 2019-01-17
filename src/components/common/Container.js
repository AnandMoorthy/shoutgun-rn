import React from 'react';
import { View } from 'react-native';

const Container = (props) => {
  return (
    <View style={styles.containerStyle} >
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 13,
    marginRight: 13,
    marginTop: 20
  }
};
export default Container;
