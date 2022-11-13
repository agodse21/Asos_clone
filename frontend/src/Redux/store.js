import { legacy_createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import rootreducer from "./rootReducer";

const middleware = [thunk]

const store = legacy_createStore(rootreducer, applyMiddleware(...middleware));
export default store;
