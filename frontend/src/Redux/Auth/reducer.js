import { SIGNIN_FAILURE_REQUEST, SIGNIN_LOODING_REQUEST, SIGNIN_SUCCESS_REQUEST, SIGNOUT_REQUEST, SIGNUP_FAILURE_REQUEST, SIGNUP_LOODING_REQUEST, SIGNUP_SUCCESS_REQUEST } from "./actionTypes"

const userData = {
    token: '',
    isAuth: false,
    isLooding: false,
    isError: false,
    u_Data: []
}

export function AuthReducer(state = userData,action){
    const {type,payload} = action
    switch(type){
        case SIGNUP_LOODING_REQUEST : return {
            ...state,isLooding: true
        }
        case SIGNUP_SUCCESS_REQUEST : return {
            ...state,isLooding: false, token: payload.token, u_Data: payload.data, isAuth: true 
        }
        case SIGNUP_FAILURE_REQUEST : return {
            ...state,isLooding: false, isError: true
        }
        case SIGNIN_LOODING_REQUEST : return {
            ...state,isLooding: true
        }
        case SIGNIN_SUCCESS_REQUEST : return {
            ...state,isLooding: false, token: payload.token, u_Data: payload.data, isAuth: true 
        }
        case SIGNIN_FAILURE_REQUEST : return {
            ...state,isLooding: false, isError: true
        }
        case SIGNOUT_REQUEST : return {
            ...state
        }
        default : return state
    }
}