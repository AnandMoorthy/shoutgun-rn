import {
  USER_SIGNIN,
  SIGNIN_INPUT_CHANGED,
  RETRIEVE_USER } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  token: '',
  user_id: '',
  password: '',
  signin_loader: true,
  signup_loader: false,
  loader: false,
  user: null,
  boot_loader: true,
  forgot_email: null,
  signup: {
    name: '',
    username: '',
    email: '',
    password: '',
    token: '',
    user_id: ''
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_INPUT_CHANGED:
      if (action.payload.prop === 'email') {
          return { ...state, email: action.payload.value };
      }
      return { ...state, password: action.payload.value };
    case USER_SIGNIN:
      return { ...state, loader: action.payload.loader, user: action.payload.user };
    case RETRIEVE_USER:
      return { ...state, user: action.payload };
    default:
      console.log(action.type);
      return state;

  }
};
