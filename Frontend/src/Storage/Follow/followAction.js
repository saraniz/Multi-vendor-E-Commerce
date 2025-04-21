import axios from "axios";
import Swal from "sweetalert2";
import {
  FOLLOW_STORE_REQUEST,
  FOLLOW_STORE_SUCCESS,
  FOLLOW_STORE_FAIL,
  FETCH_FOLLOWED_SHOPS_REQUEST,
  FETCH_FOLLOWED_SHOPS_SUCCESS,
  FETCH_FOLLOWED_SHOPS_FAIL,
} from "./actionType";

import { API_BASE_URL } from "../APIConfig";

// Action: Follow a Store
export const followStore = (storeId) => async (dispatch) => {
  try {
    const token = localStorage.getItem("jwt");

    if (!token) {
      Swal.fire({
        title: "Please log in to follow this store",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/LoginPage";
        }
      });
      return;
    }

    dispatch({ type: FOLLOW_STORE_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const body = {
      store_id: storeId,
    };

    const response = await axios.post(
      `${API_BASE_URL}/api/follow/followStore`,
      body,
      config
    );

    dispatch({
      type: FOLLOW_STORE_SUCCESS,
      payload: response.data,
    });

    Swal.fire({
      icon: "success",
      title: "You are now following this store",
      timer: 1500,
      showConfirmButton: false,
    });
  } catch (error) {
    console.error("Error following store:", error);
    dispatch({
      type: FOLLOW_STORE_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Action: Fetch Followed Shops
export const fetchFollowedShops = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("jwt");

    if (!token) {
      Swal.fire({
        title: "Please log in to view followed stores",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    dispatch({ type: FETCH_FOLLOWED_SHOPS_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `${API_BASE_URL}/api/follow/fetchFollowedShops`,
      config
    );

    dispatch({
      type: FETCH_FOLLOWED_SHOPS_SUCCESS,
      payload: response.data.followedShops,
    });
  } catch (error) {
    console.error("Error fetching followed shops:", error);
    dispatch({
      type: FETCH_FOLLOWED_SHOPS_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};
