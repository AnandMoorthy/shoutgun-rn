import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  Text,
  View,
  StatusBar
} from 'react-native';
import {
  ButtonXL
} from './common';
import { hear, shout } from '../actions';


class HomeComponent extends Component {

  hearAPI() {
    this.props.hear('034e37c1008360250aa6a6251a6c49', 'USER4CT0');
  }

  shoutAPI() {
    this.props.shout('034e37c1008360250aa6a6251a6c49', 'USER4CT0');
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <StatusBar backgroundColor="#3AA4D4" barStyle="light-content" />
        <View style={styles.logoStyle}>
          <Text style={styles.logoTextSytle}>
            Welcome!
          </Text>
        </View>
        <View style={styles.ButtonContainer}>
          <ButtonXL
            onPress={() => Actions.shout()}
            name={'Shout?'}
          />
          <ButtonXL
            onPress={() => Actions.hear()}
            name={'Hear!'}
          />
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
    marginTop: 40,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoTextSytle: {
    fontSize: 25,
    color: '#FFFFFF'
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 100
  }
};

const MapPropsToState = ({ shouts }) => {
  const { shout_loader } = shouts;
  return { shout_loader };
};

export default connect(MapPropsToState, {
  hear, shout })(HomeComponent);
