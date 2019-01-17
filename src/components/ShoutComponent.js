import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  StatusBar,
  TextInput
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import {
  Button
} from './common';
import { shout, shoutInputChanged, enableReply } from '../actions';

class ShoutComponent extends Component {

  shoutAPI() {
    this.props.shout(
      this.props.token,
      this.props.user_id,
      this.props.shoutData,
      this.props.shout_enable_reply
    );
  }

  shoutEnableReply() {
    this.props.enableReply(this.props.shout_enable_reply);
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <StatusBar backgroundColor="#3AA4D4" barStyle="light-content" />
        <View style={styles.logoStyle}>
          <Text style={styles.logoTextSytle}>
            What you want to shout?
          </Text>
        </View>
        <View style={styles.TextContainer}>
          <View style={styles.InsideTextContainer}>
            <TextInput
              placeholder={'Shout here...'}
              style={styles.TextStyle}
              editable
              multiline
              maxLength={400}
              onChangeText={text => {
                this.props.shoutInputChanged({ prop: 'shoutData', value: text });
              }}
            />
          </View>
        </View>
        <View style={styles.CheckBoxContainer}>
          <CheckBox
            title='Enable reply'
            containerStyle
            checked={this.props.shout_enable_reply}
            onPress={() => this.shoutEnableReply()}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <Button
            onPress={() => this.shoutAPI()}
            name={'Shout'}
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
    flex: 1,
    marginTop: 40,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoTextSytle: {
    fontSize: 25,
    color: '#FFFFFF'
  },
  TextContainer: {
    flex: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10
  },
  InsideTextContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20
  },
  TextStyle: {
    fontSize: 18
  },
  ButtonContainer: {
    flex: 2
  },
  CheckBoxContainer: {
    broderRadius: 10,
    borderColor: 'black',
    marginHorizontal: 20
  }
};

const MapPropsToState = ({ user, shouts }) => {
  const { token, user_id } = user.user;
  const { shoutData, shout_enable_reply } = shouts;
  return { token, user_id, shoutData, shout_enable_reply };
};

export default connect(MapPropsToState, {
  shout,
  shoutInputChanged,
  enableReply
})(ShoutComponent);
