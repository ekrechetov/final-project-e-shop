import { INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "./types";

export const incrementQuantity = () => {
    return { type: INCREMENT_QUANTITY }
}
export const decrementQuantity = () => {
    return { type: DECREMENT_QUANTITY }
}