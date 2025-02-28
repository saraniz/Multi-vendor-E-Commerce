import { api, API_BASE_URL } from "../APIConfig"
import axios from "axios"
import Swal from 'sweetalert2'
import { FETCH_ALLPRODUCT_FAILURE, FETCH_ALLPRODUCT_REQUEST, FETCH_ALLPRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "./productActionType";

// Action to fetch product details




export const fetchProductDetails = (product_id) => async (dispatch) => {
  dispatch({ type: 'FETCH_PRODUCT_REQUEST' }); // Dispatching request action

  try {
      // Sending GET request to fetch product details
      const { data } = await axios.get(`${API_BASE_URL}/api/items/product/${product_id}`);

      // Dispatch success action with fetched data
      dispatch({ type: 'FETCH_PRODUCT_SUCCESS', payload: data });

      console.log('Product details fetched successfully:', data);
  } catch (error) {
      // Improved error handling
      const errorMessage = 
          error.response?.data?.message || 
          error.message || 
          'Something went wrong!';

      // Dispatch failure action with error message
      dispatch({ type: FETCH_PRODUCT_FAILURE, payload: errorMessage });

      console.error('Error fetching product details:', error);
  }
};


//fetch all the products in database
export const fetchAllProducts = () => async (dispatch) => {
    dispatch({ type: FETCH_ALLPRODUCT_REQUEST }); // Dispatching request action
    
    try {
      // Sending GET request to fetch all products
      const { data } = await axios.get(`${API_BASE_URL}/api/items/allproducts`);
      
      // Dispatch success action with fetched data
      dispatch({ type:FETCH_ALLPRODUCT_SUCCESS, payload: data });
  
  
    } catch (error) {
      // Improved error handling
      const errorMessage =
        error.response?.data?.message || error.message || "Something went wrong!";
  
      // Dispatch failure action with error message
      dispatch({ type: FETCH_ALLPRODUCT_FAILURE, payload: errorMessage });
  
      console.error("Error fetching products:", error);
    }
  };