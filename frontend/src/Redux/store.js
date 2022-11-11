

import { legacy_createStore,applyMiddleware,combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { AuthReducer } from './Auth/reducer'

const rootRuducer = combineReducers({AuthReducer})

export const store = legacy_createStore(rootRuducer,composeEnhancers(applyMiddleware(thunk)));



