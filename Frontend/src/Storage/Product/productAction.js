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
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "./productActionType";

import { ADD_FAVORITE_SUCCESS } from "../Favorite/favActionType";

// ✅ Fetch single product details
export const fetchProductDetails = (product_id) => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_REQUEST });

  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/items/product/${product_id}`);
    dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data });
    console.log("Product details fetched successfully:", data);
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong!";
    dispatch({ type: FETCH_PRODUCT_FAILURE, payload: errorMessage });
    console.error("Error fetching product details:", error);
  }
};

// ✅ Fetch all products
export const fetchAllProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_ALLPRODUCT_REQUEST });

  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/items/allproducts`);

    const productsWithImageUrl = data.map((product) => {
      let imageUrl = null;

      if (product.product_image) {
        if (
          product.product_image.startsWith("http://") ||
          product.product_image.startsWith("https://")
        ) {
          imageUrl = product.product_image; // it's an external image URL
        } else if (product.product_image.startsWith("data:image")) {
          imageUrl = product.product_image; // already base64
        } else {
          imageUrl = `data:image/png;base64,${product.product_image}`; // raw base64 string from backend
        }
      }

      return { ...product, imageUrl };
    });

    dispatch({ type: FETCH_ALLPRODUCT_SUCCESS, payload: productsWithImageUrl });
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong!";
    dispatch({ type: FETCH_ALLPRODUCT_FAILURE, payload: errorMessage });
    console.error("Error fetching products:", error);
  }
};

// ✅ Add a product
export const addProducts = (productData) => async (dispatch) => {
  console.log('[addProducts Action] Called with:', productData);
  dispatch({ type: ADD_PRODUCT_REQUEST });

  try {
    const token = localStorage.getItem("jwt");

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

    console.log('[addProducts Action] Success Response:', data);
    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
    dispatch({ type: ADD_FAVORITE_SUCCESS, payload: data });

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product added successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong!";
    console.error('[addProducts Action] Error:', errorMessage, error);
    dispatch({ type: ADD_PRODUCT_FAILURE, payload: errorMessage });

    Swal.fire({
      title: "Error adding product",
      text: errorMessage,
      icon: "error",
    });
  }
};

export const updateProduct = (prisma_id, formData) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_REQUEST });
  console.log("[updateProduct Action] Started for prisma_id:", prisma_id);

  try {
    const token = localStorage.getItem("jwt");

    // Debugging the FormData
    console.log("[updateProduct Action] FormData Preview:");
    for (let [key, value] of formData.entries()) {
      if (key === "product_image") {
        console.log(`📸 ${key}:`, value?.name);
      } else {
        console.log(`📦 ${key}:`, value);
      }
    }

    const { data } = await axios.put(
      `${API_BASE_URL}/api/items/product/update/${prisma_id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });

    Swal.fire({
      icon: "success",
      title: "Product Updated!",
      text: "Your product has been updated successfully.",
      timer: 1500,
      showConfirmButton: false,
    });

    console.log("[updateProduct Action] Success Response:", data);
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong!";

    dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: errorMessage });

    Swal.fire({
      icon: "error",
      title: "Update Failed",
      text: errorMessage,
    });

    console.error("[updateProduct Action] Error occurred:", error);
  }
};