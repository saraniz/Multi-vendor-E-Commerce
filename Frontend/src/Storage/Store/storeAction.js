import { api, API_BASE_URL } from "../APIConfig";
import {
  STORE_FETCH_REQUEST,
  STORE_FETCH_SUCCESS,
  STORE_FETCH_FAILURE,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAILURE
} from "./storeActionType"; // Make sure you define these in storeTypes.js
import axios from "axios";
import Swal from "sweetalert2";

// Fetch store by store_id
export const fetchStoreById = (store_id) => async (dispatch) => {
  try {
    console.log("sid_",store_id)
    dispatch({ type: STORE_FETCH_REQUEST });

    const { data } = await axios.get(`${API_BASE_URL}/api/store/fetchstore/${store_id}`);
    console.log("sdata_",data)
    dispatch({
      type: STORE_FETCH_SUCCESS,
      payload: data,
    });

    return data;
  } catch (error) {
    console.error("Fetch store error:", error);

    // Optional: show alert if needed
    Swal.fire({
      icon: "error",
      title: "Failed to load store",
      text: error.response?.data?.error || error.message,
    });

    dispatch({
      type: STORE_FETCH_FAILURE,
      payload: error.response?.data?.error || error.message,
    });

    throw error;
  }
};

// Fetch products based on store ID
export const fetchProductsByStoreId = (storeId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/store/fetchproducts/${storeId}`);
    const data = await response.json();
    console.log("Fetched products:", data); // Debug: Log fetched products

    dispatch({
      type: 'FETCH_PRODUCTS_SUCCESS',
      payload: data.products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    dispatch({
      type: 'FETCH_PRODUCTS_FAILURE',
      error: error.message,
    });
  }
};

