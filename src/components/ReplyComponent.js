import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  FlatList,
  StatusBar,
  TextInput
} from 'react-native';
import {
  RoundSendButton
} from './common';
import { replyInputChanged } from '../actions';

class ReplyComponent extends Component {

  // replyInput() {
  //   this.props.replyInputChanged();
  // }

  keyExtractor = (item, index) => index

  renderItem = ({ item }) => (
    <View style={styles.listStyle}>
      <View style={styles.replyUsernameContainer}>
        <Text style={styles.replyUsernameStyle}>
          {item.username}
        </Text>
      </View>
      <View style={styles.replyTextContainer}>
        <Text style={styles.replyTextStyle}>
          {item.reply}
        </Text>
      </View>
      <View style={styles.replyDateTimeContainer}>
        <Text style={styles.replyDateTimeStyle}>
          {item.replied_on}
        </Text>
      </View>
    </View>
  )

  render() {
    if (this.props.all_replies.length !== 0) {
      return (
        <View style={styles.containerStyle}>
          <StatusBar backgroundColor="#3AA4D4" barStyle="light-content" />
          <View style={styles.ReplyContainer}>
            <FlatList
              inverted
              keyExtractor={this.keyExtractor}
              data={this.props.all_replies}
              renderItem={this.renderItem}
            />
          </View>
          <View style={styles.replyBoxContainer}>
            <View style={styles.boxContainer}>
              <TextInput
                placeholder={'Your Comment1...'}
                style={styles.textBoxStyle}
                editable
                multiline
                maxLength={400}
                maxHeight={80}
                onChangeText={text => {
                  this.props.replyInputChanged({ prop: 'ReplyData', value: text });
                }}
              />
            </View>
            <View style={styles.buttonContainer}>
              <RoundSendButton />
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.containerStyle}>
          <StatusBar backgroundColor="#3AA4D4" barStyle="light-content" />
          <View style={styles.ReplyContainer}>
            <Text style={styles.emptyReplyStyle}>
              No Comments Yet...
            </Text>
          </View>
          <View style={styles.replyBoxContainer}>
            <View style={styles.boxContainer}>
              <TextInput
                placeholder={'Your Comment1...'}
                style={styles.textBoxStyle}
                editable
                multiline
                maxHeight={80}
                maxLength={400}
                onChangeText={text => {
                  this.props.replyInputChanged({ prop: 'ReplyData', value: text });
                }}
              />
            </View>
            <View style={styles.buttonContainer}>
              <RoundSendButton />
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#3AA4D4'
  },
  ReplyContainer: {
    flex: 1,
    marginTop: 50,
    // borderColor: '#FFFFFF'
  },
  listStyle: {
    borderWidth: 10,
    borderRadius: 2,
    borderColor: '#FFFFFF',
    marginHorizontal: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    marginBottom: 2
  },
  replyTextStyle: {
    fontSize: 14
  },
  replyTextContainer: {
    marginVertical: 10,
    marginLeft: 13,
    marginRight: 10
  },
  replyDateTimeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10
  },
  replyDateTimeStyle: {
    fontSize: 10,
    color: 'gray'
  },
  replyUsernameStyle: {
    fontSize: 12,
    color: 'gray'
  },
  replyUsernameContainer: {
    paddingHorizontal: 10,
    paddingTop: 7,
    paddingBottom: 5
  },
  replyBoxContainer: {
    postion: 'absolute',
    flexDirection: 'row',
  },
  boxContainer: {
    flex: 6,
    height: 50,
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 30,
    marginVertical: 5,
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    flex: 1,
    alignSelf: 'center'
  },
  emptyReplyStyle: {
    alignSelf: 'center',
    fontSize: 22,
    color: '#FFFFFF'
  },
  textBoxStyle: {
    marginHorizontal: 20,
    maxHeight: 180
  }
};

const MapPropsToState = ({ shouts }) => {
  // const { token, user_id } = user.user;
  const { all_replies, reply, shoutReplyInput } = shouts;
  return { all_replies, reply, shoutReplyInput };
};

export default connect(MapPropsToState, { replyInputChanged })(ReplyComponent);
