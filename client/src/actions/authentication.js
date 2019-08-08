import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, CHANGE_USER_PASSWORD } from './types';
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
}