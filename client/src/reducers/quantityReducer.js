import { INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "../actions/types";
const initialState = {
    quantity: 1
}

export default function (state = initialState, action) {
    switch (action.type) {
        case INCREMENT_QUANTITY:
            return {
                ...state,
                quantity: state.quantity + 1
            }
        case DECREMENT_QUANTITY:
            return {
                ...state,
                quantity: state.quantity > 1 ?  state.quantity - 1 : state.quantity
            }
        default:
            return state;
    }
}