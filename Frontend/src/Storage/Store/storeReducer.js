import {
  STORE_FETCH_REQUEST,
  STORE_FETCH_SUCCESS,
  STORE_FETCH_FAILURE,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAILURE,
  SELLER_PRODUCTS_FETCH_REQUEST,
  SELLER_PRODUCTS_FETCH_SUCCESS,
  SELLER_PRODUCTS_FETCH_FAILURE,
  ORDER_COUNTS_REQUEST,
  ORDER_COUNTS_SUCCESS,
  ORDER_COUNTS_FAILURE,
  SELLER_ALL_PRODUCTS_FETCH_REQUEST,
  SELLER_ALL_PRODUCTS_FETCH_SUCCESS,
  SELLER_ALL_PRODUCTS_FETCH_FAILURE,
} from './storeActionType';

const initialState = {
  loading: false,
  store: null,           // Store data, including products
  products: [],          // Separate list for products
  sellerProducts: [],    // Seller's products
  orderCounts: {         // Order counts by status
    shipped: 0,
    pending: 0,
    new: 0,
  },
  error: null,
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_FETCH_REQUEST:
    case PRODUCT_FETCH_REQUEST:
    case SELLER_PRODUCTS_FETCH_REQUEST:
    case ORDER_COUNTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case STORE_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        store: action.payload,  // store details from backend
        error: null,
      };

    case PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null,
      };

    case SELLER_PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        sellerProducts: action.payload,
        error: null,
      };

    case ORDER_COUNTS_SUCCESS:
      return {
        ...state,
        loading: false,
        orderCounts: {
          shipped: action.payload.shipped,
          pending: action.payload.pending,
          new: action.payload.new,
        },
        error: null,
      };

    case STORE_FETCH_FAILURE:
    case PRODUCT_FETCH_FAILURE:
    case SELLER_PRODUCTS_FETCH_FAILURE:
    case ORDER_COUNTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SELLER_ALL_PRODUCTS_FETCH_REQUEST:
      return { ...state, loading: true, error: null };

    case SELLER_ALL_PRODUCTS_FETCH_SUCCESS:
      return { ...state, loading: false, sellerProducts: action.payload, error: null };

    case SELLER_ALL_PRODUCTS_FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default storeReducer;
