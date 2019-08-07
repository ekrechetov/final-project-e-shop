import axios from 'axios'
import { EMPTY_CART } from './types';

export const submitCheckout = (data,onSuccess, onFail) => async dispatch =>{
  try {
    await axios.post('/checkout', { data })
    .then(() => onSuccess('Thank your for order'))
    .then(() => dispatch({ type: EMPTY_CART }))
  } catch (err) {
    await onFail(`Couldn't connect to the server ${err}`)
  }
}

export const emptyCart = () => ({ type: EMPTY_CART })