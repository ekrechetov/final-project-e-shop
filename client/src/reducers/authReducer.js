<<<<<<< HEAD
import {
    SET_CURRENT_USER,
    CHANGE_USER_PASSWORD,
    FETCH_USERS_ORDERS,
    START,
    FAIL,
    SUCCESS
} from '../actions/types';
=======
import { SET_CURRENT_USER, CHANGE_USER_PASSWORD } from '../actions/types';
>>>>>>> 5abd8f87b6ebfc70539fc23e9f02d28ad431bfdf
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false,
<<<<<<< HEAD
    isPasswordChanged: false,
    isFetching: false,
    user: {},
    orders: []
=======
    user: {},
    isPasswordChanged: false
>>>>>>> 5abd8f87b6ebfc70539fc23e9f02d28ad431bfdf
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
<<<<<<< HEAD
        case FETCH_USERS_ORDERS + START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_USERS_ORDERS + SUCCESS:
            return {
                ...state,
                isFetching: false,
                orders: action.payload
            }
        case FETCH_USERS_ORDERS + FAIL:
            return {
                ...state,
                isFetching: false,
            }
=======
>>>>>>> 5abd8f87b6ebfc70539fc23e9f02d28ad431bfdf
        default:
            return state;
    }
}