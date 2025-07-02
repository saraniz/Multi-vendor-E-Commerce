import { useNavigate } from "react-router-dom";
import { api, API_BASE_URL } from "../APIConfig";
import {
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  SELLER_REGISTER_FAIL,
  SELLER_REGISTER_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from "./AuthActionType";
import axios from "axios";
import Swal from "sweetalert2";

//user register
export const userRegister = (registerData) => async (dispatch) => {
  console.log("[userRegister] Payload to backend:", registerData);
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/api/register`,
      registerData
    );

    console.log("[userRegister] Response from backend:", data);
    if (data.jwt) {
      console.log("response:", data);
      localStorage.setItem("jwt", data.jwt);
    }
    // Swal.fire({
    //   position: "top-end",
    //   icon: "success",
    //   title: "Signed up successfully",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
  //   setTimeout(() => {
  //     window.location.reload();
  // }, 3000);
  } catch (error) {
    console.log("[userRegister] Error from backend:", error);
    dispatch({
      type: REGISTER_USER_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
    Swal.fire({
      title: "SignUp failed",
      text: error.response?.data?.message || error.message,
      icon: "error",
    });
  }
};

// Assuming API_BASE_URL is defined somewhere
// const API_BASE_URL = 'http://your-api-url.com'; // Uncomment and define it properly

export const getUserProfile = () => async (dispatch) => {
  try {
    // Sending GET request to fetch user profile
    const { data } = await axios.get(
      `${API_BASE_URL}/api/user
            `,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Attach token from localStorage
        },
      }
    );

    // Dispatch the data to the reducer if request is successful
    dispatch({ type: "GET_USER_SUCCESS", payload: data });

    console.log("User data fetched successfully:", data);
  } catch (error) {
    // Improved error handling
    let errorMessage = "Something went wrong!";

    // If the error has a response, we extract the message, otherwise, use a default message
    if (error.response) {
      errorMessage =
        error.response.data.message || error.response.data || errorMessage;
    } else if (error.message) {
      errorMessage = error.message; // for network or other errors
    }

    // Dispatch failure action with the error message
    dispatch({ type: "GET_USER_FAILURE", payload: errorMessage });

    console.error("Error fetching user profile:", error);
  }
};

//user login
export const userLogin = (loginData,next) => async (dispatch) => {
  try {
    //send post request for user login
    const { data } = await axios.post(`${API_BASE_URL}/api/login`, loginData);

    //check if jwt token exists in the response
    if (data.jwt) {
      console.log("Login response:", data);
      localStorage.setItem("jwt", data.jwt); //store jwt token in localstorage
    }
    // Display success notification
    // Swal.fire({
    //   position: "top-end",
    //   icon: "success",
    //   title: "Logged in successfully",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });

    //dispatch success action
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  //   setTimeout(() => {
  //     window.location.reload();
  // }, 3000);
    
  } catch (error) {
    console.error("Login error:", error);

    //extract error message from response
    let errorMessage = "Login failed! Please try again.";
    if (error.response) {
      errorMessage =
        error.response.data.message || error.response.data || errorMessage;
    }

    //dispatch failure action
    dispatch({ type: LOGIN_USER_FAILURE, payload: errorMessage });

    //show error notification
    Swal.fire({
      title: "Login failed",
      text: errorMessage,
      icon: "error",
    });
  }
};

// Action to update user profile
export const updateProfile = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${API_BASE_URL}/api/update`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Attach token from localStorage
      },
    });

    // Dispatch success action with the updated user data
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.user }); // Assuming user data is in data.user

    // Show success notification
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Profile updated successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    console.error("Profile update error:", error);

    // Extract error message from the response if available
    let errorMessage = "Profile update failed! Please try again.";
    if (error.response) {
      errorMessage =
        error.response.data.message || error.response.data || errorMessage;
    }

    // Dispatch failure action with the error message
    dispatch({ type: UPDATE_PROFILE_FAILURE, payload: errorMessage });

    // Show error notification
    Swal.fire({
      title: "Profile update failed",
      text: errorMessage,
      icon: "error",
    });
  }
};

export const logout = () => (dispatch) => {
  // Show a success message using SweetAlert2

  // Remove the JWT token from local storage
  localStorage.removeItem("jwt");
  dispatch({ type: LOGOUT });
};

//seller register
export const sellerRegister = (sellerData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/api/registerSeller`,
      sellerData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    );

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Seller registered successfully",
      showConfirmButton: false,
      timer: 1500,
    });

    dispatch({ type: SELLER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SELLER_REGISTER_FAIL,
      payload: error.response?.data?.message || "Error occurred",
    });

    Swal.fire({
      title: "Seller registration failed",
      text: error.response?.data?.message || "Unknown error",
      icon: "error",
    });
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_REQUEST });

  try {
    const response = await axios.post(`${API_BASE_URL}/api/forgot-password`, {
      email,
    });

    console.log("📧 Forgot password email sent:", response.data);

    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: response.data.message || "Reset email sent successfully",
    });

    Swal.fire({
      icon: "success",
      title: "Email Sent",
      text: response.data.message || "Check your inbox for reset instructions.",
    });
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Something went wrong. Try again later.";

    console.error("❌ Forgot password error:", errorMessage);

    dispatch({ type: FORGOT_PASSWORD_FAILURE, payload: errorMessage });

    Swal.fire({
      icon: "error",
      title: "Reset Failed",
      text: errorMessage,
    });
  }
};

