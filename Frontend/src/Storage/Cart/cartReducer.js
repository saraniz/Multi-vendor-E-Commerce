// cartReducer.js
import { 
  ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE, 
  FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_CART_FAILURE, 
  REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS, REMOVE_FROM_CART_FAILURE,
  CLEAR_CART,REMOVE_FROM_CART
} from '../Cart/cartactionType';

const initialState = {
  loading: false,
  cartItems: [],
  error: '',
  flag:false
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add to Cart
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: [...state.cartItems, action.payload], // Add new item to cart
        error: '',
      };
    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Fetch Cart Items from Database
    case FETCH_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload, // Replace cart items with fetched data
        error: '',
        
      };
    case FETCH_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Remove from Cart
    case REMOVE_FROM_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.filter(item => item.id !== action.payload), // Remove item by ID
        error: '',
        flag: !state.flag

      };
    case REMOVE_FROM_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Clear Cart (e.g., after checkout)
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [], // Empty the cart
      };


    default:
      return state;
  }
};

export default cartReducer;
