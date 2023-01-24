import { SIGNIN_FAILURE_REQUEST, SIGNIN_LOODING_REQUEST, SIGNIN_SUCCESS_REQUEST, SIGNOUT_REQUEST, SIGNUP_FAILURE_REQUEST, SIGNUP_LOODING_REQUEST, SIGNUP_SUCCESS_REQUEST } from "./actionTypes"

const user = JSON.parse(localStorage.getItem('userdata'))

const userData = {
    token: "token not exisst" || user.token,
    isAuth: user ? true : false,
    isLooding: false,
    signup_status : false,
    isError: false,
    isErrorData:"",
    u_Data: [] || user.data,
    msg:""
}

export function AuthReducer(state = userData,action){
    const {type,payload} = action
    switch(type){
        case SIGNUP_LOODING_REQUEST : return {
            ...state,isLooding: true
        }
        case SIGNUP_SUCCESS_REQUEST : return {
            ...state,isLooding: false, signup_status: true,msg:payload
        }
        case SIGNUP_FAILURE_REQUEST : return {
            ...state, isLooding: false, isError: true,isErrorData:payload,signup_status:false
        }
        case SIGNIN_LOODING_REQUEST : return {
            ...state,isLooding: true
        }
        case SIGNIN_SUCCESS_REQUEST :
        return {
            ...state,isLooding: false, token: payload.token, u_Data: payload.data,msg:payload.msg, isAuth: true 
        }
        case SIGNIN_FAILURE_REQUEST : return {
            ...state,isLooding: false, isError: true,isErrorData:payload
        }
        case SIGNOUT_REQUEST : return {
            ...state
        }
        default : return state
    }
}