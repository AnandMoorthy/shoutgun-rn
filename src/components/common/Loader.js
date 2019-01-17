import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
// import { Bubbles } from 'react-native-loader';
import { connect } from 'react-redux';

class Loader extends Component {
  render() {
    if (this.props.boot_loader === true) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#F05F40" />
        </View>
      );
    } else {
      return (null);
    }
  }
}

const styles = {
  loaderContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
};

const MapPropsToState = ({ user }) => {
  const { boot_loader } = user;
  return { boot_loader };
};

export default connect(MapPropsToState)(Loader);
