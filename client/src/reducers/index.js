import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import quantityReducer from './quantityReducer'
import loadProductDataReducer from './loadProductDataReducer';
import productLoadingReducer from './productLoadingReducer';
import cartReducer from './cartReducer';
import categoriesReducer from './categoriesReducer'
import productReducer from './productReducer'
import productsPageReducer from './productsPageReducer'

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  quantity: quantityReducer,
  data : loadProductDataReducer,
  loading : productLoadingReducer,
  cart: cartReducer,
  product: productReducer,
  productsPage: productsPageReducer,
  Categories: categoriesReducer,
});
