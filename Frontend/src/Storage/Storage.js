import {applyMiddleware,combineReducers,legacy_createStore} from "redux"; 
import {thunk} from 'redux-thunk';
import { authenticationReducer } from "./Auth/Authreducers";



const rootReducers = combineReducers({
    auth:authenticationReducer,
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk));