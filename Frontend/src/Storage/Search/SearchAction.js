import { api, API_BASE_URL } from "../APIConfig";
import { FETCH_SEARCH_RESULTS_SUCCESS, FETCH_SEARCH_RESULTS_FAILURE } from "../Search/SearchType";  // Assuming you have these action types
import axios from "axios";
import Swal from "sweetalert2";


export const searchItems = (searchQuery) => async (dispatch) => {
  try {
    // Make the API call
    const { data } = await axios.post(`${API_BASE_URL}/api/items/search`, searchQuery);

    // Dispatch the success action (if you have one)
    dispatch({
      type: FETCH_SEARCH_RESULTS_SUCCESS,
      payload: data.results, // Ensure this is the array of results
    });

    // Return the results for the component
    return data.results;
  } catch (error) {
    console.error('Search error in Redux:', error);

    // Dispatch the failure action (if you have one)
    dispatch({
      type: FETCH_SEARCH_RESULTS_FAILURE,
      payload: error.message,
    });

    // Throw the error to be handled in the component
    throw error;
  }
};

