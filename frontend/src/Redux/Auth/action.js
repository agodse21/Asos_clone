import axios from "axios";
import { storeData_LC } from "../../components/LocalStorage";
import {
  SIGNIN_FAILURE_REQUEST,
  SIGNIN_LOODING_REQUEST,
  SIGNIN_SUCCESS_REQUEST,
  SIGNUP_FAILURE_REQUEST,
  SIGNUP_LOODING_REQUEST,
  SIGNUP_SUCCESS_REQUEST,
} from "./actionTypes";

export const SignupReq = (e) => (dispatch) => {
  dispatch({ type: SIGNUP_LOODING_REQUEST });
  return axios
    .post(`https://asos-backend.onrender.com/signup`, e)
    .then((response) => {
      return dispatch({
        type: SIGNUP_SUCCESS_REQUEST,
        payload: response.data.msg,
      });
    })
    .catch(function (error) {
      const { response } = error;
      console.log(response.data.error, "jjjjj");
      return dispatch({
        type: SIGNUP_FAILURE_REQUEST,
        payload: response.data.error,
      });
    });
};

export const SigninReq = (e) => (dispatch) => {
  dispatch({ type: SIGNIN_LOODING_REQUEST });
  return axios
    .post(`https://asos-backend.onrender.com/login`, e)
    .then(function (response) {
      storeData_LC("userdata", response.data);
      return dispatch({
        type: SIGNIN_SUCCESS_REQUEST,
        payload: { token: response.data.token, data: response.data.data },
      });
    })
    .catch(function (error) {
      return dispatch({
        type: SIGNIN_FAILURE_REQUEST,
        payload: error.response.data.error,
      });
    });
};
