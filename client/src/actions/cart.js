import { EMPTY_CART } from './types';

export const submitCheckout = (data,onSuccess, onFail) => async dispatch =>{

  const { address, order, card } = data
  const postData = {
    user_id: await localStorage.getItem('USER_ID'),
    address,
    card,
    order
  }

  try {
    //POST REQUEST
    await onSuccess('Thank your for order')
  } catch (err) {
    await onFail(`Couldn't connect to the server ${err}`)
  }
}

export const emptyCart = () => ({ type: EMPTY_CART })