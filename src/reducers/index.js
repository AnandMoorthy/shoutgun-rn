import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import ShoutReducer from './ShoutReducer';

export default combineReducers({
  user: AuthReducers,
  shouts: ShoutReducer
});
