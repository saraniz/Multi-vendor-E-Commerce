import { api, API_BASE_URL } from "../APIConfig";
import axios from "axios";
import Swal from "sweetalert2";
import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  FETCH_ALLPRODUCT_FAILURE,
  FETCH_ALLPRODUCT_REQUEST,
  FETCH_ALLPRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "./productActionType";
import { ADD_FAVORITE_SUCCESS } from "../Favorite/favActionType";

// Action to fetch product details

export const fetchProductDetails = (product_id) => async (dispatch) => {
  dispatch({ type: "FETCH_PRODUCT_REQUEST" }); // Dispatching request action

  try {
    // Sending GET request to fetch product details
    const { data } = await axios.get(
      `${API_BASE_URL}/api/items/product/${product_id}`
    );

    // Dispatch success action with fetched data
    dispatch({ type: "FETCH_PRODUCT_SUCCESS", payload: data });

    console.log("Product details fetched successfully:", data);
  } catch (error) {
    // Improved error handling
    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong!";

    // Dispatch failure action with error message
    dispatch({ type: FETCH_PRODUCT_FAILURE, payload: errorMessage });

    console.error("Error fetching product details:", error);
  }
};

//fetch all the products in database
export const fetchAllProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_ALLPRODUCT_REQUEST }); // Dispatching request action

  try {
    // Sending GET request to fetch all products
    const { data } = await axios.get(`${API_BASE_URL}/api/items/allproducts`);

    // Dispatch success action with fetched data
    dispatch({ type: FETCH_ALLPRODUCT_SUCCESS, payload: data });
  } catch (error) {
    // Improved error handling
    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong!";

    // Dispatch failure action with error message
    dispatch({ type: FETCH_ALLPRODUCT_FAILURE, payload: errorMessage });

    console.error("Error fetching products:", error);
  }
};

//addproduct
export const addProducts = (productData) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST });

  try {
    //get token from localstorage


    console.log('add items 2: ',productData)
    const token = localStorage.getItem("jwt");

    // Debug: Check FormData contents
    // console.log("Form Data contents:");
    // for (let pair of productData.entries()) {
    //   console.log(pair[0] + ": ", pair[1]);
    // }

    //sending POST request to add the product with jwt token headers
    const { data } = await axios.post(
      `${API_BASE_URL}/api/items/addProducts`,
      productData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({ type: ADD_FAVORITE_SUCCESS, payload: data });

    // Success notification
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product added successfully",
      showConfirmButton: false,
      timer: 1500,
    });

    console.log("Product added successfully:", data);
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong!";

    // Dispatch failure action with error message
    dispatch({ type: ADD_PRODUCT_FAILURE, payload: errorMessage });

    // Show failure notification
    Swal.fire({
      title: "Error adding product",
      text: errorMessage,
      icon: "error",
    });

    console.log("Error adding product:", error);
  }
};