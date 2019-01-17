import {
  GET_SHOUT,
  GET_SHOUT_DONE,
  SHOUT_INPUT_CHANGED,
  SHOUT_ENABLE_REPLY,
  REPLY_INPUT_CHANGED,
  SHOUT } from '../actions/types';

const INITIAL_STATE = {
  shout: 'Awesome, You read everything. Try to Shout!!!',
  shoutData: 'hit search to begin!',
  shoutNew: 'hit search to begin!',
  shout_loader: false,
  hear_details: null,
  shout_enable_reply: true,
  shout_reply: false,
  shoutReplyInput: null,
  all_replies: [
    {
      id: 1,
      reply: 'One',
      replied_on: '20-06-1993',
      username: 'Anand'

    },
    {
      id: 2,
      reply: 'One',
      replied_on: '20-06-1993',
      username: 'Anand'

    },
    {
      id: 3,
      reply: 'One',
      replied_on: '20-06-1993',
      username: 'Anand'

    },
    {
      id: 1,
      reply: 'One',
      replied_on: '20-06-1993',
      username: 'Anand'

    },
    {
      id: 2,
      reply: 'One',
      replied_on: '20-06-1993',
      username: 'Anand'

    },
    {
      id: 3,
      reply: 'One',
      replied_on: '20-06-1993',
      username: 'Anand'

    },
    {
      id: 1,
      reply: 'One',
      replied_on: '20-06-1993',
      username: 'Anand'

    },
    {
      id: 2,
      reply: 'One',
      replied_on: '20-06-1993',
      username: 'Anand'

    },
    {
      id: 3,
      reply: 'One',
      replied_on: '20-06-1993',
      username: 'Anand'

    },
    {
      id: 1,
      reply: 'One',
      replied_on: '20-06-1993',
      username: 'Anand'

    },
    {
      id: 2,
      reply: 'One',
      replied_on: '20-06-1993',
      username: 'Anand'

    },
    {
      id: 3,
      reply: 'One',
      replied_on: '20-06-1993',
      username: 'Anand'

    }
  ]
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SHOUT:
      return { ...state, shout_loader: true };
    case SHOUT_INPUT_CHANGED:
      return { ...state, shoutData: action.payload.value };
    case SHOUT:
      return { ...state, shout_loader: true };
    case SHOUT_ENABLE_REPLY:
      return { ...state, shout_enable_reply: !action.payload.value };
    case REPLY_INPUT_CHANGED:
      return { ...state, shoutReplyInput: action.payload.value };
    case GET_SHOUT_DONE:
      return {
        ...state,
        shout_loader: false,
        shoutNew: action.payload.shout.data.post,
        shout_reply: action.payload.shout.data.reply,
        all_replies: action.payload.shout.data.replies
      };
    default:
      return state;

  }
};
