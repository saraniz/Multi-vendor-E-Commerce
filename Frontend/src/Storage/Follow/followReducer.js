import {
    FETCH_FOLLOWED_SHOPS_REQUEST,
    FETCH_FOLLOWED_SHOPS_SUCCESS,
    FETCH_FOLLOWED_SHOPS_FAIL,
  } from "./actionType";
  
  const initialFollowedShopsState = {
    loading: false,
    shops: [],
    error: null,
  };
  
  const followedShopsReducer = (state = initialFollowedShopsState, action) => {
    switch (action.type) {
      case FETCH_FOLLOWED_SHOPS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_FOLLOWED_SHOPS_SUCCESS:
        return {
          ...state,
          loading: false,
          shops: action.payload,
        };
      case FETCH_FOLLOWED_SHOPS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
          shops: [],
        };
      default:
        return state;
    }
  };
  
  export default followedShopsReducer;
  