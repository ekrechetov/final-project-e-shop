import { INCREMENT_CART_ITEM, DECREMENT_CART_ITEM } from "./types";

export const incrementCartItem = (code) => {
  return {
    type: INCREMENT_CART_ITEM,
    payload: code
  }
}

export const decrementCartItem = (code) => {
  return {
    type: DECREMENT_CART_ITEM,
    payload: code
  }
}