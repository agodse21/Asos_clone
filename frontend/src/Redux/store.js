
import { legacy_createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import rootreducer from "./rootReducer";
const middleware= [thunk]
const store = legacy_createStore(rootreducer, applyMiddleware(...middleware));

export default store;

import { legacy_createStore,applyMiddleware,combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { AuthReducer } from './Auth/reducer'

const rootRuducer = combineReducers({AuthReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootRuducer,composeEnhancers(applyMiddleware(thunk)));



