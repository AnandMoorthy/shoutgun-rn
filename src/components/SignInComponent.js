import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  Keyboard,
  StatusBar,
} from 'react-native';
import {
  Container,
  Section,
  InputBox,
  Label,
  Button
} from './common';
import { signinInputChanged, signIn, retrieveUser } from '../actions';


class SignInComponent extends Component {

  // componentWillMount() {
  //   this.getUser();
  // }

  // async getUser() {
  //   try {
  //     const value = await AsyncStorage.getItem('user');
  //     if (value !== null) {
  //       this.props.retrieveUser(value);
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //     console.log('Signin Check Error');
  //     console.log(error);
  //   }
  // }

  signin() {
    Keyboard.dismiss();
    const { email, password } = this.props;
    this.props.signIn(email, password);
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <StatusBar backgroundColor="#3AA4D4" barStyle="light-content" />
        <View style={styles.logoStyle}>
          <Text style={styles.logoTextSytle}>
            ShoutGun
          </Text>
        </View>
        <Container>
          <Section>
            <Label title='Email' />
          </Section>
          <Section>
            <InputBox
                placeholder={'name@email.com'}
                value={this.props.email}
                onChangeText={text => {
                  this.props.signinInputChanged({ prop: 'email', value: text });
                }}
            />
          </Section>
          <Section>
            <Label title='Password' />
          </Section>
          <Section>
              <InputBox
                placeholder={'********'}
                value={this.props.password}
                secureTextEntry
                onChangeText={text => {
                  this.props.signinInputChanged({ prop: 'password', value: text });
              }}
              />
          </Section>
          <View>
            <Button
              onPress={() => this.signin()}
              name={'Login'}
            />
          </View>
        </Container>
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
  buttonStyle: {
    flex: 1

  }
};

const MapPropsToState = ({ user }) => {
  const { email, password } = user;
  return { email, password };
};

export default connect(MapPropsToState, {
  signinInputChanged, signIn, retrieveUser })(SignInComponent);

// export default SignInComponent;
