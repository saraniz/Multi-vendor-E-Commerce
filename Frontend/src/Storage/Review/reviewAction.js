import axios from 'axios';
import {
  SUBMIT_REVIEW_REQUEST,
  SUBMIT_REVIEW_SUCCESS,
  SUBMIT_REVIEW_FAILURE,
  FETCH_REVIEWS_REQUEST,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_FAILURE,
} from './reviewActionType';
import Swal from 'sweetalert2';
import { API_BASE_URL } from '../APIConfig';
import { toast } from 'react-toastify';

// Submit review
export const submitReview = (reviewData) => async (dispatch) => {
  dispatch({ type: SUBMIT_REVIEW_REQUEST });

  try {
    const token = localStorage.getItem("jwt");

    console.log("Submitting review with data:", reviewData); // Debugging

    const { data } = await axios.post(
      `${API_BASE_URL}/api/review/submitReview`,
      reviewData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({ type: SUBMIT_REVIEW_SUCCESS, payload: data });

    toast.success("Review submitted successfully", {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
});


  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong!";

    dispatch({ type: SUBMIT_REVIEW_FAILURE, payload: errorMessage });

    toast.error("Error submitting review", {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
});


    console.error("Error submitting review:", error);
  }
};

// Fetch reviews
export const fetchReviews = (product_id) => async (dispatch) => {
  dispatch({ type: FETCH_REVIEWS_REQUEST });

  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/review/getReviews/${product_id}`);
    dispatch({ type: FETCH_REVIEWS_SUCCESS, payload: data });
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong!";

    dispatch({ type: FETCH_REVIEWS_FAILURE, payload: errorMessage });

    console.error("Error fetching reviews:", error);
  }
};