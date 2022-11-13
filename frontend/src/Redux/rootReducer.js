
import { combineReducers } from "redux";
import { reducers as AppReducer } from "./App/reducer";
import { reducer as CartReducer } from "./Addtocart/reducer";
// import {reducer as AuthReducer} from "../Auth/reducer";
// import {reducer as CartReducer} from "../Cartreducer/reducer"

const rootreducer = combineReducers({
  AppReducer,
  CartReducer,
  // AuthReducer
  // CartReducer,
});

export default rootreducer;

