import {
  GET_LOCAL_STORAGE_CART,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM,
  DELETE_CART_ITEM,
  ADD_CART_ITEM
  } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LOCAL_STORAGE_CART:
      return action.payload;

    case INCREMENT_CART_ITEM: {
      const newArj = state.map(item => {
        if (item.code === action.payload) {
          if (item.quantity < item.availability)
            return { ...item, quantity: item.quantity + 1 };
          else return item;
        }
        else return item;
      });
      return newArj;
    }

    case DECREMENT_CART_ITEM: {
      const newArj = state.map(item => {
        if (item.code === action.payload) {
          if (item.quantity > 1) return { ...item, quantity: item.quantity - 1 };
          else return item;
        }
        else return item;
      });
      return newArj;
    }
    case DELETE_CART_ITEM: {
      const newArj = state.filter(item => {
        return (item.code != action.payload);
      });
      
      return newArj;
    }
    case ADD_CART_ITEM: {
      const newArj = state.filter(item => {
        if(item.code === action.payload.code) {
          action.payload.quantity += item.quantity
        } 
        return item.code != action.payload.code
      })
      
      return [...newArj, action.payload]
    }
    default: return state;
  }
}