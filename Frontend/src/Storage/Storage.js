import {applyMiddleware,combineReducers,legacy_createStore} from "redux"; 
import {thunk} from 'redux-thunk';
import { authenticationReducer } from "./Auth/Authreducers";
import searchReducer from './Search/SearchReducers';



const rootReducers = combineReducers({
    auth:authenticationReducer,
    search:searchReducer,
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk));