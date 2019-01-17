import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  TextInput,
  Text,
  View,
  ScrollView,
  StatusBar
} from 'react-native';
import {
  Button,
  ReplyButton
} from './common';
import { hear } from '../actions';

class HearComponent extends Component {

  hearAPI() {
    this.props.hear(this.props.token, this.props.user_id);
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
        <View style={styles.TextContainer}>
          <View style={styles.InsideTextContainer}>
            <ScrollView>
              <TextInput
                style={styles.TextStyle}
                editable={false}
                multiline
              >
                {this.props.shoutNew}
              </TextInput>
            </ScrollView>
          </View>
        </View>
        <View style={styles.ReplyContainer}>
          <ReplyButton
            name={'Show reply'}
            reply={this.props.shout_reply}
            onPress={() => Actions.reply()}
          />
        </View>
        <View style={styles.HearNewComponent}>
          <Button
            onPress={() => this.hearAPI()}
            name={'Search'}
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
  TextContainer: {
    flex: 2,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    marginHorizontal: 15,
    marginBottom: 1
  },
  ReplyContainer: {
    marginLeft: 30,
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
  HearNewComponent: {
    flex: 3
  }
};

const MapPropsToState = ({ shouts, user }) => {
  const { shoutNew, shout_reply } = shouts;
  const { token, user_id } = user.user;
  return { shoutNew, token, user_id, shout_reply };
};

export default connect(MapPropsToState, { hear })(HearComponent);
