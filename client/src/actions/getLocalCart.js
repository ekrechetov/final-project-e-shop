import { GET_LOCAL_STORAGE_CART } from "./types";

export const getLocalCart = (data) => {
  return {
    type: GET_LOCAL_STORAGE_CART,
    payload: data
  }
}