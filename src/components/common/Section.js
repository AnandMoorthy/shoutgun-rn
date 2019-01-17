import React from 'react';
import { View } from 'react-native';

const Section = (props) => {
  return (
    <View style={styles.sectionStyle} >
      {props.children}
    </View>
  );
};

const styles = {
  sectionStyle: {
    borderBottomWidth: 0,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default Section;
