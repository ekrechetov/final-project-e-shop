import { SET_CURRENT_USER, CHANGE_USER_PASSWORD } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    user: {},
    isPasswordChanged: false
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        case CHANGE_USER_PASSWORD:
            const isSuccess = action.payload
            return {
                ...state,
                isPasswordChanged: isSuccess
            }
        default:
            return state;
    }
}