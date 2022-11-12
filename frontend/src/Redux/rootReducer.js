import {combineReducers} from "redux"
import {reducers as AppReducer} from "./App/reducer"
import { AuthReducer } from "./Auth/reducer";
// import {reducer as CartReducer} from "../Cartreducer/reducer"

const rootreducer=combineReducers({
    AppReducer,
    AuthReducer
    // CartReducer,
})

export default rootreducer;