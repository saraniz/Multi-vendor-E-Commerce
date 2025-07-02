import {applyMiddleware,combineReducers,legacy_createStore} from "redux"; 
import {thunk} from 'redux-thunk';
import { authenticationReducer } from "./Auth/Authreducers";
import searchReducer from './Search/SearchReducers';
import productReducer from "./Product/productReducer";
import cartReducer from "./Cart/cartReducer";
import favReducer from "./Favorite/favReducer";
import reviewReducer from "./Review/reviewReducer";
import storeReducer from "./Store/storeReducer";
import followReducer from "./Follow/followReducer";
import { orderReducer } from "./Order/orderReducer";


const rootReducers = combineReducers({
    auth:authenticationReducer,
    search:searchReducer,
    products: productReducer, // Ensure this key matches your `useSelector` path
    cart: cartReducer,
    fav: favReducer,
    review: reviewReducer,
    store:storeReducer,
    follow:followReducer,
    order: orderReducer,
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk));