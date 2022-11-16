import axios from 'axios'
import { storeData_LC } from '../../components/LocalStorage'
import { SIGNIN_FAILURE_REQUEST, SIGNIN_LOODING_REQUEST, SIGNIN_SUCCESS_REQUEST, SIGNUP_FAILURE_REQUEST, SIGNUP_LOODING_REQUEST, SIGNUP_SUCCESS_REQUEST } from './actionTypes'


export const SignupReq = (e) => (dispatch) => {
  dispatch({type: SIGNUP_LOODING_REQUEST})
    return (
        axios.post(`https://asos-backend.onrender.com/signup`,e)
          .then(function (response) {
            console.log(response.data)
            dispatch({type: SIGNUP_SUCCESS_REQUEST})
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
           
            storeData_LC("userdata",response.data)
            dispatch({type: SIGNIN_SUCCESS_REQUEST,payload: {token: response.data.token, data: response.data.data}})
  
          })
          .catch(function (error) {
            // console.log("amol",error.response.data.error)
            dispatch({type: SIGNIN_FAILURE_REQUEST,payload:error.response.data.error})
          })
    )
}