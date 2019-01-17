import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Toast from 'react-native-root-toast';
import {
  SIGNIN_INPUT_CHANGED,
  USER_SIGNIN,
  RETRIEVE_USER
} from './types';
import ApiUtils from '../utils/ApiUtils.js';

export const signinInputChanged = ({ prop, value }) => {
  return {
    type: SIGNIN_INPUT_CHANGED,
    payload: { prop, value }
  };
};

const storeLocal = async (type, data) => {
  try {
    await AsyncStorage.setItem(type, JSON.stringify(data));
    // const value = await AsyncStorage.getItem(type);
  } catch (error) {
    console.log('Error on storeLocal');
  }
};


// const getLocal = async () => {
//   try {
//     const value = await AsyncStorage.getItem('user');
//     return value;
//   } catch (error) {
//     console.log('Error on storeLocal');
//     return false;
//   }
// };

const btoa = require('base-64').encode;

export const signIn = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNIN,
      payload: { email, password, loader: true }
    });
    const auth = btoa(`${email}:${password}`);
    fetch('http://192.168.43.123:8000/signin/', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        platform: 'android'
      })
    })
    .then(ApiUtils.checkStatus)
    .then((response) => response.json())
    .then((response) => {
        dispatch({
          type: USER_SIGNIN,
          payload: { loader: false, user: response.data }
        });
        // dispatch({
        //   type: RETRIEVE_USER,
        //   payload: response
        // });
        storeLocal('user', response.data);
        Toast.show(response.message);
        Actions.home();
      })
      .catch(() => {
        dispatch({
          type: USER_SIGNIN,
          payload: { loader: false }
        });
        Toast.show('Error');
    });
  };
};

export const retrieveUser = (user) => {
  console.log('Retrive User');
  console.log(user);
  return (dispatch) => {
    const userDetails = JSON.parse(user);
    const userObj = userDetails;
    fetch(`http://192.168.43.123:8000/users/${userObj.user_id}/?token=${userObj.token}`, {
      method: 'GET'
    })
    .then(ApiUtils.checkStatus)
    .then((response) => response.json())
    .then(() => {
      dispatch({
        type: RETRIEVE_USER,
        payload: JSON.parse(user)
      });
        Actions.home();
      })
      .catch((error) => {
        console.log('From Brooklyn');
        console.log(error);
        Actions.signin();
    });
  };
};
