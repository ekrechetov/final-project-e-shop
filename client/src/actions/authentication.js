import axios from 'axios';
import jwt_decode from 'jwt-decode';
<<<<<<< HEAD
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  CHANGE_USER_PASSWORD,
  FETCH_USERS_ORDERS,
  START,
  FAIL,
  SUCCESS,
} from './types';
=======
import { GET_ERRORS, SET_CURRENT_USER, CHANGE_USER_PASSWORD } from './types';
>>>>>>> 5abd8f87b6ebfc70539fc23e9f02d28ad431bfdf
import setAuthToken from '../setAuthToken';

export const registerUser = (user, history) => (dispatch) => {
  axios.post('/register', user)
    .then(res => history.push('/login'))
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const loginUser = user => (dispatch) => {
  axios.post('/login', user)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};


export const logoutUser = history => (dispatch) => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  // history.push('/login');
  history.push('/');
};


export const changeUserPassword = (data, user_id) => async dispatch => {
  const res = await axios.post('user_customize', { data, user_id })
  const isSucces = res.data.user_customize === 'success'
  dispatch({ type: CHANGE_USER_PASSWORD, payload: isSucces })
<<<<<<< HEAD
}

export const fetchUsersOrders = (user_id) => async dispatch => {
  dispatch({ type: FETCH_USERS_ORDERS + START })
  let res = {}
  try {
    res = await axios.post('/user_orders', { user_id })
  } catch (err) {
    dispatch({ type: FETCH_USERS_ORDERS + FAIL })
  }
  dispatch({ type: FETCH_USERS_ORDERS + SUCCESS, payload: res.data.orders })
  console.log('fetchUsersOrders', res)
=======
>>>>>>> 5abd8f87b6ebfc70539fc23e9f02d28ad431bfdf
}