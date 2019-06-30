import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import quantityReducer from './quantityReducer'

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  quantity: quantityReducer
});
