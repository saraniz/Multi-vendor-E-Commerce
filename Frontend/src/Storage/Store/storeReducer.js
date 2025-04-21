import {
  STORE_FETCH_REQUEST,
  STORE_FETCH_SUCCESS,
  STORE_FETCH_FAILURE,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAILURE,
} from './storeActionType';

const initialState = {
  loading: false,
  store: null,  // Store data, including products
  products: [], // Separate list for products
  error: null,
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case STORE_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        store: action.payload,  // Store data
      };

    case STORE_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Product actions
    case PRODUCT_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,  // Products data
      };

    case PRODUCT_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default storeReducer;
