import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  StatusBar,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import { retrieveUser } from '../actions';


class BootComponent extends Component {

  componentWillMount() {
    this.getUser();
  }

  async getUser() {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        this.props.retrieveUser(value);
      }
    } catch (error) {
      console.log('Signin Check Error');
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <StatusBar backgroundColor="#3AA4D4" barStyle="light-content" />
        <View style={styles.logoStyle}>
          <Text style={styles.logoTextSytle}>
            ShoutGun
          </Text>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#3AA4D4'
  },
  logoStyle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  logoTextSytle: {
    fontSize: 25,
    color: '#FFFFFF'
  },
  buttonStyle: {
    flex: 1,

  }
};

const MapPropsToState = ({ user }) => {
  const { email, password } = user;
  return { email, password };
};

export default connect(MapPropsToState, { retrieveUser })(BootComponent);

// export default BootComponent;
