import { INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "./types";

export const incrementQuantity = (quantity, availability) => {
    if (quantity <= availability)
    return { type: INCREMENT_QUANTITY }
    else return {type: ''}
}
export const decrementQuantity = () => {
    return { type: DECREMENT_QUANTITY }
}