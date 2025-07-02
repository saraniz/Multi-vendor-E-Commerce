// src/Storage/Checkout/checkoutReducer.js
import {
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAIL,
  GUEST_CHECKOUT_REQUEST,
  GUEST_CHECKOUT_SUCCESS,
  GUEST_CHECKOUT_FAIL,
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAIL,
  FETCH_SELLER_ORDERS_REQUEST,
  FETCH_SELLER_ORDERS_SUCCESS,
  FETCH_SELLER_ORDERS_FAILURE
} from './orderActionType';

const initialState = {
  loading: false,
  success: false,
  error: null,
  order: null,
  orders: [],           // Orders placed by current user
  sellerOrders: []      // Orders for seller's store
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
    case GUEST_CHECKOUT_REQUEST:
    case FETCH_ORDERS_REQUEST:
    case FETCH_SELLER_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case CHECKOUT_SUCCESS:
    case GUEST_CHECKOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        order: action.payload.order
      };

    case CHECKOUT_FAIL:
    case GUEST_CHECKOUT_FAIL:
    case FETCH_ORDERS_FAIL:
    case FETCH_SELLER_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload
      };

    case FETCH_SELLER_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        sellerOrders: action.payload
      };

    default:
      return state;
  }
};
