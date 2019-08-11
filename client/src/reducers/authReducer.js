import {
    SET_CURRENT_USER,
    CHANGE_USER_PASSWORD,
    FETCH_USERS_ORDERS,
    START,
    SUCCESS,
    FAIL
} from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    isPasswordChanged: false,
    isFetching: false,
    user: {},
    orders: []
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
        default:
            return state;
    }
}