import { FETCH_SEARCH_RESULTS_SUCCESS, FETCH_SEARCH_RESULTS_FAILURE } from "../Search/SearchType";

const initialState = {
  items: [],
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    case FETCH_SEARCH_RESULTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
