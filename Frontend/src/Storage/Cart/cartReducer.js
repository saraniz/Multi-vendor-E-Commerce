import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
  CLEAR_CART,
  REMOVE_FROM_CART,
  SET_GUEST_CART_ITEMS,
  UPDATE_GUEST_CART_ITEM,
  CLEAR_GUEST_CART,
  CART_FLAG_TOGGLE, // ✅ new action
} from "../Cart/cartactionType";

const initialState = {
  loading: false,
  cartItems: [],
  guestCartItems: [],
  error: "",
  flag: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: [...state.cartItems, action.payload],
        error: "",
      };
    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FETCH_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload,
        error: "",
      };
    case FETCH_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case REMOVE_FROM_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
        error: "",
        flag: !state.flag, // ✅ toggle flag on delete
      };
    case REMOVE_FROM_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SET_GUEST_CART_ITEMS:
      return {
        ...state,
        loading: false,
        guestCartItems: action.payload,
      };

    case UPDATE_GUEST_CART_ITEM:
      return {
        ...state,
        loading: false,
        guestCartItems: action.payload,
      };

    case CLEAR_GUEST_CART:
      return {
        ...state,
        guestCartItems: [],
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    case CART_FLAG_TOGGLE:
      return {
        ...state,
        flag: !state.flag,
      };

    default:
      return state;
  }
};

export default cartReducer;
