import axios from 'axios'
import { SIGNIN_FAILURE_REQUEST, SIGNIN_LOODING_REQUEST, SIGNIN_SUCCESS_REQUEST, SIGNUP_FAILURE_REQUEST, SIGNUP_LOODING_REQUEST, SIGNUP_SUCCESS_REQUEST } from './actionTypes'


export const SignupReq = (e) => (dispatch) => {
    dispatch({type: SIGNUP_LOODING_REQUEST})
    return (
        axios.post(`https://asos-backend.onrender.com/signup`,e)
          .then(function (response) {
            console.log(response.data)
            dispatch({type: SIGNUP_SUCCESS_REQUEST,payload: response.data})
          })
          .catch(function (error) {
            console.log(error)
            dispatch({type: SIGNUP_FAILURE_REQUEST})
          })
    )
}



export const SigninReq = (e) => (dispatch) => {
    dispatch({type: SIGNIN_LOODING_REQUEST})
    return (
        axios.post(`https://asos-backend.onrender.com/login`,e)
          .then(function (response) {
            console.log(response.data)
            dispatch({type: SIGNIN_SUCCESS_REQUEST,payload: response.data})
          })
          .catch(function (error) {
            console.log(error)
            dispatch({type: SIGNIN_FAILURE_REQUEST})
          })
    )
}