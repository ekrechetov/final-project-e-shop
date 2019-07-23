import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import quantityReducer from './quantityReducer'
import loadProductDataReducer from './loadProductDataReducer';
import productLoadingReducer from './productLoadingReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  quantity: quantityReducer,
  data : loadProductDataReducer,
  loading : productLoadingReducer,
  cart: cartReducer,
});
