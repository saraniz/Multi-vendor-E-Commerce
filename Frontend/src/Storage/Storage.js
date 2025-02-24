import {applyMiddleware,combineReducers,legacy_createStore} from "redux"; 
import {thunk} from 'redux-thunk';
import { authenticationReducer } from "./Auth/Authreducers";
import searchReducer from './Search/SearchReducers';
import productReducer from "./Product/productReducer";



const rootReducers = combineReducers({
    auth:authenticationReducer,
    search:searchReducer,
    products: productReducer, // Ensure this key matches your `useSelector` path

})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk));