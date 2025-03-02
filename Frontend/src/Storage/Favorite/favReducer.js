import {
    ADD_FAVORITE_REQUEST,
    ADD_FAVORITE_SUCCESS,
    ADD_FAVORITE_FAILURE,
    REMOVE_FAVORITE_REQUEST,
    REMOVE_FAVORITE_SUCCESS,
    REMOVE_FAVORITE_FAILURE,
    FETCH_FAVORITES_REQUEST,
    FETCH_FAVORITES_SUCCESS,
    FETCH_FAVORITES_FAILURE,
  } from "./favActionType";
  
  const initialState = {
    favorites: [],
    loading: false,
    error: null,
  };
  
  // Reducer function
  const favReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FAVORITE_REQUEST:
      case REMOVE_FAVORITE_REQUEST:
      case FETCH_FAVORITES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case ADD_FAVORITE_SUCCESS:
        return {
          ...state,
          loading: false,
          favorites: [...state.favorites, action.payload], // Add new favorite to list
        };
  
      case REMOVE_FAVORITE_SUCCESS:
        return {
          ...state,
          loading: false,
          favorites: state.favorites.filter(
            (fav) => fav.product_id !== action.payload.product_id
          ), // Remove favorite from list
        };
  
      case FETCH_FAVORITES_SUCCESS:
        return {
          ...state,
          loading: false,
          favorites: action.payload, // Update with fetched favorites
        };
  
      case ADD_FAVORITE_FAILURE:
      case REMOVE_FAVORITE_FAILURE:
      case FETCH_FAVORITES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload, // Store error message
        };
  
      default:
        return state;
    }
  };
  
  export default favReducer;
  