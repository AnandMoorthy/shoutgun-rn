// import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Toast from 'react-native-root-toast';
import {
  GET_SHOUT,
  SHOUT,
  GET_SHOUT_DONE,
  SHOUT_INPUT_CHANGED,
  SHOUT_ENABLE_REPLY,
  GET_SHOUT_REPLIES,
  REPLY_INPUT_CHANGED
} from './types';
import ApiUtils from '../utils/ApiUtils.js';

export const shoutInputChanged = ({ prop, value }) => {
  return {
    type: SHOUT_INPUT_CHANGED,
    payload: { prop, value }
  };
};

export const replyInputChanged = ({ prop, value }) => {
  return {
    type: REPLY_INPUT_CHANGED,
    payload: { prop, value }
  };
};

export const enableReply = (value) => {
  return {
    type: SHOUT_ENABLE_REPLY,
    payload: { value }
  };
};

export const getReplies = (token, userId) => {
  console.log(token, userId);
  return (dispatch) => {
    // dispatch({
    //   type: GET_SHOUT_RE,
    //   payload: { shout_loader: true }
    // });
    const url = `http://192.168.43.123:8000/shout/replies/{}?user_id=${userId}&token=${token}`;
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(ApiUtils.checkStatus)
    .then((response) => response.json())
    .then((response) => {
        dispatch({
          type: GET_SHOUT_DONE,
          payload: { shout_loader: false, shout: response }
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SHOUT,
          payload: { shout_loader: false }
        });
        console.log(err);
        Toast.show('Everything Caught Up! Wanna Shout?');
    });
  };
};

export const hear = (token, userId) => {
  console.log(token, userId);
  return (dispatch) => {
    dispatch({
      type: GET_SHOUT,
      payload: { shout_loader: true }
    });
    const url = `http://192.168.43.123:8000/shout/?user_id=${userId}&token=${token}`;
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(ApiUtils.checkStatus)
    .then((response) => response.json())
    .then((response) => {
        dispatch({
          type: GET_SHOUT_DONE,
          payload: { shout_loader: false, shout: response }
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SHOUT,
          payload: { shout_loader: false }
        });
        console.log(err);
        Toast.show('Everything Caught Up! Wanna Shout?');
    });
  };
};


export const shout = (token, userId, shoutData, enableShoutReply) => {
  return (dispatch) => {
    dispatch({
      type: SHOUT,
      payload: { shout_loader: true }
    });
    const shoutType = 'text';
    // const enableReply = true;

    fetch('http://192.168.43.123:8000/shout/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: userId,
        token,
        shout_type: shoutType,
        shout: shoutData,
        enable_reply: enableShoutReply
      })
    })
    .then(ApiUtils.checkStatus)
    .then((response) => response.json())
    .then((response) => {
        dispatch({
          type: SHOUT,
          payload: { shout_loader: false }
        });
        Toast.show(response.message);
        Actions.home();
      })
      .catch((err) => {
        dispatch({
          type: SHOUT,
          payload: { loader: false }
        });
        console.log(err);
        Toast.show('Error');
    });
  };
};
